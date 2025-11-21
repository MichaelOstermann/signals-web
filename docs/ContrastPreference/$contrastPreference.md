# $contrastPreference

```ts
type ContrastPreference = "none" | "more" | "less";
const $contrastPreference: Signal<ContrastPreference>;
```

A signal containing the user's contrast preference.

## Example

```ts
import { $contrastPreference } from "@monstermann/signals-web";

$contrastPreference(); // "none"
```
