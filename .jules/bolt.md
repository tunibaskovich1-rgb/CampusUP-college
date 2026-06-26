## 2024-06-26 - Cache DOM Queries and State Checks
**Learning:** Unconditional DOM queries inside global event listeners (like click or toggle) are an anti-pattern in this codebase and cause O(N) queries on every event.
**Action:** Always check if target elements are currently active/open before performing DOM updates, and query/cache static node lists globally instead of inside event callbacks.
