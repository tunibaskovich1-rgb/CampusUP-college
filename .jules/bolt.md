## 2026-06-07 - Avoid Unconditional DOM Queries in Global Listeners
**Learning:** Found multiple instances where global click or toggle event listeners executed unconditional `.querySelector` and redundant attribute updates without checking if the target element was actively participating in the interaction.
**Action:** When working on generic event delegation, globally cache static node lists (like `details` or `dropdowns`) and wrap potentially expensive operations in state checks (e.g. `element.classList.contains('open')`) before firing queries or attribute changes.
