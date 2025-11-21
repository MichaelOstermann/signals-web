import type { Effect } from "@monstermann/signals"
import type { Cursor } from "./ElementCursor"
import { createElementCursor } from "./ElementCursor"

export function createBodyCursor(getCursor: () => Cursor | null | undefined | void): Effect {
    return createElementCursor(() => document.body, getCursor)
}
