## 2026-06-06 - Avoid border-radius: inherit in global focus styles
**Learning:** When defining global `:focus-visible` styles, using `border-radius: inherit;` can cause issues. It may incorrectly override the specific border-radius of existing elements (like rounded buttons) if the parent element's border-radius differs or is absent.
**Action:** Define focus outlines without forcing border-radius inheritance, allowing the browser's default outline behavior or carefully managing outline-offset instead.
