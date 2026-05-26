## 2024-05-24 - Missing Keyboard Focus States

**Learning:** Interactive elements throughout the design system lacked visible focus states for keyboard users, making the site difficult to navigate using only a keyboard.

**Action:** Added a global `*:focus-visible` CSS rule in `styles.css` using the primary brand color (`#2563eb`) with an outline and offset to ensure all interactive elements receive a clear, high-contrast focus indicator when navigated via keyboard. Future components should ensure they don't unexpectedly hide this outline unless replaced with a similarly visible custom focus state.
