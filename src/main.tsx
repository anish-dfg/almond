import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Auth0Provider
    domain="dev-7xb3h0amuo62cj3t.us.auth0.com"
    clientId="BIe4y7fFMEpSgvwIdTE2J4dvReqJD8AG"
    authorizationParams={{
      redirect_uri: window.location.origin,
      audience: "https://ai.developforgood.org",
    }}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </Auth0Provider>,
);
