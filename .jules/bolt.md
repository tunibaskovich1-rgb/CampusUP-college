## 2024-05-24 - Optimizing DOM Queries in Event Listeners
**Learning:** Found unnecessary global DOM querying inside event listeners (e.g. `document.querySelectorAll('details')` on every detail toggle, and querying `.dropdown-toggle` even for inactive dropdowns on every document click).
**Action:** Cache static NodeLists globally (like all `<details>` elements if they are static) and only perform inner DOM queries or update attributes if the target element's state actually requires it (e.g., checking if it has the `open` class first).
