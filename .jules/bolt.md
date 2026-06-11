## 2025-01-22 - Unconditional DOM Queries in Global Event Listeners
**Learning:** Global click and toggle event listeners in this vanilla JS architecture trigger unconditionally, causing excessive layout thrashing and unnecessary DOM queries even when elements are already inactive.
**Action:** Always check if target elements are currently active/open before performing DOM queries or attribute updates, and query/cache static node lists globally instead of inside event callbacks.
