import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/lakeflow-connect-questionnaire/",
  plugins: [react()],
  server: { port: 5179, host: true },
});
