// Send Inquiry — routes both the studio notification and the visitor
// confirmation through the Resend connector gateway. One inbox sitewide:
// sales@hickoryandrose.com.

import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";
import { z } from "npm:zod@3.23.8";

const GATEWAY_URL = "https://connector-gateway.lovable.dev/resend/emails";
const STUDIO_INBOX = "sales@hickoryandrose.com";
const FROM = "Hickory & Rose <sales@hickoryandrose.com>";

const inquirySchema = z.object({
  name: z.string().trim().min(1).max(120),
  partner: z.string().trim().max(120).optional().or(z.literal("")),
  email: z.string().trim().email().max(255),
  date: z.string().trim().max(80).optional().or(z.literal("")),
  venue: z.string().trim().max(200).optional().or(z.literal("")),
  guests: z.string().trim().max(80).optional().or(z.literal("")),
  service: z.string().trim().max(120).optional().or(z.literal("")),
  referral: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
});

const journalSchema = z.object({
  email: z.string().trim().email().max(255),
});

const bodySchema = z.discriminatedUnion("type", [
  z.object({ type: z.literal("inquiry"), payload: inquirySchema }),
  z.object({ type: z.literal("journal"), payload: journalSchema }),
]);

// ---------- Brand-aligned email templates (inline HTML) ----------
const brand = {
  bg: "#FAF8F4",         // ivory
  ink: "#2C2A26",        // foreground
  muted: "#6B6760",      // muted
  rule: "#D9D2C5",       // hairline
  gold: "#A8895C",       // accent
  serif: "'Cormorant Garamond', 'Cormorant', Georgia, 'Times New Roman', serif",
  sans: "'Jost', 'Helvetica Neue', Arial, sans-serif",
};

const esc = (v: string) =>
  v.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const shell = (inner: string, preview: string) => `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Hickory &amp; Rose</title></head>
<body style="margin:0;padding:0;background:${brand.bg};font-family:${brand.sans};color:${brand.ink};">
<span style="display:none!important;opacity:0;color:transparent;height:0;width:0;overflow:hidden;">${esc(preview)}</span>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${brand.bg};padding:40px 16px;">
  <tr><td align="center">
    <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;background:#ffffff;border:1px solid ${brand.rule};">
      <tr><td style="padding:40px 44px 8px 44px;text-align:center;">
        <div style="font-family:${brand.serif};font-size:30px;letter-spacing:0.08em;color:${brand.ink};">Hickory &amp; Rose</div>
        <div style="height:1px;background:${brand.gold};width:48px;margin:14px auto 0 auto;opacity:0.6;"></div>
      </td></tr>
      <tr><td style="padding:24px 44px 44px 44px;font-size:16px;line-height:1.7;color:${brand.ink};">${inner}</td></tr>
      <tr><td style="padding:20px 44px 32px 44px;border-top:1px solid ${brand.rule};text-align:center;font-size:13px;color:${brand.muted};">
        Hickory &amp; Rose · Wedding Planning &amp; Design<br>
        <a href="mailto:${STUDIO_INBOX}" style="color:${brand.muted};text-decoration:none;">${STUDIO_INBOX}</a>
      </td></tr>
    </table>
  </td></tr>
</table>
</body></html>`;

const row = (label: string, value?: string) =>
  value && value.trim()
    ? `<tr><td style="padding:6px 0;color:${brand.muted};font-size:14px;width:140px;vertical-align:top;">${esc(label)}</td><td style="padding:6px 0;color:${brand.ink};font-size:15px;">${esc(value)}</td></tr>`
    : "";

function inquiryConfirmationHtml(f: z.infer<typeof inquirySchema>) {
  const greeting = f.partner?.trim() ? `${esc(f.name)} &amp; ${esc(f.partner)}` : esc(f.name);
  const inner = `
    <p style="font-family:${brand.serif};font-size:24px;line-height:1.4;margin:0 0 18px 0;color:${brand.ink};">Dear ${greeting},</p>
    <p style="margin:0 0 18px 0;">Your inquiry has arrived safely at the studio. Thank you for trusting us with the early dreaming of your wedding — it is a privilege we never take lightly.</p>
    <p style="margin:0 0 18px 0;">Meg will personally read every word and reply within <strong style="font-weight:500;">24 to 48 business hours</strong> with next steps and availability.</p>
    <div style="height:1px;background:${brand.rule};margin:28px 0;"></div>
    <p style="font-family:${brand.sans};font-size:12px;letter-spacing:0.18em;text-transform:uppercase;color:${brand.muted};margin:0 0 12px 0;">A copy of what you shared</p>
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
      ${row("Name", f.name)}
      ${row("Partner", f.partner || "")}
      ${row("Email", f.email)}
      ${row("Wedding date", f.date || "")}
      ${row("Venue", f.venue || "")}
      ${row("Guests", f.guests || "")}
      ${row("Service", f.service || "")}
      ${row("Referral", f.referral || "")}
    </table>
    ${f.message?.trim() ? `<p style="margin:18px 0 0 0;color:${brand.muted};font-size:14px;">Your vision</p><p style="margin:6px 0 0 0;font-style:italic;color:${brand.ink};">${esc(f.message)}</p>` : ""}
    <div style="height:1px;background:${brand.rule};margin:28px 0;"></div>
    <p style="font-family:${brand.serif};font-style:italic;color:${brand.muted};margin:0;">"Refined, rustic, and entirely yours."</p>
  `;
  return shell(inner, `Your inquiry has arrived at the studio, ${f.name}.`);
}

