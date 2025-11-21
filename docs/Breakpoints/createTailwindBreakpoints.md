# createTailwindBreakpoints

```ts
function createTailwindBreakpoints(): Breakpoints<
    "sm" | "md" | "lg" | "xl" | "2xl"
>;
```

Creates responsive breakpoint signals using Tailwind CSS default breakpoint values.

Breakpoint values:

- `sm`: 40rem (640px)
- `md`: 48rem (768px)
- `lg`: 64rem (1024px)
- `xl`: 80rem (1280px)
- `2xl`: 96rem (1536px)

## Example

```ts
import { createTailwindBreakpoints } from "@monstermann/signals-web";

const breakpoints = createTailwindBreakpoints();

breakpoints.md(); // true if width >= 768px
breakpoints.lg(); // true if width >= 1024px
breakpoints.gt("sm"); // true if width > 640px
```
