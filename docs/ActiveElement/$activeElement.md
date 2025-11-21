# $activeElement

```ts
const $activeElement: Signal<Element | null>;
```

A signal containing the currently focused element, or null if no element has focus or the body has focus.

## Example

```ts
import { $activeElement } from "@monstermann/signals-web";

$activeElement(); // <input id="username" />
```
