import { emitter, signal } from "@monstermann/signals"

const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")

export const onReducedMotionPreferenceChange = emitter<MediaQueryListEvent>({
    onWatch() {
        mediaQuery.addEventListener("change", onReducedMotionPreferenceChange)
        return () => mediaQuery.removeEventListener("change", onReducedMotionPreferenceChange)
    },
})

export const $hasReducedMotionPreference = signal(mediaQuery.matches, {
    onRead: refresh,
    onWatch: () => onReducedMotionPreferenceChange(refresh),
})

function get() {
    return mediaQuery.matches
}

function refresh() {
    $hasReducedMotionPreference(get())
}
