# onMediaSessionSeekForward

```ts
const onMediaSessionSeekForward: Emitter<MediaSessionActionDetails>;
```

An emitter that triggers when the seek forward media session action is invoked.

## Example

```ts
import { onMediaSessionSeekForward } from "@monstermann/signals-web";

const unsubscribe = onMediaSessionSeekForward((details) =>
    console.log(details),
);
unsubscribe();
```
