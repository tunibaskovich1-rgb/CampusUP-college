## 2024-05-19 - Universal Focus Indicator

**Learning:** Adding a universal `*:focus-visible` outline is a highly effective way to ensure consistent keyboard accessibility across all interactive elements (buttons, links, inputs) in this project, without overriding custom component border-radii or specific states. The offset prevents the outline from being cut off by `overflow: hidden` on parent containers.

**Action:** Consistently apply `outline: 2px solid <brand-color>; outline-offset: 2px;` in the global stylesheet for static projects lacking a design system framework to immediately solve missing focus states globally.
