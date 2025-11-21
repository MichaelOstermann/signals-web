import { emitter, memo, signal } from "@monstermann/signals"

export type ColorScheme = "light" | "dark"

const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

export const onColorSchemeChange = emitter<MediaQueryListEvent>({
    onWatch() {
        mediaQuery.addEventListener("change", onColorSchemeChange)
        return () => mediaQuery.removeEventListener("change", onColorSchemeChange)
    },
})

export const $colorScheme = signal<ColorScheme>(get(), {
    onRead: refresh,
    onWatch: () => onColorSchemeChange(refresh),
})

export const $hasDarkColorScheme = memo(() => $colorScheme() === "dark")
export const $hasLightColorScheme = memo(() => $colorScheme() === "light")

function get() {
    return mediaQuery.matches ? "dark" : "light"
}

function refresh() {
    $colorScheme(get())
}
