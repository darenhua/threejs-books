import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles.css";
import { Analytics } from "@vercel/analytics/react";

const root = createRoot(document.getElementById("root"));
const WithAnalytics = () => (
  <>
    <App />
    <Analytics />
  </>
);
root.render(<WithAnalytics />);
