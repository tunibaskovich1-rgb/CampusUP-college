## 2024-05-24 - Unconditional DOM Queries in Global Listeners
**Learning:** The codebase previously contained unconditional DOM queries inside global click event listeners and 'toggle' event listeners. Querying the DOM dynamically (e.g. `document.querySelectorAll('details')`) inside frequently fired event callbacks degrades performance.
**Action:** Always verify if a target element is active (e.g., has class 'open') before performing inner DOM queries or attribute updates in global listeners, and query/cache static node lists globally rather than inside callbacks.
