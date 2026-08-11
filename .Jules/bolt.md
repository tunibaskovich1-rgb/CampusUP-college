## 2026-08-11 - Cached DOM query for details toggle
**Learning:** Querying the DOM via `document.querySelectorAll('details')` within a toggle event listener on the same elements creates an unnecessary repeated cost for a collection that is statically defined at runtime in this context.
**Action:** Always cache the NodeList of elements outside the event listener to avoid repetitive, unneeded DOM traversal and recalculation on interaction.
