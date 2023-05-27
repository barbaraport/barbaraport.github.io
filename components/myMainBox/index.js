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
import { jsx as _jsx } from "react/jsx-runtime";
import { Box } from "@mui/material";
import { Text } from "../../elements/text";
export var MyMainBox = function () {
    return (_jsx(Box, __assign({ sx: {
            backgroundColor: "primary.main",
            width: "100%",
            height: "100vh",
            display: "flex",
            textAlign: "center",
            alignSelf: "center",
            alignItems: "center",
            alignContent: "center",
            justifyContent: "center",
        } }, { children: _jsx(Text, { type: "h2", color: "text.secondary", text: "Looking for a skilled software developer?" }) })));
};
//# sourceMappingURL=index.js.map