import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
  },
});

// import { defineConfig } from "vite";

// /// <reference types="vitest" />

// export default defineConfig({
//   test: {
//     environment: "jsdom",
//   },
// });
