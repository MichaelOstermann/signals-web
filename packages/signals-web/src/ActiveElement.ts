import { emitter, signal } from "@monstermann/signals"

export const onActiveElementFocus = emitter<FocusEvent>({
    silent: true,
    onWatch() {
        window.addEventListener("focus", onActiveElementFocus)
        return () => window.removeEventListener("focus", onActiveElementFocus)
    },
})

export const onActiveElementBlur = emitter<FocusEvent>({
    silent: true,
    onWatch() {
        window.addEventListener("blur", onActiveElementBlur)
        return () => window.removeEventListener("blur", onActiveElementBlur)
    },
})

export const $activeElement = signal(get(), {
    onRead: refresh,
    silent: true,
    onWatch() {
        const a = onActiveElementFocus(refresh)
        const b = onActiveElementBlur(refresh)
        return () => {
            a()
            b()
        }
    },
})

function get(): Element | null {
    return document.activeElement === document.body ? null : document.activeElement
}

function refresh() {
    $activeElement(get())
}
