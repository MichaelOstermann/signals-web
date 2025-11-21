import type { Effect } from "@monstermann/signals"
import { effect, onCleanup } from "@monstermann/signals"

export type Cursor =
    | "-moz-grab"
    | "-webkit-grab"
    | "alias"
    | "all-scroll"
    | "auto"
    | "cell"
    | "col-resize"
    | "context-menu"
    | "copy"
    | "crosshair"
    | "default"
    | "e-resize"
    | "ew-resize"
    | "grab"
    | "grabbing"
    | "help"
    | "move"
    | "n-resize"
    | "ne-resize"
    | "nesw-resize"
    | "no-drop"
    | "none"
    | "not-allowed"
    | "ns-resize"
    | "nw-resize"
    | "nwse-resize"
    | "pointer"
    | "progress"
    | "row-resize"
    | "s-resize"
    | "se-resize"
    | "sw-resize"
    | "text"
    | "vertical-text"
    | "w-resize"
    | "wait"
    | "zoom-in"
    | "zoom-out"
    | (string & {})

export function createElementCursor(
    getElement: () => HTMLElement | null | undefined | void,
    getCursor: () => Cursor | null | undefined | void,
): Effect {
    return effect(() => {
        const element = getElement()
        const cursor = getCursor()
        if (!element || !cursor) return
        const prevCursor = element.style.cursor
        element.style.setProperty("cursor", cursor, "important")
        onCleanup(() => element.style.cursor = prevCursor)
    })
}
