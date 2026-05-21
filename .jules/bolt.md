## 2024-05-24 - Un-cached DOM queries in event listeners
**Learning:** Found a performance anti-pattern in `script.js` where `document.querySelectorAll('details')` was being called inside the 'toggle' event listener. This causes an O(N) DOM lookup every time a user interacts with an FAQ item, unnecessarily blocking the main thread.
**Action:** Always cache static DOM node lists (like `document.querySelectorAll`) outside of event listeners in this vanilla JS architecture to ensure O(1) memory access during user interactions.
