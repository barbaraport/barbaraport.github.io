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
import { Box } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { Text } from "../../elements/text";
export var MyAvatar = function () {
    var avatarSize = {
        width: "30vh",
        height: "30vh",
    };
    return (_jsxs(Box, __assign({ sx: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
        } }, { children: [_jsx(Avatar, { alt: "B\u00E1rbara Port", src: "https://avatars.githubusercontent.com/u/62317075?v=4", sx: avatarSize }), _jsx(Text, __assign({ id: "my-name", type: "h6" }, { children: "Hello! You can call me B\u00E1rbara Port. I am here to help you." }))] })));
};
