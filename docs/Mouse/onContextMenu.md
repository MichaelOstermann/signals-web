# onContextMenu

```ts
const onContextMenu: Emitter<MouseEvent>;
```

An emitter that triggers on context menu events.

## Example

```ts
import { onContextMenu } from "@monstermann/signals-web";

const unsubscribe = onContextMenu((event) => console.log(event));
unsubscribe();
```
