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
import { Box, Container } from "@mui/material";
import { AboutMe } from "../../components/aboutMe";
import { MyAvatar } from "../../components/avatar";
import { Footer } from "../../components/footer";
import { MyMainBox } from "../../components/myMainBox";
import { Text } from "../../elements/text";
export var MyPage = function () {
    return (_jsxs(Box, __assign({ sx: { backgroundColor: "text.secondary" } }, { children: [_jsx(MyMainBox, {}), _jsxs(Container, __assign({ sx: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "8px",
                } }, { children: [_jsx(MyAvatar, {}), _jsx(Text, { type: "body1", text: "B\u00E1rbara Port" }), _jsx(AboutMe, {})] })), _jsx(Footer, {})] })));
};
//# sourceMappingURL=index.js.map