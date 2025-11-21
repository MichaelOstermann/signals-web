# onMouseMove

```ts
const onMouseMove: Emitter<MouseEvent>;
```

An emitter that triggers on mouse move events.

## Example

```ts
import { onMouseMove } from "@monstermann/signals-web";

const unsubscribe = onMouseMove((event) => console.log(event));
unsubscribe();
```
