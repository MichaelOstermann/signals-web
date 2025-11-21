import { emitter, memo, signal } from "@monstermann/signals"

export const onPointerDown = emitter<PointerEvent>({
    silent: true,
    onWatch() {
        document.addEventListener("pointerdown", onPointerDown)
        return () => document.removeEventListener("pointerdown", onPointerDown)
    },
})

export const onPointerMove = emitter<PointerEvent>({
    silent: true,
    onWatch() {
        document.addEventListener("pointermove", onPointerMove)
        return () => document.removeEventListener("pointermove", onPointerMove)
    },
})

export const onPointerUp = emitter<PointerEvent>({
    silent: true,
    onWatch() {
        document.addEventListener("pointerup", onPointerUp)
        return () => document.removeEventListener("pointerup", onPointerUp)
    },
})

export const $pointer = signal({ x: 0, y: 0 }, {
    silent: true,
    equals: (a, b) => a.x === b.x && a.y === b.y,
})

export const $pointerX = memo(() => $pointer().x)

export const $pointerY = memo(() => $pointer().y)

onPointerMove(evt => $pointer({
    x: evt.clientX,
    y: evt.clientY,
}))
