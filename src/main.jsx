import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";

const cacheRtl = createCache({
  key: "mui-rtl",
  stylisPlugins: [rtlPlugin, prefixer],
});

document.documentElement.setAttribute("dir", "rtl");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CacheProvider value={cacheRtl}>
      <App />
    </CacheProvider>
  </React.StrictMode>
);
