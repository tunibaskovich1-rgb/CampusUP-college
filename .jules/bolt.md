## 2024-07-08 - Caching DOM queries and state checks in vanilla JS

**Learning:** In vanilla JavaScript codebases (like CampusUP College), it is crucial to prioritize performance optimizations that cache frequent DOM queries (e.g., `querySelectorAll`) outside of global event listeners. Furthermore, using element state checks (e.g., `classList.contains`) before executing expensive DOM queries inside frequent events prevents unnecessary UI thread blocking.

**Action:** Before optimizing event listeners in vanilla JS, check if DOM queries can be lifted outside the listener scope, and always consider adding fast state checks (like class presence) to gate expensive operations.
