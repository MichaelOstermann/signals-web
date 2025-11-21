# onWindowResize

```ts
const onWindowResize: Emitter<UIEvent>;
```

An emitter that triggers on window resize.

## Example

```ts
import { onWindowResize } from "@monstermann/signals-web";

const unsubscribe = onWindowResize((event) => console.log(event));
unsubscribe();
```
