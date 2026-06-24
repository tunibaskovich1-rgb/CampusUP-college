## 2024-06-24 - Avoiding unconditional DOM queries in global event listeners

**Learning:** Unconditional DOM queries (like `document.querySelectorAll`) inside frequently triggered global event listeners (like `document.addEventListener('click', ...)` or toggle events) can cause unnecessary performance overhead on every interaction, even when the target element isn't active or when the query could be cached.

**Action:** Always check if target elements are currently active/open before performing DOM queries or attribute updates inside global listeners. Cache static node lists globally instead of querying them repeatedly inside event callbacks.
