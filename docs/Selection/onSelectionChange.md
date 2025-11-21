# onSelectionChange

```ts
const onSelectionChange: Emitter<Event>;
```

An emitter that triggers on document selection change.

## Example

```ts
import { onSelectionChange } from "@monstermann/signals-web";

const unsubscribe = onSelectionChange((event) => console.log(event));
unsubscribe();
```
