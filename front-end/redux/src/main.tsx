import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
// import store from "./store/store";
import store from "./vanilla_store/store";
import Test from "./Test";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <>
      {/* <Provider store={store}>
        <App />
      </Provider> */}
      <Provider store={store}>
        <Test />
      </Provider>
    </>
  </React.StrictMode>
);
