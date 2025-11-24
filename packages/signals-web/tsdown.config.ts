import signals from "@monstermann/unplugin-signals/rolldown"
import { defineConfig } from "tsdown"

export default defineConfig({
    clean: true,
    dts: true,
    entry: ["./src/index.ts"],
    format: "esm",
    unbundle: true,
    plugins: [
        signals({
            getPath: path => path.replace("src", "@signals-web"),
        }),
    ],
})
