# onOnline

```ts
const onOnline: Emitter<Event>;
```

An emitter that triggers when the browser goes online.

## Example

```ts
import { onOnline } from "@monstermann/signals-web";

const unsubscribe = onOnline((event) => console.log(event));
unsubscribe();
```
