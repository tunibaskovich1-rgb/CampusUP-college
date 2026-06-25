## 2024-06-25 - Universal Focus-Visible Styling

**Learning:** When styling custom focus indicators for keyboard navigation across a diverse set of interactive elements, it's often more robust and maintainable to apply a universal `*:focus-visible` selector rather than narrowly targeting specific elements. Additionally, using `outline-offset` alongside `outline` ensures the focus ring contrasts well against varying backgrounds and does not overlap with the element's boundaries.

**Action:** Prefer applying `*:focus-visible { outline: 2px solid <brand-color>; outline-offset: 2px; }` to establish a baseline high-contrast focus state for keyboard users, ensuring all focusable custom elements have clear visibility.