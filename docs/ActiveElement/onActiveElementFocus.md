# onActiveElementFocus

```ts
const onActiveElementFocus: Emitter<FocusEvent>;
```

An emitter that triggers when an element receives focus.

## Example

```ts
import { onActiveElementFocus } from "@monstermann/signals-web";

const unsubscribe = onActiveElementFocus((event) => console.log(event));
unsubscribe();
```
