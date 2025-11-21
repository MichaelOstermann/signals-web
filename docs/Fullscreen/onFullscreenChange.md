# onFullscreenChange

```ts
const onFullscreenChange: Emitter<Event>;
```

An emitter that triggers when the fullscreen state changes.

## Example

```ts
import { onFullscreenChange } from "@monstermann/signals-web";

const unsubscribe = onFullscreenChange((event) => console.log(event));
unsubscribe();
```
