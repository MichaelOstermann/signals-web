import { emitter, memo, signal, SILENT } from "@monstermann/signals"

export const onWindowResize = emitter<UIEvent>({
    silent: true,
    onWatch() {
        document.addEventListener("resize", onWindowResize, { passive: true })
        return () => document.removeEventListener("resize", onWindowResize)
    },
})

export const $windowSize = signal(get(), {
    onRead: refresh,
    silent: true,
    equals: (a, b) => a.width === b.width && a.height === b.height,
    onWatch: () => onWindowResize(refresh),
})

export const $windowHeight = memo(() => $windowSize().height, SILENT)

export const $windowWidth = memo(() => $windowSize().width, SILENT)

function get() {
    return { height: window.innerHeight, width: window.innerWidth }
}

function refresh() {
    $windowSize(get())
}
