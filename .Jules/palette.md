## 2026-05-27 - Standardize Focus States
**Learning:** Custom components often lack clear keyboard focus states by default. Relying on default browser outlines can result in inconsistent or low-contrast indicators, making keyboard navigation difficult.
**Action:** Always define custom `:focus-visible` styles using the primary brand color (#2563eb) and an outline offset for all interactive elements (`a`, `button`, `summary`, etc.) to ensure clear, high-contrast focus states across the app.
