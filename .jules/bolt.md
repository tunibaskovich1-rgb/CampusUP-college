## 2024-06-05 - Avoid Unconditional DOM Queries

**Learning:** Unconditional DOM queries and attribute manipulations within global event listeners (like `click`) or loops can negatively affect performance. Querying static node lists repeatedly inside event callbacks causes unnecessary work for the browser.

**Action:** Always check if the target elements are currently active/open (e.g., checking class lists) before performing DOM queries or attribute updates. Additionally, query and cache static node lists globally instead of doing it on-the-fly inside event callbacks.
