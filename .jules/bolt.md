## 2026-06-10 - Unconditional DOM Operations in Global Listeners

**Learning:** This codebase had a pattern of performing unconditional DOM manipulations and queries inside global event listeners (like tracking `click` on the `document` for dropdowns, or triggering `toggle` events for all `<details>` elements). By not checking the active state (`if (!element.classList.contains('open'))`) or caching static queries (`querySelectorAll`), unnecessary CPU cycles were wasted resolving and applying redundant DOM changes on every interaction.

**Action:** Always check the active/open state before altering DOM attributes inside high-frequency global event listeners and cache NodeLists globally if the targeted elements are static.