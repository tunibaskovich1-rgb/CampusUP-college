## 2024-06-01 - Avoid Inherited Border Radius in Focus Visible Styles

**Learning:** When adding global `:focus-visible` styles to improve keyboard accessibility, avoid using `border-radius: inherit;` as it can unintentionally override and break the specific border radii set on complex components like rounded buttons or cards, especially when the pseudo-class is applied broadly.

**Action:** Ensure custom focus indicators use specific outline properties (`outline`, `outline-offset`) matching the brand's primary color (#2563eb in this case) without forcefully inheriting border radii, allowing the browser to draw the outline around the element's computed shape or strictly adhering to standard square/rectangular bounding boxes for better predictability and visual stability across varied UI elements.
