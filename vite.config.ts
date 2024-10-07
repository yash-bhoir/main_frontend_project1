import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const target = 'http://localhost:8080';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      '/api': {
        target,
        changeOrigin: true,
        secure: false, // Set to false if the backend server does not use HTTPS
      },
    },
    port: 5173,
  },
});
