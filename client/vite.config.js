import dotenv from "dotenv";
import react from "@vitejs/plugin-react-swc";

dotenv.config({ path: "../.env" });

export default {
  plugins: [react()],
  server: {
    proxy: {
      "/api":
        process.env.NODE_ENV === "production"
          ? process.env.DATABASE_URL
          : `http://localhost:${process.env.PORT}`,
    },
  },
  cacheDir: "../node_modules/.vite",
};

// process.env.NODE_ENV === "production" ? "https://your-production-api.com" : `http://localhost:${process.env.PORT}`
