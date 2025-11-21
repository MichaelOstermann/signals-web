# onMediaSessionPlay

```ts
const onMediaSessionPlay: Emitter<MediaSessionActionDetails>;
```

An emitter that triggers when the play media session action is invoked.

## Example

```ts
import { onMediaSessionPlay } from "@monstermann/signals-web";

const unsubscribe = onMediaSessionPlay((details) => console.log(details));
unsubscribe();
```
