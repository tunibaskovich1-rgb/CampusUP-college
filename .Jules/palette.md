## 2024-05-14 - Universal Focus Outline Design Pattern

**Learning:** When styling custom `:focus-visible` indicators universally using the wildcard selector (`*:focus-visible`), using `border-radius: inherit` can inadvertently override specific border radii of targeted components, especially on focus states of custom UI elements.

**Action:** Standardize on adding a clean `outline-offset: 2px` accompanied by the brand color for focus indicators, and avoid mixing `border-radius: inherit` on global focus styles to maintain clean separation between the element's container shape and its focus ring.
