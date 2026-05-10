## Objective

Remove the dark banner above the site header that displays the current unit message (`"Você está vendo..."`).

## Context

The message is currently rendered by `src/components/site/UnitBanner.tsx` and included in `src/components/site/Navbar.tsx`.

The approved direction is to remove this banner entirely because the active unit is already sufficiently communicated through the page titles and surrounding content.

## Scope

- Remove the `UnitBanner` render from `Navbar`
- Remove the now-unused `UnitBanner` import from `Navbar`
- Delete `src/components/site/UnitBanner.tsx` if it is no longer referenced

## Out of Scope

- Any other header layout changes
- Replacing the banner with another visual treatment
- Changes to unit selection behavior or content

## Implementation Design

Apply the smallest possible change in the existing structure:

1. Update `src/components/site/Navbar.tsx` to stop importing `UnitBanner`
2. Remove the `<UnitBanner />` element from the header markup
3. Delete `src/components/site/UnitBanner.tsx` because it becomes dead code

## Expected Result

- The dark top strip no longer appears on pages using `Navbar`
- The main navigation remains unchanged
- Unit context continues to be conveyed by the page copy and titles

## Risks

Low risk. The change is isolated to header presentation and removes an element that has no interactive behavior.

## Verification

- Confirm `Navbar` renders without the dark banner
- Confirm there are no remaining references to `UnitBanner`
- Run the relevant project checks after implementation
