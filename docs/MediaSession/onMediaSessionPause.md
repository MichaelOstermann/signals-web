# onMediaSessionPause

```ts
const onMediaSessionPause: Emitter<MediaSessionActionDetails>;
```

An emitter that triggers when the pause media session action is invoked.

## Example

```ts
import { onMediaSessionPause } from "@monstermann/signals-web";

const unsubscribe = onMediaSessionPause((details) => console.log(details));
unsubscribe();
```