function inquiryStudioHtml(f: z.infer<typeof inquirySchema>) {
  const inner = `
    <p style="font-family:${brand.serif};font-size:22px;margin:0 0 16px 0;">New wedding inquiry</p>
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
      ${row("Name", f.name)}
      ${row("Partner", f.partner || "")}
      ${row("Email", f.email)}
      ${row("Wedding date", f.date || "")}
      ${row("Venue", f.venue || "")}
      ${row("Guests", f.guests || "")}
      ${row("Service", f.service || "")}
      ${row("Referral", f.referral || "")}
    </table>
    ${f.message?.trim() ? `<div style="margin-top:18px;padding:16px;background:${brand.bg};border-left:2px solid ${brand.gold};"><p style="margin:0 0 6px 0;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;color:${brand.muted};">Their vision</p><p style="margin:0;white-space:pre-wrap;">${esc(f.message)}</p></div>` : ""}
    <p style="margin:24px 0 0 0;font-size:13px;color:${brand.muted};">Reply directly to this email to reach ${esc(f.name)}.</p>
  `;
  return shell(inner, `New inquiry from ${f.name}`);
}

function journalConfirmationHtml(email: string) {
  const inner = `
    <p style="font-family:${brand.serif};font-size:24px;margin:0 0 18px 0;">Welcome to the Studio Notebook.</p>
    <p style="margin:0 0 18px 0;">You'll receive one quietly considered essay each month — seasonal inspiration, planning wisdom, and first access to new journal entries.</p>
    <p style="margin:0;color:${brand.muted};font-size:14px;">Curated with care. Never spam. Unsubscribe anytime by replying to any note.</p>
  `;
  return shell(inner, "Welcome to the Hickory & Rose Studio Notebook.");
}

function journalStudioHtml(email: string) {
  const inner = `
    <p style="font-family:${brand.serif};font-size:22px;margin:0 0 12px 0;">New notebook subscriber</p>
    <p style="margin:0;font-size:16px;">${esc(email)}</p>
  `;
  return shell(inner, `New subscriber: ${email}`);
}

// ---------- Resend send ----------
async function sendEmail(args: {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}) {
  const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
  const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
  if (!LOVABLE_API_KEY || !RESEND_API_KEY) {
    throw new Error("Email credentials not configured");
  }
  const res = await fetch(GATEWAY_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${LOVABLE_API_KEY}`,
      "X-Connection-Api-Key": RESEND_API_KEY,
    },
    body: JSON.stringify({
      from: FROM,
      to: [args.to],
      subject: args.subject,
      html: args.html,
      reply_to: args.replyTo ?? STUDIO_INBOX,
    }),
  });
  const text = await res.text();
  if (!res.ok) {
    throw new Error(`Resend ${res.status}: ${text}`);
  }
  return text;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
  try {
    const json = await req.json();
    const parsed = bodySchema.safeParse(json);
    if (!parsed.success) {
      return new Response(
        JSON.stringify({ error: "Invalid input", details: parsed.error.flatten() }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (parsed.data.type === "inquiry") {
      const f = parsed.data.payload;
      const who = f.partner?.trim() ? `${f.name} & ${f.partner}` : f.name;
      await Promise.all([
        sendEmail({
          to: STUDIO_INBOX,
          subject: `New Wedding Inquiry — ${who}`,
          html: inquiryStudioHtml(f),
          replyTo: f.email,
        }),
        sendEmail({
          to: f.email,
          subject: "Your inquiry has arrived — Hickory & Rose",
          html: inquiryConfirmationHtml(f),
        }),
      ]);
    } else {
      const { email } = parsed.data.payload;
      await Promise.all([
        sendEmail({
          to: STUDIO_INBOX,
          subject: `Studio Notebook signup — ${email}`,
          html: journalStudioHtml(email),
          replyTo: email,
        }),
        sendEmail({
          to: email,
          subject: "Welcome to the Studio Notebook — Hickory & Rose",
          html: journalConfirmationHtml(email),
        }),
      ]);
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("send-inquiry error", err);
    return new Response(
      JSON.stringify({ error: err instanceof Error ? err.message : "Send failed" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
