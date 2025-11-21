import { defineConfig } from "vitepress"
import { groupIconMdPlugin, groupIconVitePlugin } from "vitepress-plugin-group-icons"

export default defineConfig({
    base: "/signals-web/",
    description: "Signals collection for the web.",
    title: "signals-web",
    markdown: {
        theme: {
            dark: "catppuccin-macchiato",
            light: "github-light-default",
        },
        config(md) {
            md.use(groupIconMdPlugin)
        },
    },
    themeConfig: {
        aside: false,
        outline: "deep",
        docFooter: {
            next: false,
            prev: false,
        },
        search: {
            provider: "local",
        },
        sidebar: [
            { base: "/ActiveElement/", text: "ActiveElement", items: [
                { link: "$activeElement", text: "$activeElement" },
                { link: "onActiveElementBlur", text: "onActiveElementBlur" },
                { link: "onActiveElementFocus", text: "onActiveElementFocus" },
            ] },
            { base: "/BodyClass/", text: "BodyClass", items: [
                { link: "createBodyClass", text: "createBodyClass" },
            ] },
            { base: "/BodyCursor/", text: "BodyCursor", items: [
                { link: "createBodyCursor", text: "createBodyCursor" },
            ] },
            { base: "/Breakpoints/", text: "Breakpoints", items: [
                { link: "createBreakpoints", text: "createBreakpoints" },
                { link: "createTailwindBreakpoints", text: "createTailwindBreakpoints" },
            ] },
            { base: "/ColorScheme/", text: "ColorScheme", items: [
                { link: "$colorScheme", text: "$colorScheme" },
                { link: "$hasDarkColorScheme", text: "$hasDarkColorScheme" },
                { link: "$hasLightColorScheme", text: "$hasLightColorScheme" },
                { link: "onColorSchemeChange", text: "onColorSchemeChange" },
            ] },
            { base: "/Connectivity/", text: "Connectivity", items: [
                { link: "$isOffline", text: "$isOffline" },
                { link: "$isOnline", text: "$isOnline" },
                { link: "onOffline", text: "onOffline" },
                { link: "onOnline", text: "onOnline" },
            ] },
            { base: "/ContrastPreference/", text: "ContrastPreference", items: [
                { link: "$contrastPreference", text: "$contrastPreference" },
                { link: "$hasContrastPreference", text: "$hasContrastPreference" },
                { link: "$hasLessContrastPreference", text: "$hasLessContrastPreference" },
                { link: "$hasMoreContrastPreference", text: "$hasMoreContrastPreference" },
                { link: "onContrastPreferenceChange", text: "onContrastPreferenceChange" },
            ] },
            { base: "/ElementClass/", text: "ElementClass", items: [
                { link: "createElementClass", text: "createElementClass" },
            ] },
            { base: "/ElementCursor/", text: "ElementCursor", items: [
                { link: "createElementCursor", text: "createElementCursor" },
            ] },
            { base: "/Fullscreen/", text: "Fullscreen", items: [
                { link: "$isFullscreen", text: "$isFullscreen" },
                { link: "onFullscreenChange", text: "onFullscreenChange" },
            ] },
            { base: "/History/", text: "History", items: [
                { link: "onHashChange", text: "onHashChange" },
                { link: "onPopState", text: "onPopState" },
            ] },
            { base: "/Keyboard/", text: "Keyboard", items: [
                { link: "onBeforeInput", text: "onBeforeInput" },
                { link: "onCompositionEnd", text: "onCompositionEnd" },
                { link: "onCompositionStart", text: "onCompositionStart" },
                { link: "onCompositionUpdate", text: "onCompositionUpdate" },
                { link: "onInput", text: "onInput" },
                { link: "onKeyDown", text: "onKeyDown" },
                { link: "onKeyUp", text: "onKeyUp" },
            ] },
            { base: "/MediaSession/", text: "MediaSession", items: [
                { link: "onMediaSessionNextTrack", text: "onMediaSessionNextTrack" },
                { link: "onMediaSessionPause", text: "onMediaSessionPause" },
                { link: "onMediaSessionPlay", text: "onMediaSessionPlay" },
                { link: "onMediaSessionPreviousTrack", text: "onMediaSessionPreviousTrack" },
                { link: "onMediaSessionSeekBackward", text: "onMediaSessionSeekBackward" },
                { link: "onMediaSessionSeekForward", text: "onMediaSessionSeekForward" },
                { link: "onMediaSessionSeekTo", text: "onMediaSessionSeekTo" },
                { link: "onMediaSessionStop", text: "onMediaSessionStop" },
            ] },
            { base: "/Mouse/", text: "Mouse", items: [
                { link: "$mouse", text: "$mouse" },
                { link: "$mouseX", text: "$mouseX" },
                { link: "$mouseY", text: "$mouseY" },
                { link: "onClick", text: "onClick" },
                { link: "onContextMenu", text: "onContextMenu" },
                { link: "onDblClick", text: "onDblClick" },
                { link: "onLeftClick", text: "onLeftClick" },
                { link: "onMouseDown", text: "onMouseDown" },
                { link: "onMouseDownLeft", text: "onMouseDownLeft" },
                { link: "onMouseDownRight", text: "onMouseDownRight" },
                { link: "onMouseMove", text: "onMouseMove" },
                { link: "onMouseUp", text: "onMouseUp" },
                { link: "onMouseUpLeft", text: "onMouseUpLeft" },
                { link: "onMouseUpRight", text: "onMouseUpRight" },
                { link: "onRightClick", text: "onRightClick" },
                { link: "onWheel", text: "onWheel" },
            ] },
            { base: "/PageVisibility/", text: "PageVisibility", items: [
                { link: "$isPageHidden", text: "$isPageHidden" },
                { link: "$isPageVisibile", text: "$isPageVisibile" },
                { link: "onPageVisibilityChange", text: "onPageVisibilityChange" },
            ] },
            { base: "/Pointer/", text: "Pointer", items: [
                { link: "$pointer", text: "$pointer" },
                { link: "$pointerX", text: "$pointerX" },
                { link: "$pointerY", text: "$pointerY" },
                { link: "onPointerDown", text: "onPointerDown" },
                { link: "onPointerMove", text: "onPointerMove" },
                { link: "onPointerUp", text: "onPointerUp" },
            ] },
            { base: "/ReducedMotionPreference/", text: "ReducedMotionPreference", items: [
                { link: "$hasReducedMotionPreference", text: "$hasReducedMotionPreference" },
                { link: "onReducedMotionPreferenceChange", text: "onReducedMotionPreferenceChange" },
            ] },
            { base: "/Selection/", text: "Selection", items: [
                { link: "onSelectionChange", text: "onSelectionChange" },
            ] },
            { base: "/Window/", text: "Window", items: [
                { link: "$windowHeight", text: "$windowHeight" },
                { link: "$windowSize", text: "$windowSize" },
                { link: "$windowWidth", text: "$windowWidth" },
                { link: "onWindowResize", text: "onWindowResize" },
            ] },
        ],
        socialLinks: [
            { icon: "github", link: "https://github.com/MichaelOstermann/signals-web" },
        ],
    },
    vite: {
        plugins: [
            groupIconVitePlugin(),
        ],
    },
})
