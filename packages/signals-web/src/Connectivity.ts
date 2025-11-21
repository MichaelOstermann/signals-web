import { emitter, memo, signal, SILENT } from "@monstermann/signals"

export const onOffline = emitter<Event>({
    onWatch() {
        window.addEventListener("offline", onOffline)
        return () => window.removeEventListener("offline", onOffline)
    },
})

export const onOnline = emitter<Event>({
    onWatch() {
        window.addEventListener("online", onOnline)
        return () => window.removeEventListener("online", onOnline)
    },
})

export const $isOnline = signal(get(), {
    onRead: refresh,
    onWatch() {
        const a = onOnline(refresh)
        const b = onOffline(refresh)
        return () => {
            a()
            b()
        }
    },
})

export const $isOffline = memo(() => !$isOnline(), SILENT)

function get() {
    return navigator.onLine
}

function refresh() {
    $isOnline(get())
}
