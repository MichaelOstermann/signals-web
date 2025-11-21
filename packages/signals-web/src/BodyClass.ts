import type { Effect } from "@monstermann/signals"
import { createElementClass } from "./ElementClass"

export function createBodyClass(getClass: () => string | string[] | null | undefined | void): Effect {
    return createElementClass(() => document.body, getClass)
}
