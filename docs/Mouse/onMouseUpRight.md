# onMouseUpRight

```ts
const onMouseUpRight: Emitter<MouseEvent>;
```

An emitter that triggers on right mouse button up events.

## Example

```ts
import { onMouseUpRight } from "@monstermann/signals-web";

const unsubscribe = onMouseUpRight((event) => console.log(event));
unsubscribe();
```
