# onRightClick

```ts
const onRightClick: Emitter<MouseEvent>;
```

An emitter that triggers on right mouse button click events.

## Example

```ts
import { onRightClick } from "@monstermann/signals-web";

const unsubscribe = onRightClick((event) => console.log(event));
unsubscribe();
```
