# onReducedMotionPreferenceChange

```ts
const onReducedMotionPreferenceChange: Emitter<MediaQueryListEvent>;
```

An emitter that triggers when the user's reduced motion preference changes.

## Example

```ts
import { onReducedMotionPreferenceChange } from "@monstermann/signals-web";

const unsubscribe = onReducedMotionPreferenceChange((event) =>
    console.log(event),
);
unsubscribe();
```
