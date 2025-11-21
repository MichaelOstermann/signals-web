# onPointerDown

```ts
const onPointerDown: Emitter<PointerEvent>;
```

An emitter that triggers on pointer down events.

## Example

```ts
import { onPointerDown } from "@monstermann/signals-web";

const unsubscribe = onPointerDown((event) => console.log(event));
unsubscribe();
```
