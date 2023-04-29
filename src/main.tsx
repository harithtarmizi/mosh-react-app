import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import State from "./State";
import ShoppingCart from "./ShoppingCart";
import UpdateStateEx from "./UpdateStateEx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <State /> */}
    {/* <ShoppingCart /> */}
    <UpdateStateEx />
  </React.StrictMode>
);
