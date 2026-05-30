## 2026-05-30 - Optimize global event listeners
**Learning:** Unconditional DOM queries in global event handlers slow down the entire page, as they run on every click anywhere.
**Action:** Always check if an element is active/open before performing DOM queries or updating attributes in global event callbacks.