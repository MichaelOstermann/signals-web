# onMediaSessionNextTrack

```ts
const onMediaSessionNextTrack: Emitter<MediaSessionActionDetails>;
```

An emitter that triggers when the next track media session action is invoked.

## Example

```ts
import { onMediaSessionNextTrack } from "@monstermann/signals-web";

const unsubscribe = onMediaSessionNextTrack((details) => console.log(details));
unsubscribe();
```
