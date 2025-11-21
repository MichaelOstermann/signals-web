# createElementCursor

```ts
function createElementCursor(
    getElement: () => HTMLElement | null | undefined | void,
    getCursor: () => Cursor | null | undefined | void,
): Effect;
```

Creates an effect that sets the cursor style on an HTML element based on reactive getter functions. The cursor is set with `!important` priority and automatically restored when the effect is cleaned up.

## Example

```ts
import { createElementCursor } from "@monstermann/signals-web";
import { signal } from "@monstermann/signals";

const $element = signal<HTMLElement | null>(null);
const $isDragging = signal(false);

// Changes cursor based on signal changes:
const dispose = createElementCursor(
    () => $element(),
    () => ($isDragging() ? "grabbing" : null),
);

dispose();
```
