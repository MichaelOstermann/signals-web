# $mouse

```ts
const $mouse: Signal<{ x: number; y: number }>;
```

A signal containing the current mouse position with x and y coordinates.

## Example

```ts
import { $mouse } from "@monstermann/signals-web";

$mouse(); // { x: 450, y: 320 }
```
