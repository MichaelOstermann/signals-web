# createBreakpoints

```ts
function createBreakpoints<T extends string>(
    breakpoints: Record<T, string>,
): Breakpoints<T>;

type Breakpoints<T extends string> = {
    readonly [K in T]: ReadonlySignal<boolean>;
    gt: (key: T) => boolean;
    gte: (key: T) => boolean;
    lt: (key: T) => boolean;
    lte: (key: T) => boolean;
};
```

Creates responsive breakpoint signals for media queries. Each breakpoint key becomes a signal that is true when the viewport width is greater than or equal to the specified value.

## Example

```ts
import { createBreakpoints } from "@monstermann/signals-web";

const breakpoints = createBreakpoints({
    sm: "640px",
    md: "768px",
    lg: "1024px",
});

breakpoints.md(); // true if width >= 768px
breakpoints.gt("sm"); // true if width > 640px
breakpoints.gte("md"); // true if width >= 768px
breakpoints.lt("lg"); // true if width < 1024px
breakpoints.lte("md"); // true if width <= 768px
```
