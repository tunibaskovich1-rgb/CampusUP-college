## 2024-05-22 - Caching DOM queries in static scripts
**Learning:** Static sites with vanilla JS event listeners looping over DOM collections (like `document.querySelectorAll("details")`) may inadvertently re-query the DOM on every event trigger, creating an O(N) bottleneck.
**Action:** Always cache the result of static `document.querySelectorAll` calls outside the event listener when the set of elements isn't dynamically changing to improve runtime performance.
