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
import { Text } from "./index";
describe("<Text />", function () {
    it("renders", function () {
        cy.mount(_jsx(Text, __assign({ type: "body2", id: "text" }, { children: "Click me!" }), "text"));
    });
    it("text", function () {
        cy.mount(_jsx(Text, __assign({ type: "body2", id: "text" }, { children: "Click me!" }), "text"));
        cy.get("[id=text]").should("contains.text", "Click me!");
    });
});
