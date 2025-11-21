import type { ReadonlySignal } from "@monstermann/signals"
import { signal } from "@monstermann/signals"

type InternalKeys =
    | "gt"
    | "gte"
    | "lt"
    | "lte"

export type Breakpoints<T extends string> = {
    readonly [K in T as K extends InternalKeys ? never : K]: ReadonlySignal<boolean>
} & {
    gt: (key: T) => boolean
    gte: (key: T) => boolean
    lt: (key: T) => boolean
    lte: (key: T) => boolean
}

interface MediaQueries {
    gt: ReadonlySignal<boolean>
    gte: ReadonlySignal<boolean>
    lt: ReadonlySignal<boolean>
    lte: ReadonlySignal<boolean>
}

export function createBreakpoints<const T extends string>(
    breakpoints: Record<T, string>,
): Breakpoints<T> {
    const keys = Object.keys(breakpoints) as T[]

    const queries = keys.reduce((acc, key) => {
        acc[key] = createMediaQueries(breakpoints[key])
        return acc
    }, {} as Record<T, MediaQueries>)

    return {
        ...keys.reduce((acc, key) => {
            acc[key] = queries[key].gte
            return acc
        }, {} as Record<T, ReadonlySignal<boolean>>),
        gt: key => queries[key].gt(),
        gte: key => queries[key].gte(),
        lt: key => queries[key].lt(),
        lte: key => queries[key].lte(),
    }
}

export function createTailwindBreakpoints(): Breakpoints<"sm" | "md" | "lg" | "xl" | "2xl"> {
    return createBreakpoints({
        "2xl": "96rem",
        "lg": "64rem",
        "md": "48rem",
        "sm": "40rem",
        "xl": "80rem",
    })
}

function createMediaQueries(width: string): MediaQueries {
    return {
        gt: createMediaQuery(`(width > ${width})`),
        gte: createMediaQuery(`(width >= ${width})`),
        lt: createMediaQuery(`(width < ${width})`),
        lte: createMediaQuery(`(width <= ${width})`),
    }
}

function createMediaQuery(query: string): ReadonlySignal<boolean> {
    const media = window.matchMedia(query)
    const matches = signal(media.matches)
    media.addEventListener("change", () => matches(media.matches))
    return matches
}
