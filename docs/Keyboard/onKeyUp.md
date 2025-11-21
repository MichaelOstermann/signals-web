# onKeyUp

```ts
const onKeyUp: Emitter<KeyboardEvent>;
```

An emitter that triggers when a key is released.

## Example

```ts
import { onKeyUp } from "@monstermann/signals-web";

const unsubscribe = onKeyUp((event) => console.log(event));
unsubscribe();
```
