# onPageVisibilityChange

```ts
const onPageVisibilityChange: Emitter<Event>;
```

An emitter that triggers when the page visibility state changes.

## Example

```ts
import { onPageVisibilityChange } from "@monstermann/signals-web";

const unsubscribe = onPageVisibilityChange((event) => console.log(event));
unsubscribe();
```
