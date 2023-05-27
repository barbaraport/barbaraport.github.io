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
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { Text } from "../../elements/text";
export var Footer = function () {
    return (_jsxs(Box, __assign({ sx: {
            backgroundColor: "primary.main",
            padding: "8px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        } }, { children: [_jsxs(Box, { children: [_jsx(IconButton, __assign({ onClick: function () {
                            return (window.location.href =
                                "https://www.linkedin.com/in/barbaraport/");
                        } }, { children: _jsx(LinkedInIcon, { color: "secondary" }) })), _jsx(IconButton, __assign({ onClick: function () {
                            return (window.location.href =
                                "https://github.com/barbaraport");
                        } }, { children: _jsx(GitHubIcon, { color: "secondary" }) }))] }), _jsx(Text, { type: "body1", color: "text.secondary", text: "Made with \uD83D\uDC96 by B\u00E1rbara Port" })] })));
};
//# sourceMappingURL=index.js.map