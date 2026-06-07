## 2024-05-24 - Missing Focus Styles
**Learning:** This application lacks custom `:focus-visible` styles for interactive elements. Relying solely on default browser focus rings leads to inconsistent user experiences and poor accessibility, especially for keyboard navigation.
**Action:** Added a global `:focus-visible` CSS rule in `styles.css` using the primary brand color (`#2563eb`) to ensure clear and consistent focus indicators across the entire application for keyboard users.
