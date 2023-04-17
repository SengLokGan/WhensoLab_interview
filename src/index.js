import React from "react";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

import App from "./App";
import store from "./slices/store";
import { CustomToastContainer } from "./components";

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <Provider store={store}>
      <App />
      <CustomToastContainer />
    </Provider>
  );
}
