import { createRoot } from "react-dom/client";

export const createShadowRoot = (styles: string) => {
  // Create a container element to hold the shadow root
  const container = document.createElement("div");

  // Attach a shadow root to the container element
  const shadow = container.attachShadow({ mode: "open" });

  const sheet = new CSSStyleSheet();
  sheet.replaceSync(styles);

  if (shadow) {
    shadow.adoptedStyleSheets = [sheet];

    // Append the container element to the document body
    document.body.appendChild(container);

    return createRoot(shadow);
  }
};
