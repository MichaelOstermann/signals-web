# onColorSchemeChange

```ts
const onColorSchemeChange: Emitter<MediaQueryListEvent>;
```

An emitter that triggers when the user's color scheme preference changes.

## Example

```ts
import { onColorSchemeChange } from "@monstermann/signals-web";

const unsubscribe = onColorSchemeChange((event) => console.log(event));
unsubscribe();
```
