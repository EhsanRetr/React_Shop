import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import Shopcontextprovider from "./containers/context/shopcontext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Shopcontextprovider>
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    </Shopcontextprovider>
  </>
);
reportWebVitals();
