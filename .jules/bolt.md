## 2025-05-20 - Global event listener optimizations

**Learning:** Global event listeners (like `document.addEventListener('click')`) fire incredibly often. In vanilla JS without virtual DOM diffing, doing things like `querySelector` or modifying `classList` inside these frequent listeners can be a hidden performance bottleneck, even if the element is already in the target state.

**Action:** Always check the current state (e.g., `element.classList.contains('open')`) before doing expensive operations or re-querying the DOM inside global event listeners. Also, cache query results (like `querySelectorAll`) outside of event listeners when the list of elements is static.