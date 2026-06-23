## 2024-05-18 - Universal Keyboard Focus States
**Learning:** Found that applying specific focus states on diverse individual components can become hard to maintain and prone to regressions, leaving many native elements without adequate accessibility focus indicators.
**Action:** Apply a universal `*:focus-visible` selector as a fallback UX pattern to guarantee all interactive and focusable elements have a clear, high-contrast visual indicator, improving baseline keyboard accessibility.
