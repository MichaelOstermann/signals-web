import { emitter } from "@monstermann/signals"

export const onHashChange = emitter<HashChangeEvent>({
    onWatch() {
        window.addEventListener("hashchange", onHashChange)
        return () => window.removeEventListener("hashchange", onHashChange)
    },
})

export const onPopState = emitter<PopStateEvent>({
    onWatch() {
        window.addEventListener("popstate", onPopState)
        return () => window.removeEventListener("popstate", onPopState)
    },
})
