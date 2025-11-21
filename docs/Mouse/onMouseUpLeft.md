# onMouseUpLeft

```ts
const onMouseUpLeft: Emitter<MouseEvent>;
```

An emitter that triggers on left mouse button up events.

## Example

```ts
import { onMouseUpLeft } from "@monstermann/signals-web";

const unsubscribe = onMouseUpLeft((event) => console.log(event));
unsubscribe();
```
