import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import store from "./store";
import Root from "./components/root";

const root = createRoot(document.getElementById("main"));
root.render(
  <Provider store={store}>
    <Root />
  </Provider>
);
