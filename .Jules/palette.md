## 2024-05-24 - Dropdown keyboard accessibility
**Learning:** Dropdowns that open on click and focus-within need explicit handling for the Escape key to allow keyboard users to dismiss them without losing focus context.
**Action:** Always add keyboard event listeners (Escape key) to custom dropdown implementations to ensure they can be closed by keyboard users.