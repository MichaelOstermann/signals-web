# onClick

```ts
const onClick: Emitter<MouseEvent>;
```

An emitter that triggers on mouse click events.

## Example

```ts
import { onClick } from "@monstermann/signals-web";

const unsubscribe = onClick((event) => console.log(event));
unsubscribe();
```
