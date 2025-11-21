# $windowSize

```ts
const $windowSize: Signal<{ width: number; height: number }>;
```

A signal containing the window size with width and height.

## Example

```ts
import { $windowSize } from "@monstermann/signals-web";

$windowSize(); // { width: 1920, height: 1080 }
```
