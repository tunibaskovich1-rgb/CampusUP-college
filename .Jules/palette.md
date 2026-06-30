## 2024-05-19 - Universal Focus Visible

**Learning:** When applying a universal focus indicator (`*:focus-visible`) across varied components, avoid setting `border-radius: inherit`. It can incorrectly force squared outlines on elements that are natively or implicitly rounded (like buttons with pre-existing `border-radius`), breaking the intended visual shape.

**Action:** Consistently use `outline` with `outline-offset` for global focus states, allowing the browser to naturally match the element's existing border-radius where supported, without explicitly inheriting and potentially overriding it.
