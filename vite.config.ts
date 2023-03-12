import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@interfaces": path.resolve(__dirname, "./src/interfaces"),
      "@constants": path.resolve(__dirname, "./src/constants"),
      "@api": path.resolve(__dirname, "./src/api"),
      "@zustand": path.resolve(__dirname, "./src/zustand"),
      "@data": path.resolve(__dirname, "./src/data"),
      "@services": path.resolve(__dirname, "./src/services"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@admin": path.resolve(__dirname, "./src/admin"),
      "@404": path.resolve(__dirname, "./src/404"),
      "@layouts": path.resolve(__dirname, "./src/layouts"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@validation": path.resolve(__dirname, "./src/validation"),
      "@utils": path.resolve(__dirname, "./src/utils"),
    },
  },
});
