## 2024-07-04 - Universal Focus-Visible Styles

**Learning:** When applying a universal `*:focus-visible` CSS rule for keyboard accessibility, it's important not to set `border-radius: inherit;`, as it can override the intentional styles of pre-existing rounded elements like buttons. Using an `outline-offset` (e.g., `2px`) alongside the outline ensures the focus ring contrasts well against varying backgrounds and does not overlap with the element's boundaries.

**Action:** Always use `outline` and `outline-offset` for custom focus indicators instead of relying on inherited border-radius, and prefer universal rules to cover all interactive elements consistently.