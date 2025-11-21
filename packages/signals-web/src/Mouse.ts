import { emitter, memo, signal } from "@monstermann/signals"

export const onClick = emitter<MouseEvent>({
    silent: true,
    onWatch() {
        document.addEventListener("click", onClick)
        return () => document.removeEventListener("click", onClick)
    },
})

export const onContextMenu = emitter<MouseEvent>({
    silent: true,
    onWatch() {
        document.addEventListener("contextmenu", onContextMenu)
        return () => document.removeEventListener("contextmenu", onContextMenu)
    },
})

export const onDblClick = emitter<MouseEvent>({
    silent: true,
    onWatch() {
        document.addEventListener("dblclick", onDblClick)
        return () => document.removeEventListener("dblclick", onDblClick)
    },
})

export const onLeftClick = emitter<MouseEvent>({
    silent: true,
    onWatch() {
        const onEvent = (evt: MouseEvent) => evt.button === 0 && onLeftClick(evt)
        document.addEventListener("click", onEvent)
        return () => document.removeEventListener("click", onEvent)
    },
})

export const onMouseDown = emitter<MouseEvent>({
    silent: true,
    onWatch() {
        document.addEventListener("mousedown", onMouseDown)
        return () => document.removeEventListener("mousedown", onMouseDown)
    },
})

export const onMouseDownLeft = emitter<MouseEvent>({
    silent: true,
    onWatch() {
        const onEvent = (evt: MouseEvent) => evt.button === 0 && onMouseDownLeft(evt)
        document.addEventListener("mousedown", onEvent)
        return () => document.removeEventListener("mousedown", onEvent)
    },
})

export const onMouseDownRight = emitter<MouseEvent>({
    silent: true,
    onWatch() {
        const onEvent = (evt: MouseEvent) => evt.button === 2 && onMouseDownRight(evt)
        document.addEventListener("mousedown", onEvent)
        return () => document.removeEventListener("mousedown", onEvent)
    },
})

export const onMouseMove = emitter<MouseEvent>({
    silent: true,
    onWatch() {
        document.addEventListener("mousemove", onMouseMove, { passive: true })
        return () => document.removeEventListener("mousemove", onMouseMove)
    },
})

export const onMouseUp = emitter<MouseEvent>({
    silent: true,
    onWatch() {
        document.addEventListener("mouseup", onMouseUp)
        return () => document.removeEventListener("mouseup", onMouseUp)
    },
})

export const onMouseUpLeft = emitter<MouseEvent>({
    silent: true,
    onWatch() {
        const onEvent = (evt: MouseEvent) => evt.button === 0 && onMouseUpLeft(evt)
        document.addEventListener("mouseup", onEvent)
        return () => document.removeEventListener("mouseup", onEvent)
    },
})

export const onMouseUpRight = emitter<MouseEvent>({
    silent: true,
    onWatch() {
        const onEvent = (evt: MouseEvent) => evt.button === 2 && onMouseUpRight(evt)
        document.addEventListener("mouseup", onEvent)
        return () => document.removeEventListener("mouseup", onEvent)
    },
})

export const onRightClick = emitter<MouseEvent>({
    silent: true,
    onWatch() {
        const onEvent = (evt: MouseEvent) => evt.button === 2 && onRightClick(evt)
        document.addEventListener("click", onEvent)
        return () => document.removeEventListener("click", onEvent)
    },
})

export const onWheel = emitter<WheelEvent>({
    silent: true,
    onWatch() {
        document.addEventListener("wheel", onWheel, { passive: true })
        return () => document.removeEventListener("wheel", onWheel)
    },
})

export const $mouse = signal({ x: 0, y: 0 }, {
    silent: true,
    equals: (a, b) => a.x === b.x && a.y === b.y,
})

export const $mouseX = memo(() => $mouse().x)

export const $mouseY = memo(() => $mouse().y)

onMouseMove(evt => $mouse({
    x: evt.clientX,
    y: evt.clientY,
}))
