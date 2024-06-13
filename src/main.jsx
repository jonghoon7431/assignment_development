import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import QueryClientSetUp from "./QueryClientSetUp";
import "./index.css";
import store from "./redux/config/configStore";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <QueryClientSetUp>
        <App />
      </QueryClientSetUp>
    </React.StrictMode>
  </Provider>
);
