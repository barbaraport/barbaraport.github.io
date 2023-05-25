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
import Typography from "@mui/material/Typography";
export var Text = function (props) {
    return (_jsx(Typography, __assign({ variant: props.type, color: props.type === 'h2' ? 'text.secondary' : 'text.primary' }, { children: props.text })));
};
//# sourceMappingURL=index.js.map