import { emitter, memo, signal } from "@monstermann/signals"

export type ContrastPreference =
    | "none"
    | "more"
    | "less"

const moreQuery = window.matchMedia("(prefers-contrast: more)")
const lessQuery = window.matchMedia("(prefers-contrast: less)")

export const onContrastPreferenceChange = emitter<MediaQueryListEvent>({
    onWatch() {
        moreQuery.addEventListener("change", onContrastPreferenceChange)
        lessQuery.addEventListener("change", onContrastPreferenceChange)
        return () => {
            moreQuery.removeEventListener("change", onContrastPreferenceChange)
            lessQuery.removeEventListener("change", onContrastPreferenceChange)
        }
    },
})

export const $contrastPreference = signal<ContrastPreference>(get(), {
    onRead: refresh,
    onWatch: () => onContrastPreferenceChange(refresh),
})

export const $hasContrastPreference = memo(() => $contrastPreference() !== "none")
export const $hasLessContrastPreference = memo(() => $contrastPreference() === "less")
export const $hasMoreContrastPreference = memo(() => $contrastPreference() === "more")

function get(): ContrastPreference {
    if (moreQuery.matches) return "more"
    if (lessQuery.matches) return "less"
    return "none"
}

function refresh() {
    $contrastPreference(get())
}
