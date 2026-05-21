## 2024-05-24 - Inconsistent aria-expanded Usage in Navigation
**Learning:** `aria-expanded` was used inconsistently across navigation components. While dropdown menus properly utilized `aria-expanded` and toggled it via JavaScript, the main mobile menu toggle button (`.menu-toggle`) lacked this crucial accessibility attribute entirely, making its state invisible to screen readers.
**Action:** Always verify that *all* toggle buttons in a navigation system, not just sub-menus or dropdowns, have `aria-expanded` properly initialized and dynamically updated when their state changes.
