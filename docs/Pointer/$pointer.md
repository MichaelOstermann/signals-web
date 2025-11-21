# $pointer

```ts
const $pointer: Signal<{ x: number; y: number }>;
```

A signal containing the current pointer position with x and y coordinates.

## Example

```ts
import { $pointer } from "@monstermann/signals-web";

$pointer(); // { x: 450, y: 320 }
```
