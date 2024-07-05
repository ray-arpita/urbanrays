import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./Store";
import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";
import './i18n';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain= "dev-pf3do7kq3uz3qinl.us.auth0.com"
    clientId="omdO0bUdeY2OeoKXiSMNvKYCzIPCMJ16"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <Provider store={store}>
      <App />
    </Provider>
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
reportWebVitals(console.log)
