import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import reactRefresh from "@vitejs/plugin-react-refresh"; // Add this import statement

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), reactRefresh(), tailwindcss()],
});