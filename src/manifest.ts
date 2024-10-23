// eslint-disable-next-line import/no-extraneous-dependencies
import { defineManifest } from "@crxjs/vite-plugin";

import packageData from "../package.json";

const isDev = process.env.NODE_ENV === "development";

export default defineManifest({
  manifest_version: 3,
  name: `${packageData.displayName || packageData.name}${
    isDev ? ` ➡️ Dev` : ""
  }`,
  version: packageData.version,
  description: packageData.description,
  background: {
    service_worker: "src/background/index.ts",
    type: "module",
  },
  action: {
    default_popup: "index.html",
  },
  permissions: [
    "background",
    "contextMenus",
    "bookmarks",
    "tabs",
    "storage",
    "history",
  ],
  content_scripts: [
    {
      js: isDev
        ? ["src/content/ShortsXpBar/index.dev.tsx"]
        : ["src/content/ShortsXpBar/index.tsx"],
      matches: ["https://www.youtube.com/shorts/*"],
    },
  ],
});
