# onKeyDown

```ts
const onKeyDown: Emitter<KeyboardEvent>;
```

An emitter that triggers when a key is pressed down.

## Example

```ts
import { onKeyDown } from "@monstermann/signals-web";

const unsubscribe = onKeyDown((event) => console.log(event));
unsubscribe();
```
