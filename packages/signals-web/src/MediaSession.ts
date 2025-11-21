import { emitter } from "@monstermann/signals"

export const onMediaSessionNextTrack = emitter<MediaSessionActionDetails>({
    onWatch: once(() => navigator.mediaSession.setActionHandler("nexttrack", onMediaSessionNextTrack)),
})

export const onMediaSessionPause = emitter<MediaSessionActionDetails>({
    onWatch: once(() => navigator.mediaSession.setActionHandler("pause", onMediaSessionPause)),
})

export const onMediaSessionPlay = emitter<MediaSessionActionDetails>({
    onWatch: once(() => navigator.mediaSession.setActionHandler("play", onMediaSessionPlay)),
})

export const onMediaSessionPreviousTrack = emitter<MediaSessionActionDetails>({
    onWatch: once(() => navigator.mediaSession.setActionHandler("previoustrack", onMediaSessionPreviousTrack)),
})

export const onMediaSessionSeekBackward = emitter<MediaSessionActionDetails>({
    onWatch: once(() => navigator.mediaSession.setActionHandler("seekbackward", onMediaSessionSeekBackward)),
    silent: true,
})

export const onMediaSessionSeekForward = emitter<MediaSessionActionDetails>({
    onWatch: once(() => navigator.mediaSession.setActionHandler("seekforward", onMediaSessionSeekForward)),
    silent: true,
})

export const onMediaSessionSeekTo = emitter<MediaSessionActionDetails>({
    onWatch: once(() => navigator.mediaSession.setActionHandler("seekto", onMediaSessionSeekTo)),
    silent: true,
})

export const onMediaSessionStop = emitter<MediaSessionActionDetails>({
    onWatch: once(() => navigator.mediaSession.setActionHandler("stop", onMediaSessionStop)),
})

function once(fn: () => void): () => void {
    let init = true
    return function () {
        if (init) fn()
        init = false
    }
}
