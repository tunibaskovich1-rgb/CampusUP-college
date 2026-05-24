## 2024-03-24 - High-Contrast Keyboard Focus States
**Learning:** Default browser focus rings often lack sufficient contrast against certain backgrounds, leading to poor keyboard navigation accessibility. Interactive elements need explicit, high-contrast `:focus-visible` styles to ensure clear visibility for keyboard users.
**Action:** Always define custom `:focus-visible` styles using the primary brand color (`#2563eb` in this case) with an `outline` and `outline-offset` for all focusable elements (links, buttons, inputs, details, summaries).
