# onContrastPreferenceChange

```ts
const onContrastPreferenceChange: Emitter<MediaQueryListEvent>;
```

An emitter that triggers when the user's contrast preference changes.

## Example

```ts
import { onContrastPreferenceChange } from "@monstermann/signals-web";

const unsubscribe = onContrastPreferenceChange((event) => console.log(event));
unsubscribe();
```
