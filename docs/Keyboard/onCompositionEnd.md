# onCompositionEnd

```ts
const onCompositionEnd: Emitter<CompositionEvent>;
```

An emitter that triggers when text composition ends.

## Example

```ts
import { onCompositionEnd } from "@monstermann/signals-web";

const unsubscribe = onCompositionEnd((event) => console.log(event));
unsubscribe();
```
