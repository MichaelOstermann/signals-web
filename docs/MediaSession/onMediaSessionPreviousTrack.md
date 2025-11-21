# onMediaSessionPreviousTrack

```ts
const onMediaSessionPreviousTrack: Emitter<MediaSessionActionDetails>;
```

An emitter that triggers when the previous track media session action is invoked.

## Example

```ts
import { onMediaSessionPreviousTrack } from "@monstermann/signals-web";

const unsubscribe = onMediaSessionPreviousTrack((details) =>
    console.log(details),
);
unsubscribe();
```
