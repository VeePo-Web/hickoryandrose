#!/usr/bin/env python
"""
Hickory & Rose — logo asset package generator.

Takes a single flat-background logo (default: ~/Downloads/Full Logo.jpg) and
produces the full web logo package: transparent UI logos (PNG + lossless WebP),
reversed/ivory variants for dark surfaces, the emblem-only mark, and a complete
favicon / PWA / social-card set.

Re-run this whenever a higher-res or vector source arrives:
    python scripts/generate-logo-assets.py "C:/path/to/new-logo.jpg"
"""
import sys, os, base64
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = sys.argv[1] if len(sys.argv) > 1 else os.path.expanduser("~/Downloads/Full Logo.jpg")
ASSETS = os.path.join(ROOT, "src", "assets")
PUBLIC = os.path.join(ROOT, "public")
os.makedirs(ASSETS, exist_ok=True)
os.makedirs(PUBLIC, exist_ok=True)

# Brand tokens (sampled from src/index.css)
CREAM = (247, 244, 240)      # opaque icon background  (#F7F4F0)
IVORY = (251, 249, 245)      # reversed text colour     (#FBF9F5)
CHARCOAL = (48, 41, 33)      # mono dark colour         (#302921)

BG = (252, 252, 252)         # source background (measured)
LO, HI = 12.0, 44.0          # alpha feather thresholds (distance from BG)


def extract_alpha(im):
    """Flat-background removal with feathered edges + white decontamination."""
    im = im.convert("RGB")
    w, h = im.size
    out = Image.new("RGBA", (w, h))
    sp, dp = im.load(), out.load()
    for y in range(h):
        for x in range(w):
            r, g, b = sp[x, y]
            d = ((r - BG[0]) ** 2 + (g - BG[1]) ** 2 + (b - BG[2]) ** 2) ** 0.5
            if d <= LO:
                dp[x, y] = (0, 0, 0, 0)
                continue
            a = 1.0 if d >= HI else (d - LO) / (HI - LO)
            # un-multiply the white the source was composited over → kills halo
            nr = (r - (1 - a) * BG[0]) / a
            ng = (g - (1 - a) * BG[1]) / a
            nb = (b - (1 - a) * BG[2]) / a
            clamp = lambda v: 0 if v < 0 else 255 if v > 255 else int(round(v))
            dp[x, y] = (clamp(nr), clamp(ng), clamp(nb), clamp(a * 255))
    return out


def trim(im, pad_frac=0.0):
    bbox = im.getbbox()
    im = im.crop(bbox)
    if pad_frac:
        w, h = im.size
        p = int(round(max(w, h) * pad_frac))
        canvas = Image.new("RGBA", (w + 2 * p, h + 2 * p), (0, 0, 0, 0))
        canvas.paste(im, (p, p), im)
        im = canvas
    return im


def saturation(r, g, b):
    mx, mn = max(r, g, b), min(r, g, b)
    return 0 if mx == 0 else (mx - mn) / mx


def recolor(im, color, only_low_sat=False, sat_t=0.22):
    """Recolour opaque pixels, preserving the alpha channel (anti-aliasing)."""
    im = im.copy()
    px = im.load()
    w, h = im.size
    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            if a == 0:
                continue
            if only_low_sat and saturation(r, g, b) >= sat_t:
                continue  # keep coloured emblem
            px[x, y] = (color[0], color[1], color[2], a)
    return im


def emblem_bbox(im, sat_t=0.22, val_t=115):
    """Bounding box of the leaf+rose artwork only.
    Require saturation AND brightness so the dark (warm-charcoal) wordmark,
    which also carries some chroma, is excluded."""
    px = im.load()
    w, h = im.size
    minx, miny, maxx, maxy = w, h, 0, 0
    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            if a > 140 and saturation(r, g, b) >= sat_t and max(r, g, b) >= val_t:
                minx, maxx = min(minx, x), max(maxx, x)
                miny, maxy = min(miny, y), max(maxy, y)
    return (minx, miny, maxx + 1, maxy + 1)


