# onLeftClick

```ts
const onLeftClick: Emitter<MouseEvent>;
```

An emitter that triggers on left mouse button click events.

## Example

```ts
import { onLeftClick } from "@monstermann/signals-web";

const unsubscribe = onLeftClick((event) => console.log(event));
unsubscribe();
```
