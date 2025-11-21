# onInput

```ts
const onInput: Emitter<InputEvent>;
```

An emitter that triggers when the value of an input element changes.

## Example

```ts
import { onInput } from "@monstermann/signals-web";

const unsubscribe = onInput((event) => console.log(event));
unsubscribe();
```
