import { emitter, memo, signal, SILENT } from "@monstermann/signals"

export const onPageVisibilityChange = emitter<Event>({
    silent: true,
    onWatch() {
        document.addEventListener("visibilitychange", onPageVisibilityChange)
        return () => document.removeEventListener("visibilitychange", onPageVisibilityChange)
    },
})

export const $isPageHidden = signal(get(), {
    onRead: refresh,
    silent: true,
    onWatch: () => onPageVisibilityChange(refresh),
})

export const $isPageVisible = memo(() => !$isPageHidden(), SILENT)

function get() {
    return document.visibilityState === "hidden"
}

function refresh() {
    $isPageHidden(get())
}
