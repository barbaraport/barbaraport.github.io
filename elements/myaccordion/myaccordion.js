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
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
export function MyAccordion(props) {
    return (_jsxs(Accordion, __assign({ disabled: props.disabled }, { children: [_jsx(AccordionSummary, __assign({ expandIcon: _jsx(ExpandMoreIcon, {}), "aria-controls": "panel2a-content", id: "panel2a-header" }, { children: _jsx(Typography, { children: props.title }) })), _jsx(AccordionDetails, { children: _jsx(Typography, { children: props.text }) })] })));
}
//# sourceMappingURL=myaccordion.js.map