import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "^/_framework/*": "http://localhost:5203/",
      "^/_content/*": "http://localhost:5203/",
      // CSSはproxyで解決できないので、デザインがdefaultのままになってしまっている
    },
  },
});
