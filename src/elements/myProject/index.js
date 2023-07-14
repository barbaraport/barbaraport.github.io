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
import { Box, Grid, Link } from "@mui/material";
import { Text } from "../text";
export var MyProject = function (props) {
    return (_jsx(Grid, __assign({ item: true, xs: 12, sm: 6, md: 4, sx: { wordWrap: "break-word", padding: "16px" } }, { children: _jsx(Link, __assign({ href: props.project.html_url, underline: "hover" }, { children: _jsxs(Box, __assign({ border: "1px solid", borderColor: "text.secondary", borderRadius: "8px", sx: {
                    display: "flex",
                    flexDirection: "column",
                    placeContent: "center",
                    alignItems: "center",
                    height: "100%",
                    padding: "8px",
                } }, { children: [_jsx(Box, { component: "img", alt: "Folder image", width: "50%", src: "https://icon-library.com/images/folder-image-icon/folder-image-icon-2.jpg" }), _jsxs(Box, { children: [_jsx(Text, __assign({ id: "text-" + props.project.id, type: "body2", fontWeight: "bold" }, { children: props.project.name })), _jsx(Text, __assign({ id: "text-" + props.project.id + "-desc", type: "body2" }, { children: props.project.description }))] })] })) })) }), props.project.name));
};
