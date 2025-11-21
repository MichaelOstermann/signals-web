# onActiveElementBlur

```ts
const onActiveElementBlur: Emitter<FocusEvent>;
```

An emitter that triggers when an element loses focus.

## Example

```ts
import { onActiveElementBlur } from "@monstermann/signals-web";

const unsubscribe = onActiveElementBlur((event) => console.log(event));
unsubscribe();
```
