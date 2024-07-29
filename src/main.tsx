import React from "react";
import ReactDOM from "react-dom/client";
import App from "@src/App";
import "@stackflow/plugin-basic-ui/index.css";
import "@src/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
