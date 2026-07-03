## 2024-07-03 - Prevent UI Thread Blocking by Caching DOM Queries

**Learning:** In vanilla JavaScript applications, placing expensive operations like `document.querySelectorAll()` inside frequently triggered global event listeners (like `document.addEventListener('click', ...)` or within iterate loops) blocks the UI thread, causing poor responsiveness. Even on relatively simple pages, repeated DOM traversal on every click is an anti-pattern.

**Action:** Always cache static DOM selections (e.g., `const detailsElements = document.querySelectorAll('details')`) outside of event listener closures. Furthermore, use element state checks (like `classList.contains('open')` or property checks) as early returns to avoid executing DOM updates if the element is already in the target state.
