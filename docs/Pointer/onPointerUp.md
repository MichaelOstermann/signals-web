# onPointerUp

```ts
const onPointerUp: Emitter<PointerEvent>;
```

An emitter that triggers on pointer up events.

## Example

```ts
import { onPointerUp } from "@monstermann/signals-web";

const unsubscribe = onPointerUp((event) => console.log(event));
unsubscribe();
```
