# onPointerMove

```ts
const onPointerMove: Emitter<PointerEvent>;
```

An emitter that triggers on pointer move events.

## Example

```ts
import { onPointerMove } from "@monstermann/signals-web";

const unsubscribe = onPointerMove((event) => console.log(event));
unsubscribe();
```
