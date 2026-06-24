# Remove Gate + Wire Real Email Delivery

## 1. Remove the password gate
- `src/App.tsx`: drop the `PasswordGate` lazy import, the `unlocked` state, and the gating branch — render the app directly.
- Delete `src/components/wedding/PasswordGate.tsx`.

## 2. Email audit (sitewide)
Only one address is currently referenced anywhere on the site: **sales@hickoryandrose.com** (Footer, Accommodations, Inquire, Journal, brand-identity config). Nothing to remove — the audit is already clean. I'll add a brief comment in `brand-identity.ts` codifying the "single inbox" rule so future additions don't reintroduce hello@/info@/contact@.

## 3. Real email delivery (replace `mailto:` flows)
Two forms currently dump into the visitor's mail client. Both will switch to real backend sends via Resend:

**a. Enable Lovable Cloud** (required to host the edge function and store the Resend connection).

**b. Connect Resend** via the standard connector (`standard_connectors--connect` → `resend`). The user already mentioned Resend explicitly, so no provider question.

**c. Edge function `send-inquiry`** (single function, two template types):
- Accepts `{ type: "inquiry" | "journal", payload }`.
- Validates input with zod (name/email length caps, email format, message ≤ 2000 chars).
- Sends **two emails** per submission through the Resend gateway:
  1. **Studio notification** → `sales@hickoryandrose.com` with all form fields (subject: `New Wedding Inquiry — {name}` or `Studio Notebook signup — {email}`).
  2. **Visitor confirmation** → the submitter's email, From `Hickory & Rose <sales@hickoryandrose.com>`, Reply-To `sales@hickoryandrose.com`.
- Returns `{ ok: true }` or a structured error.

**d. Email templates (new, brand-aligned)** — none exist yet, so I'm creating them. Built as inline HTML strings inside the edge function (no React Email dep needed for two simple templates) using the brand palette (ivory background, sage accents, Cormorant-style serif via web-safe `Georgia` fallback, gold hairline divider). Once created they become the "templates that are there and up to standard" — future edits will leave them alone per your rule.
  - `inquiry-confirmation.html` — warm thank-you to bride: "Your inquiry has arrived at the studio. Meg will personally reply within 24–48 business hours." Includes a recap of what they submitted and the signature quote.
  - `inquiry-studio.html` — clean internal layout of all fields for the studio inbox.
  - `journal-confirmation.html` — short welcome to the Studio Notebook list.
  - `journal-studio.html` — single-line notice with the new subscriber's email.

**e. Wire the forms**
- `src/pages/Inquire.tsx` `handleSubmit`: replace the `window.location.href = mailto…` block with `supabase.functions.invoke("send-inquiry", { body: { type: "inquiry", payload: f } })`. Keep the existing success state + toast; on failure show an error toast and offer the mailto link as fallback.
- `src/pages/Journal.tsx` notify form: same swap, `type: "journal"`.

Footer and Accommodations stay as plain `mailto:` links (those are direct contact affordances, not forms — they don't need backend delivery).

## 4. Out of scope
- No changes to existing copy, layout, fonts, or the recently-shipped readability floor.
- No marketing/list emails — confirmation only, triggered by the user's own submission (transactional).
- No new dependencies beyond what the Resend connector and Lovable Cloud already provide.

## Verification
- Confirm preview loads with no gate.
- Submit the Inquire form with a test address; confirm both emails arrive (studio + bride) and the page shows the success state.
- Submit the Journal form; confirm both emails arrive.
- `rg "PasswordGate|mailto:.*@"` — no PasswordGate refs remain; only the intentional Footer/Accommodations mailto links to sales@.
