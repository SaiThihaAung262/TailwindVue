import { defineConfig, loadEnv } from "vite";
import type { ConfigEnv, UserConfig } from "vite";
import vueJsx from "@vitejs/plugin-vue-jsx";
import path from "path";
import { createHtmlPlugin } from "vite-plugin-html";
import components from "unplugin-vue-components/vite";
import autoImport from "unplugin-auto-import/vite";

import vue from "@vitejs/plugin-vue";

export default ({ command, mode, ssrBuild }: ConfigEnv): UserConfig => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    base: "./",
    esbuild: {},
    resolve: {
      alias: {
        "/@": path.resolve(__dirname, "./src"),
      },
    },
    plugins: [
      vue(),
      // vueJsx({}),
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            title: env.VITE_APP_NAME,
          },
        },
      }),
    ],
    optimizeDeps: {
      // include: ["vant", "@vant/touch-emulator"],
    },
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {},
          javascriptEnabled: true,
        },
        scss: {
          additionalData: ``,
        },
      },
    },
    server: {
      host: "0.0.0.0",
      port: 3777,
      open: true,
    },
  };
};
