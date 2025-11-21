# $colorScheme

```ts
type ColorScheme = "light" | "dark";
const $colorScheme: Signal<ColorScheme>;
```

A signal containing the user's color scheme preference.

## Example

```ts
import { $colorScheme } from "@monstermann/signals-web";

colorScheme(); // "light"
```
