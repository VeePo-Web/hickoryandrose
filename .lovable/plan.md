

# Add Subtle "Powered by Veepo" Badge on Inquire Page

## What

Add a subtle "This website is powered locally by veepo.ca" text below the Continue/Send Inquiry button on the Inquire page form, matching the style from the Worship In The Park project. It links to `veepo.ca/case-studies` and uses Veepo's green and orange brand colors.

## Changes (1 file)

### `src/pages/Inquire.tsx`

After line 246 (the "We respond to every inquiry within 48 hours" paragraph), add a subtle Veepo attribution link:

```tsx
<a
  href="https://veepo.ca/case-studies"
  target="_blank"
  rel="noopener noreferrer"
  className="group inline-flex items-center justify-center gap-1 mt-3 w-full"
>
  <span className="text-caption tracking-[0.1em] uppercase text-muted-foreground/40 group-hover:text-muted-foreground/60 transition-colors duration-300">
    This website is powered locally by
  </span>
  <span
    className="text-caption tracking-[0.1em] uppercase font-medium transition-colors duration-300"
    style={{
      background: "linear-gradient(90deg, #2e7d32, #f57c00)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    }}
  >
    veepo.ca
  </span>
</a>
```

- Uses `text-caption` (13px) to stay within readability standards
- Default state is very subtle (`text-muted-foreground/40`)
- On hover, text brightens and "veepo.ca" shows the green-to-orange gradient
- Links to `veepo.ca/case-studies` in a new tab
- No logo image needed — text-only, matching the editorial feel

