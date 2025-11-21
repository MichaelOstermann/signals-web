# onWheel

```ts
const onWheel: Emitter<WheelEvent>;
```

An emitter that triggers on mouse wheel events.

## Example

```ts
import { onWheel } from "@monstermann/signals-web";

const unsubscribe = onWheel((event) => console.log(event));
unsubscribe();
```
