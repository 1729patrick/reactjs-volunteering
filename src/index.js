import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./context/UserContext";
import { AuxProvider } from "./context/AuxContext";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <AuxProvider>
        <App />
      </AuxProvider>
    </UserProvider>
    <ToastContainer />
  </React.StrictMode>,
  document.getElementById("root")
);
