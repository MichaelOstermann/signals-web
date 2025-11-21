# onBeforeInput

```ts
const onBeforeInput: Emitter<InputEvent>;
```

An emitter that triggers before input is inserted into an element.

## Example

```ts
import { onBeforeInput } from "@monstermann/signals-web";

const unsubscribe = onBeforeInput((event) => console.log(event));
unsubscribe();
```
