import React from "react";
import ReactDOM from "react-dom/client";
import "reset-css";
import "@/assets/styles/global.scss";

import App from "./App";
// import { BrowserRouter } from "react-router-dom";
// import Router from "./router";
import { Router } from "./router";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <Router />
  // </React.StrictMode>
);
