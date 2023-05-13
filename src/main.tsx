import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import App from "./App";
import State from "./State";
import ShoppingCart from "./ShoppingCart";
import UpdateStateEx from "./UpdateStateEx";
import FormPage from "./FormPage";
import LearnHookEffect from "./effect-lesson";
import App2 from "./App2";
import User from "./User";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <State /> */}
    {/* <ShoppingCart /> */}
    {/* <UpdateStateEx /> */}
    {/* <FormPage /> */}
    {/* <LearnHookEffect /> */}
    {/* <App2 /> */}
    <User />
  </React.StrictMode>
);
