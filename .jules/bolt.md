## 2024-03-24 - Avoid unconditional DOM queries in global event listeners
**Learning:** In a static application, unconditionally calling `querySelectorAll` or searching the DOM on every `click` or `toggle` event can create a performance bottleneck, especially as the DOM grows. Global event callbacks should fail fast.
**Action:** Always check if the target elements are currently active/open before performing DOM queries or attribute updates. Query and cache static node lists (like `<details>` or dropdowns) globally instead of inside event callbacks.
