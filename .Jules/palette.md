## 2025-02-14 - Use outline-offset for Focus Rings
**Learning:** Overriding `border-radius: inherit;` in global `:focus-visible` styles can incorrectly override specific border-radius of existing elements like rounded buttons. Using `outline-offset` provides clear, high-contrast focus rings without breaking the underlying element geometry.
**Action:** Always prefer using `outline-offset` combined with `outline` for custom `:focus-visible` indicators across interactive elements to maintain visual integrity while improving accessibility.