def square(im, pad_frac=0.10, bg=None):
    """Center on a square canvas with padding; transparent unless bg given."""
    w, h = im.size
    side = int(round(max(w, h) * (1 + 2 * pad_frac)))
    fill = (bg[0], bg[1], bg[2], 255) if bg else (0, 0, 0, 0)
    canvas = Image.new("RGBA", (side, side), fill)
    canvas.paste(im, ((side - w) // 2, (side - h) // 2), im)
    return canvas


def save_png_webp(im, name, folder=ASSETS):
    im.save(os.path.join(folder, name + ".png"))
    im.save(os.path.join(folder, name + ".webp"), "WEBP", lossless=True, quality=100, method=6)
    print("  ", os.path.relpath(os.path.join(folder, name), ROOT) + ".{png,webp}", im.size)


print("Source:", SRC)
master = extract_alpha(Image.open(SRC))

# ---- UI logos (src/assets, hashed by Vite) ----
full = trim(master, pad_frac=0.0)
save_png_webp(full, "logo-full")
save_png_webp(recolor(full, IVORY, only_low_sat=True), "logo-full-reversed")
save_png_webp(recolor(full, IVORY), "logo-full-ivory")

eb = emblem_bbox(master)
emblem = trim(master.crop(eb))
save_png_webp(emblem, "logo-emblem")
save_png_webp(recolor(emblem, IVORY), "logo-emblem-ivory")

# wordmark = everything below the emblem
wm = master.crop((0, eb[3], master.size[0], master.size[1]))
wordmark = trim(wm)
save_png_webp(wordmark, "logo-wordmark")
save_png_webp(recolor(wordmark, IVORY), "logo-wordmark-ivory")

# script line only ("Hickory & Rose") — split wordmark at its emptiest middle row.
# Used as a horizontal nav lockup paired with the emblem.
def split_row(im):
    px = im.load(); w, h = im.size
    best, best_ink = h // 2, 1e18
    for y in range(int(h * 0.45), int(h * 0.8)):
        ink = sum(px[x, y][3] for x in range(w))
        if ink < best_ink:
            best_ink, best = ink, y
    return best
sr = split_row(wordmark)
script = trim(wordmark.crop((0, 0, wordmark.size[0], sr)))
save_png_webp(script, "logo-script")
save_png_webp(recolor(script, IVORY), "logo-script-ivory")

# ---- Favicon / PWA / social (public root) ----
print("public/:")
ico_emblem = square(emblem, pad_frac=0.08)
for s in (16, 32, 48):
    ico_emblem.resize((s, s), Image.LANCZOS).save(os.path.join(PUBLIC, f"favicon-{s}.png"))
ico_emblem.resize((256, 256), Image.LANCZOS).save(
    os.path.join(PUBLIC, "favicon.ico"), sizes=[(16, 16), (32, 32), (48, 48)]
)
print("   favicon.ico + favicon-16/32/48.png")

# favicon.svg: embed the 64px emblem so the existing svg reference stays valid + crisp
tmp = os.path.join(PUBLIC, "_fav64.png")
ico_emblem.resize((64, 64), Image.LANCZOS).save(tmp)
with open(tmp, "rb") as f:
    b64 = base64.b64encode(f.read()).decode()
os.remove(tmp)
with open(os.path.join(PUBLIC, "favicon.svg"), "w", encoding="utf-8") as f:
    f.write(
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">'
        f'<image width="64" height="64" href="data:image/png;base64,{b64}"/></svg>'
    )
print("   favicon.svg (embedded emblem)")

# Apple touch icon — opaque cream (Apple paints alpha black)
square(emblem, pad_frac=0.16, bg=CREAM).resize((180, 180), Image.LANCZOS).convert("RGB").save(
    os.path.join(PUBLIC, "apple-touch-icon.png")
)
# Android / PWA
square(emblem, pad_frac=0.12).resize((192, 192), Image.LANCZOS).save(os.path.join(PUBLIC, "android-chrome-192.png"))
square(emblem, pad_frac=0.12).resize((512, 512), Image.LANCZOS).save(os.path.join(PUBLIC, "android-chrome-512.png"))
# Maskable — generous safe zone on cream
square(emblem, pad_frac=0.26, bg=CREAM).resize((512, 512), Image.LANCZOS).save(os.path.join(PUBLIC, "maskable-512.png"))
print("   apple-touch-icon / android-chrome-192,512 / maskable-512")

# OG social card 1200x630 — full logo centred on cream
og = Image.new("RGBA", (1200, 630), (CREAM[0], CREAM[1], CREAM[2], 255))
ow = int(1200 * 0.52)
scale = ow / full.size[0]
fr = full.resize((ow, int(full.size[1] * scale)), Image.LANCZOS)
og.paste(fr, ((1200 - fr.size[0]) // 2, (630 - fr.size[1]) // 2), fr)
og.convert("RGB").save(os.path.join(PUBLIC, "og-image.jpg"), quality=90)
print("   og-image.jpg (1200x630)")

print("Done.")
