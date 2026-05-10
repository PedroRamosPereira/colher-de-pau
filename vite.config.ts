// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
//
// Vercel deployment for TanStack Start requires Nitro to produce the server output
// that Vercel can route to. Without this, the deploy can finish as READY but serve
// 404 at `/` because no Vercel-compatible entrypoint is generated.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { nitro } from "nitro/vite";

export default defineConfig({
    vite: {
        plugins: [nitro()],
    },
});