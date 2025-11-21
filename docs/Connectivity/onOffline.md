# onOffline

```ts
const onOffline: Emitter<Event>;
```

An emitter that triggers when the browser goes offline.

## Example

```ts
import { onOffline } from "@monstermann/signals-web";

const unsubscribe = onOffline((event) => console.log(event));
unsubscribe();
```
