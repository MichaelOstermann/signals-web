# onMediaSessionStop

```ts
const onMediaSessionStop: Emitter<MediaSessionActionDetails>;
```

An emitter that triggers when the stop media session action is invoked.

## Example

```ts
import { onMediaSessionStop } from "@monstermann/signals-web";

const unsubscribe = onMediaSessionStop((details) => console.log(details));
unsubscribe();
```
