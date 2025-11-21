# onCompositionStart

```ts
const onCompositionStart: Emitter<CompositionEvent>;
```

An emitter that triggers when text composition starts.

## Example

```ts
import { onCompositionStart } from "@monstermann/signals-web";

const unsubscribe = onCompositionStart((event) => console.log(event));
unsubscribe();
```
