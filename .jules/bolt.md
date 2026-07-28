## 2024-07-27 - Caching DOM queries in event listeners
**Learning:** Executing global `document.querySelectorAll()` inside frequently triggered event listeners (like document clicks or element toggles) is a performance anti-pattern that can cause main thread blocking in vanilla JavaScript apps.
**Action:** Always extract and cache DOM queries outside of event listener callbacks if the element structure is static, and add conditional state checks (e.g., `classList.contains()`) before performing DOM mutations to avoid unnecessary repaints.
