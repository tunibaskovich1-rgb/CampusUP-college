## 2024-07-19 - Added universal focus-visible styles

**Learning:** Adding universal `*:focus-visible` styles with a 2px offset ensures consistent keyboard navigation visibility across all interactive elements without relying on component-specific overrides, and it maintains brand consistency by using the primary brand color (`#2563eb`).
**Action:** Use `*:focus-visible { outline: 2px solid <primary-color>; outline-offset: 2px; }` as a standard baseline for accessibility in all projects to guarantee keyboard support for elements lacking explicit focus states.
