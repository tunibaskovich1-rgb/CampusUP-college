## 2024-07-13 - Unoptimized DOM queries in global event listeners

**Learning:** Unnecessary and frequent DOM queries within global event handlers (like `document.addEventListener('click')`) can cause noticeable performance degradation in vanilla JS apps by repeatedly forcing layout calculations and execution time, even when the UI state hasn't changed. Caching static element lists (like `document.querySelectorAll('details')`) outside of listeners also avoids expensive operations inside user interaction callbacks.

**Action:** Always cache NodeLists that do not change dynamically, and use fast state checks (like `Element.classList.contains()`) before querying for child elements in global or frequently fired event handlers to abort early if no work is needed.