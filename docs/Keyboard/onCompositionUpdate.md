# onCompositionUpdate

```ts
const onCompositionUpdate: Emitter<CompositionEvent>;
```

An emitter that triggers when text composition is updated.

## Example

```ts
import { onCompositionUpdate } from "@monstermann/signals-web";

const unsubscribe = onCompositionUpdate((event) => console.log(event));
unsubscribe();
```
