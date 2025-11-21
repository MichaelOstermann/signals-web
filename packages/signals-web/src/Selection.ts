import { emitter } from "@monstermann/signals"

export const onSelectionChange = emitter<Event>({
    silent: true,
    onWatch() {
        document.addEventListener("selectionchange", onSelectionChange)
        return () => document.removeEventListener("selectionchange", onSelectionChange)
    },
})
