import { emitter } from "@monstermann/signals"

export const onBeforeInput = emitter<InputEvent>({
    silent: true,
    onWatch() {
        document.addEventListener("beforeinput", onBeforeInput as any)
        return () => document.removeEventListener("beforeinput", onBeforeInput as any)
    },
})

export const onCompositionEnd = emitter<CompositionEvent>({
    silent: true,
    onWatch() {
        document.addEventListener("compositionend", onCompositionEnd)
        return () => document.removeEventListener("compositionend", onCompositionEnd)
    },
})

export const onCompositionStart = emitter<CompositionEvent>({
    silent: true,
    onWatch() {
        document.addEventListener("compositionstart", onCompositionStart)
        return () => document.removeEventListener("compositionstart", onCompositionStart)
    },
})

export const onCompositionUpdate = emitter<CompositionEvent>({
    silent: true,
    onWatch() {
        document.addEventListener("compositionupdate", onCompositionUpdate)
        return () => document.removeEventListener("compositionupdate", onCompositionUpdate)
    },
})

export const onInput = emitter<InputEvent>({
    silent: true,
    onWatch() {
        document.addEventListener("input", onInput as any)
        return () => document.removeEventListener("input", onInput as any)
    },
})

export const onKeyDown = emitter<KeyboardEvent>({
    silent: true,
    onWatch() {
        document.addEventListener("keydown", onKeyDown)
        return () => document.removeEventListener("keydown", onKeyDown)
    },
})

export const onKeyUp = emitter<KeyboardEvent>({
    silent: true,
    onWatch() {
        document.addEventListener("keyup", onKeyUp)
        return () => document.removeEventListener("keyup", onKeyUp)
    },
})
