import React from "react";
import ReactDOM from "react-dom/client";

import { Router } from "./Router.tsx";
import "./styles/Global.css";
import "react-toastify/dist/ReactToastify.css";

import { ContextCartProvider } from "./hooks/useCartContext.tsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { COLORS } from "./styles/theme/default.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={COLORS}>
        <ContextCartProvider>
          <Router />
        </ContextCartProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
