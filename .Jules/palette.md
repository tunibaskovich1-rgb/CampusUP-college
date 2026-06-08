## 2025-01-20 - High-Contrast Keyboard Focus
**Learning:** Browsers' default focus outlines can be very inconsistent and often fail WCAG contrast requirements against certain background colors. Keyboard users need a strong, highly visible indicator to know where their focus is.
**Action:** Use `:focus-visible` with an offset outline (e.g., `outline: 2px solid [brand-color]; outline-offset: 2px;`) to ensure custom focus indicators are clear, contrast well against backgrounds, and only appear when navigating via keyboard (avoiding ugly outlines for mouse users on click).
