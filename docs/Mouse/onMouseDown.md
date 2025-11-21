# onMouseDown

```ts
const onMouseDown: Emitter<MouseEvent>;
```

An emitter that triggers on mouse button down events.

## Example

```ts
import { onMouseDown } from "@monstermann/signals-web";

const unsubscribe = onMouseDown((event) => console.log(event));
unsubscribe();
```
