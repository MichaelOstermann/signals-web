# onMouseDownRight

```ts
const onMouseDownRight: Emitter<MouseEvent>;
```

An emitter that triggers on right mouse button down events.

## Example

```ts
import { onMouseDownRight } from "@monstermann/signals-web";

const unsubscribe = onMouseDownRight((event) => console.log(event));
unsubscribe();
```
