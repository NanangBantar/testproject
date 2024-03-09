import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AppModeProviderWrapper } from "./context/AppModeProvider";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppModeProviderWrapper>
      <App />
    </AppModeProviderWrapper>
  </React.StrictMode>
);
