# onMediaSessionSeekTo

```ts
const onMediaSessionSeekTo: Emitter<MediaSessionActionDetails>;
```

An emitter that triggers when the seek to media session action is invoked.

## Example

```ts
import { onMediaSessionSeekTo } from "@monstermann/signals-web";

const unsubscribe = onMediaSessionSeekTo((details) => console.log(details));
unsubscribe();
```
