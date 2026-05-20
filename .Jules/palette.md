## 2026-05-20 - [Add focus-visible for keyboard navigation]
**Learning:** Global `:focus-visible` is a low-effort, high-impact pattern to instantly make interactive elements (like buttons, links, summary tags) keyboard accessible without affecting mouse users.
**Action:** Add this block of CSS `a:focus-visible, button:focus-visible... { outline: 2px solid [primary color]; outline-offset: 3px; }` to the base styles of future projects by default.
