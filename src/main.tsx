import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import App from "./App";
import State from "./State";
import ShoppingCart from "./ShoppingCart";
import UpdateStateEx from "./UpdateStateEx";
import FormPage from "./FormPage";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <State /> */}
    {/* <ShoppingCart /> */}
    {/* <UpdateStateEx /> */}
    <FormPage />
  </React.StrictMode>
);
