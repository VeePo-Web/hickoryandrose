## Password Gate

Mirror the RoyalMechanical pattern: a lightweight client-side gate that hides the site until the visitor enters the password. Unlock persists in `sessionStorage` (resets per browser session). Not real security — just a soft lock to keep the preview private before launch.

### Files

1. **New: `src/components/wedding/PasswordGate.tsx`**
   - Local state for input + error.
   - On submit, compare against `"hickoryandrose1"`. If match → `sessionStorage.setItem("hr_site_unlocked", "true")` and call `onUnlock()`.
   - Wrong password → show "Incorrect password", auto-clear after 2s.
   - Styling: full-screen ivory/sage brand background, Cormorant Garamond "Hickory & Rose" wordmark on top, Great Vibes "&" accent, Jost label + input + button using existing semantic tokens (no hardcoded colors). Centered, max-w-xs form, autofocus input.

2. **Edit: `src/App.tsx`**
   - Add `const [unlocked, setUnlocked] = useState(() => sessionStorage.getItem("hr_site_unlocked") === "true")`.
   - Lazy-import `PasswordGate`.
   - Before returning the normal app tree, if `!unlocked` render `<PasswordGate onUnlock={() => setUnlocked(true)} />` inside `<Suspense fallback={null}>`.
   - Everything else (LoadingScreen, routes, smooth scroll) is unchanged and only mounts after unlock.

### Out of scope
- No real auth, no Lovable Cloud, no per-route gating, no "remember me" beyond the session.
- No changes to SEO/meta — crawlers will still see the gate page only; acceptable for a pre-launch preview. (Flag for owner if they want it removed before public launch.)
