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
import CheckBoxTwoToneIcon from "@mui/icons-material/CheckBoxTwoTone";
import { Box } from "@mui/material";
import { MyAccordion } from "../../elements/myAccordion";
export var AboutMe = function () {
    return (_jsxs(Box, __assign({ sx: { width: "100%" } }, { children: [_jsx(MyAccordion, { disabled: false, defaultExpanded: true, title: "About me", text: [
                    "Experienced software developer with a passion for crafting high-quality solutions. Recognized with two Honorable Mentions for my outstanding contributions in educational institutions.",
                ] }), _jsx(MyAccordion, { disabled: false, defaultExpanded: true, title: "Hard Skills", text: [
                    "Complex business logic development using Java 8, formulating, and implementing integration and unit test cases with JUnit 5 and leveraging the Spring Framework for microservices architecture;",
                    "Adept at developing React functional and class components, implementing client features using TypeScript/JavaScript;",
                    "Consulting on automated testing with Selenium/Cypress;",
                    "My expertise extends to Cucumber/Gherkin for automated specifications.",
                ], paragraphIcon: _jsx(CheckBoxTwoToneIcon, {}) }), _jsx(MyAccordion, { disabled: false, defaultExpanded: true, title: "Soft Skills", text: [
                    "My communicative nature shines through collaborating remotely using agile methodologies, breaking down language barriers;",
                    "I'm a self-taught problem solver, continuously pursuing knowledge to overcome challenges;",
                    "Detail-oriented in development, communication, and life, I meticulously attend to information at hand;",
                    "With a thirst for learning, I actively seek out the best training opportunities to further enhance my abilities.",
                ], paragraphIcon: _jsx(CheckBoxTwoToneIcon, {}) })] })));
};
//# sourceMappingURL=index.js.map