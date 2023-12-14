import React from "react";
import { createRoot } from "react-dom/client";
import { Analytics } from "@vercel/analytics/react";
import { Globals } from "@react-spring/shared";

Globals.assign({
  frameLoop: "always",
});

import App from "./App";
import "./styles.css";

const root = createRoot(document.getElementById("root"));
const WithAnalytics = () => (
  <React.StrictMode>
    <App />
    <Analytics />
  </React.StrictMode>
);

root.render(<WithAnalytics />);
