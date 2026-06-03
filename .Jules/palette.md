## 2024-05-24 - Missing Global Focus Indicators
**Learning:** The application lacked clear focus indicators for interactive elements, which is a significant accessibility barrier for keyboard navigation. Relying solely on default browser outlines can sometimes be overridden or inconsistently styled. A distinct, high-contrast `:focus-visible` style is crucial.
**Action:** Implemented a global `:focus-visible` CSS rule in `styles.css` using the primary brand color (#2563eb) with an outline offset to ensure focus states are clearly visible without relying on mouse hover states.
