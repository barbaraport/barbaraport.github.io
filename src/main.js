import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import { createRoot } from "react-dom/client";
import App from "./app";
import "./styles.css";
var root = createRoot(document.getElementById("root"));
root.render(_jsx(React.StrictMode, { children: _jsx(App, {}) }));
