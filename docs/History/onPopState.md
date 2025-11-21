# onPopState

```ts
const onPopState: Emitter<PopStateEvent>;
```

An emitter that triggers when the active history entry changes.

## Example

```ts
import { onPopState } from "@monstermann/signals-web";

const unsubscribe = onPopState((event) => console.log(event));
unsubscribe();
```
