# onMouseUp

```ts
const onMouseUp: Emitter<MouseEvent>;
```

An emitter that triggers on mouse button up events.

## Example

```ts
import { onMouseUp } from "@monstermann/signals-web";

const unsubscribe = onMouseUp((event) => console.log(event));
unsubscribe();
```
