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
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { Text } from "../text";
export var MyAccordion = function (props) {
    var formatParagraphs = function () {
        var _a;
        var paragraphs = [];
        (_a = props.children) === null || _a === void 0 ? void 0 : _a.forEach(function (child) {
            if (typeof child === 'string') {
                var text = _jsx(Text, { type: "body1", text: child });
                if (props.paragraphIcon)
                    paragraphs.push(_jsxs(Box, __assign({ display: "flex", flexDirection: "row", gap: "8px" }, { children: [props.paragraphIcon, text] })));
                else
                    paragraphs.push(text);
            }
            else {
                paragraphs.push(child);
            }
        });
        return paragraphs;
    };
    return (_jsxs(Accordion, __assign({ disabled: props.disabled, defaultExpanded: props.defaultExpanded }, { children: [_jsx(AccordionSummary, __assign({ expandIcon: _jsx(ExpandMoreIcon, {}), "aria-controls": "panel2a-content", id: "panel2a-header" }, { children: _jsx(Box, __assign({ width: "100%", textAlign: "center" }, { children: _jsx(Text, { type: "body1", text: props.title }) })) })), _jsx(AccordionDetails, { children: formatParagraphs() })] })));
};
//# sourceMappingURL=index.js.map