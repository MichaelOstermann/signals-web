# createBodyCursor

```ts
function createBodyCursor(
    getCursor: () => Cursor | null | undefined | void,
): Effect;
```

Creates an effect that sets the cursor style on the document body based on a reactive getter function.

## Example

```ts
import { createBodyCursor } from "@monstermann/signals-web";
import { signal } from "@monstermann/signals";

const $isGrabbing = signal(false);

// Adds/removes `{ style: { cursor: "grabbing" } }` to/from `document.body`:
const dispose = createBodyCursor(() => ($isGrabbing() ? "grabbing" : null));
dispose();
```
