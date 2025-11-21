# onDblClick

```ts
const onDblClick: Emitter<MouseEvent>;
```

An emitter that triggers on double click events.

## Example

```ts
import { onDblClick } from "@monstermann/signals-web";

const unsubscribe = onDblClick((event) => console.log(event));
unsubscribe();
```
