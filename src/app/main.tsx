import React from "react";
import ReactDOM from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store";
import { Router } from "./router";
import "./global.css";
import { ThemeProvider } from "styled-components";
import { theme } from "@/shared/lib/theme/theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </ReduxProvider>
  </React.StrictMode>
);
