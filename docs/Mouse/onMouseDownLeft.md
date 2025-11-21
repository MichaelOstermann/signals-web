# onMouseDownLeft

```ts
const onMouseDownLeft: Emitter<MouseEvent>;
```

An emitter that triggers on left mouse button down events.

## Example

```ts
import { onMouseDownLeft } from "@monstermann/signals-web";

const unsubscribe = onMouseDownLeft((event) => console.log(event));
unsubscribe();
```
