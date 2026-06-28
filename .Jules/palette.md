## 2024-10-18 - Universal Focus Indicators for Diverse Components
**Learning:** This app uses many diverse native and custom interactive elements (e.g. `a.brand`, `button.dropdown-toggle`, `button.menu-toggle`, `<summary>`, `<input>`). It's error-prone to manually apply focus styles to each class.
**Action:** Use a universal `*:focus-visible` selector to ensure robust, consistent high-contrast focus rings for keyboard navigation, avoiding `border-radius: inherit` which can break pre-existing rounded styles.
