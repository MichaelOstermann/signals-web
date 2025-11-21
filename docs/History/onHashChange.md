# onHashChange

```ts
const onHashChange: Emitter<HashChangeEvent>;
```

An emitter that triggers when the URL hash changes.

## Example

```ts
import { onHashChange } from "@monstermann/signals-web";

const unsubscribe = onHashChange((event) => console.log(event));
unsubscribe();
```
