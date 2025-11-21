# onMediaSessionSeekBackward

```ts
const onMediaSessionSeekBackward: Emitter<MediaSessionActionDetails>;
```

An emitter that triggers when the seek backward media session action is invoked.

## Example

```ts
import { onMediaSessionSeekBackward } from "@monstermann/signals-web";

const unsubscribe = onMediaSessionSeekBackward((details) =>
    console.log(details),
);
unsubscribe();
```
