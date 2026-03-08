

# Upgrade: ServiceTierCard Gold Shimmer Sweep on Hover

## Current State
The InquireCelebration upgrade is already fully implemented. The `ServiceTierCard` component (177 lines) uses static gold corner frames on image hover but lacks any shimmer effect on the card content area itself. This is the next logical premium polish item.

## Plan (2 items)

1. **Add diagonal gold shimmer sweep to ServiceTierCard** -- Add a `motion.div` overlay inside each service tier section that activates on hover via CSS `group-hover`. The shimmer travels bottom-left to top-right using a `translate` animation on a thin diagonal gradient band (`linear-gradient(135deg, transparent, hsl(--gold / 0.08), transparent)`). Uses `overflow-hidden` on the parent and CSS `transition` with `transform` for zero-JS-thread cost. Only triggers once per hover via `group-hover:translate-x-[200%] group-hover:translate-y-[-200%]` with `duration-700`.

2. **Add subtle gold border-bottom reveal on the "What's Included" header** -- Replace the static `border-t` on the includes section with a CSS-animated underline that scales from left on scroll into view, using the existing `origin-left` + framer `whileInView` pattern already used elsewhere in the component.

## Files Modified
- `src/components/wedding/ServiceTierCard.tsx` -- Add shimmer overlay span + animated includes header

