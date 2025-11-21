import type { Effect } from "@monstermann/signals"
import { effect, onCleanup } from "@monstermann/signals"

export function createElementClass(
    getElement: () => HTMLElement | null | undefined | void,
    getClass: () => string | string[] | null | undefined | void,
): Effect {
    return effect(() => {
        const element = getElement()
        const classList = getClass()
        if (!element || !classList) return
        const classNames = (Array.isArray(classList) ? classList : classList.split(/\s+/)).filter(Boolean)
        element.classList.add(...classNames)
        onCleanup(() => element.classList.remove(...classNames))
    })
}
