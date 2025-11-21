# createBodyClass

```ts
function createBodyClass(
    getClass: () => string | string[] | null | undefined | void,
): Effect;
```

Creates an effect that adds and removes CSS classes from the document body based on a reactive getter function.

## Example

```ts
import { createBodyClass } from "@monstermann/signals-web";
import { signal } from "@monstermann/signals";

const $darkMode = signal(false);

// Adds/removes `dark` and `light` classes on `document.body`:
const dispose = createBodyClass(() => ($darkMode() ? "dark" : "light"));
dispose();
```
