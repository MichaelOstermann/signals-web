# createElementClass

```ts
function createElementClass(
    getElement: () => HTMLElement | null | undefined | void,
    getClass: () => string | string[] | null | undefined | void,
): Effect;
```

Creates an effect that adds and removes CSS classes from an HTML element based on reactive getter functions. Classes are automatically removed when the effect is cleaned up.

## Example

```ts
import { createElementClass } from "@monstermann/signals-web";
import { signal } from "@monstermann/signals";

const $element = signal<HTMLElement | null>(null);
const $isActive = signal(false);

// Adds/removes classes based on signal changes:
const dispose = createElementClass(
    () => $element(),
    () => ($isActive() ? "active" : "inactive"),
);

dispose();
```
