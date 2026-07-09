## 2024-07-09 - Caching DOM Queries & Event Listener Optimizations
**Learning:** In vanilla JS applications, frequent global event listeners (like document 'click') can block the UI thread if they perform expensive operations like DOM queries on every event. Also, repeatedly querying the DOM in event callbacks (like querySelectorAll inside a loop or event listener) is inefficient.
**Action:** Cache static DOM collections outside of event listeners. Within frequent event listeners, use cheap state checks (e.g., classList.contains) before executing more expensive DOM queries or operations.
