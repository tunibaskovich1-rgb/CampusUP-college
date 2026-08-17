
## 2024-05-18 - Caching document.querySelectorAll
**Learning:** In vanilla JS setups, adding event listeners that repeatedly perform full DOM lookups like `document.querySelectorAll` inside their callback is a common pattern that causes unneeded reflows or redundant work. Here, the `details` elements were fully static but being re-queried every time they were toggled.
**Action:** Always scan `forEach` loops over elements that attach event listeners to see if the callbacks are re-querying the exact same DOM node list instead of caching it from the parent loop or scope.
