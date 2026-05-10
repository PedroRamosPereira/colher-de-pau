# Unit Landing UX Design

## Context

The current unit landing pages already communicate brand warmth, but the primary QR-code use case still competes with a more utility-first experience from the current live site. The new page should preserve the welcoming, bistro-like feel while making the first actions extremely fast for someone seated at a table.

The page must keep image placeholders for now. Real photography will replace those assets later without requiring structural changes.

## Goal

Create a unit page experience that:

- opens from a unit QR code and feels immediately relevant to that unit
- gives fast one-click access to the PDF menu
- supports unit-specific menu variations when a unit has more than one PDF menu
- gives fast one-click access to the daily recommendation area
- keeps the emotional tone warmer and more hospitable than a purely utilitarian competitor
- preserves placeholder imagery until real assets are available

## Success Criteria

- The first viewport shows the unit identity and the most important quick actions.
- The PDF menu CTA is one of the most visually prominent actions.
- Units with multiple menus expose them clearly without adding friction to the first interaction.
- The daily recommendation section is easy to reach and visually framed as curated guidance.
- The page feels more welcoming than a generic delivery-oriented menu hub.
- Existing placeholder images remain supported without layout changes later.

## Chosen Direction

Recommended and approved approach: `Praticidade com calor humano`.

This direction combines:

- a compact but expressive hero
- a dedicated quick-actions block near the top
- a recommendation module that feels curated, not mechanical
- continued use of warm typography, spacious layout, and soft surfaces

## Information Hierarchy

The unit page should follow this order:

1. sticky navigation with direct access to PDF menu
2. compact hero for the selected unit
3. quick actions block
4. quick recommendation section
5. fuller recommendation/cards section
6. menu section
7. remaining brand and footer content

This order prioritizes table usage first, then discovery.

## Component Changes

### Hero

The hero should be more functional than the current version while keeping the brand tone.

Required changes:

- reduce the sense of a purely editorial hero
- surface practical unit information earlier
- include a concise welcoming line for the unit
- keep one primary CTA and supporting quick actions
- maintain the placeholder hero image and overlay treatment

### Quick Actions Block

Add a dedicated action surface directly below or within the hero area.

Actions:

- Ver cardapio PDF
- Ver carta de vinhos, when available for the current unit
- Recomendacao do dia
- Pedir no iFood, if available
- WhatsApp
- Como chegar

Behavior and layout rules:

- mobile-first layout
- large touch targets
- strong contrast
- action order should favor in-table usage
- the PDF CTA must remain the clearest and fastest option
- when a unit has a secondary menu, the main food menu remains first and the secondary menu is presented as a clearly labeled supporting action

### Unit-Specific Menu Variants

The Praia da Costa unit has:

- its own main menu PDF
- a separate wine menu PDF

Implementation requirements:

- the unit data model must support more than one PDF menu per unit
- the main food menu must stay the primary action
- the wine menu must appear only for units that provide it
- copy should make the distinction obvious, for example `Cardapio da casa` and `Carta de vinhos`
- the Itaparica unit should continue to work without extra menu clutter

### Quick Recommendation Module

Add a compact curated module near the top of the page.

Structure:

- 1 `destaque do dia`
- 2 `classicos da casa`
- short copy framing the selection as hospitality and guidance
- CTA to open the full PDF menu

Data model:

- use the existing daily picks data for now
- interpret the first item as the daily highlight
- interpret the second and third items as permanent-style recommendations for this first implementation

This avoids schema expansion in the first pass while matching the approved UX concept closely enough.

### Recommendation Section Refinement

The existing recommendations section should remain, but it should feel more like a continuation of the quick recommendation block rather than the user's first point of orientation.

Possible adjustments:

- improved heading hierarchy
- tighter intro copy
- stronger card consistency
- better relation to the quick-jump CTA from the top

### Navigation

Navigation should better support the QR-code scenario.

Required changes:

- keep the sticky header
- keep the PDF menu CTA available in navigation
- make the CTA wording direct and immediate
- keep section links, but do not let them compete visually with the primary quick actions

## Visual Direction

The visual language should remain aligned with the existing brand system, but be more structured around speed and clarity.

Guidelines:

- keep warm neutrals and caramel accents
- retain serif emphasis for brand moments and headings
- use cleaner card grouping and spacing for practical tools
- make action blocks visually distinct from editorial content
- preserve placeholder images until real photography is ready

Avoid:

- turning the page into a delivery-only utility hub
- over-expanding the hero and pushing quick actions below the fold
- introducing visual noise or too many competing CTAs

## Accessibility and Interaction

- all quick actions must be easy to tap on mobile
- visible focus styles must remain intact
- card and button contrast must remain accessible
- recommendation jumps must use clear anchor targets
- no motion should be required to understand the page

## Image Strategy

For now, keep current placeholder/generated assets.

The implementation should make later image replacement easy by preserving stable slots for:

- main unit image
- recommendation highlight image
- classic recommendation images
- menu card images

No real-image integration work is required in this pass.

## Scope Boundaries

Included:

- homepage/unit-page UX restructuring
- new quick actions block
- new compact recommendation experience near the top
- support for unit-specific menu links, including a separate wine menu for Praia da Costa
- copy and hierarchy refinement in existing sections

Not included:

- CMS or admin tooling for recommendations
- new backend integration
- replacing placeholders with real images now
- a per-table stateful QR flow

## Implementation Notes

- prefer minimal changes to current component structure
- reuse existing unit data where possible
- avoid introducing new dependencies
- keep image placeholders and current assets wired as they are
- adapt the existing sections rather than rebuilding the whole page
