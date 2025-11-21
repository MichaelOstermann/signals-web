import { emitter, signal } from "@monstermann/signals"

export const onFullscreenChange = emitter<Event>({
    onWatch() {
        document.addEventListener("fullscreenchange", onFullscreenChange)
        return () => document.removeEventListener("fullscreenchange", onFullscreenChange)
    },
})

export const $isFullscreen = signal(get(), {
    onRead: refresh,
    onWatch: () => onFullscreenChange(refresh),
})

function get() {
    return document.fullscreenElement != null
}

function refresh() {
    $isFullscreen(get())
}
