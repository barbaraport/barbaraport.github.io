var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Container from "@mui/material/Container";
import { MyAvatar } from "./components/avatar";
import { Grid, Typography } from "@material-ui/core";
import { AboutMe } from "./components/aboutMe";
var App = function () {
    return (_jsx(Container, { children: _jsxs(Grid, __assign({ container: true, spacing: 1, direction: "column", justifyContent: "center", alignItems: "center", alignContent: "center", style: { width: "100%" } }, { children: [_jsx(MyAvatar, {}), _jsx(Typography, __assign({ variant: "subtitle1", color: "textPrimary" }, { children: "B\u00E1rbara Port" })), _jsx(AboutMe, {})] })) }));
};
export default App;
//# sourceMappingURL=app.js.map