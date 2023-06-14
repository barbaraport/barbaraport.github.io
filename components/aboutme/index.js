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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import CheckBoxTwoToneIcon from "@mui/icons-material/CheckBoxTwoTone";
import { Box, Grid, Link } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { MyAccordion } from "../../elements/myAccordion";
import { Text } from "../../elements/text";
export var AboutMe = function () {
    var _a = useState(), repositories = _a[0], setRepositories = _a[1];
    useEffect(function () {
        fetchRepositories();
    }, []);
    var fetchRepositories = function () { return __awaiter(void 0, void 0, void 0, function () {
        var response, fetchedRepositories;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, axios.get("https://api.github.com/users/barbaraport/repos")];
                case 1:
                    response = _a.sent();
                    return [4, response.data];
                case 2:
                    fetchedRepositories = _a.sent();
                    setRepositories(fetchedRepositories);
                    return [2];
            }
        });
    }); };
    var aboutMe = function () {
        return [
            "Experienced software developer with a passion for crafting high-quality solutions and skilled in strong typed languages. Recognized with two Honorable Mentions for my outstanding contributions in educational institutions.",
        ];
    };
    var hardSkills = function () {
        return [
            "Complex business logic development using Java 8, formulating, and implementing integration and unit test cases with JUnit 5 and leveraging the Spring Framework for microservices architecture;",
            "Adept at developing React functional and class components, implementing client features using TypeScript/JavaScript;",
            "Consulting on automated testing with Selenium/Cypress;",
            "My expertise extends to Cucumber/Gherkin for automated specifications.",
        ];
    };
    var softSkills = function () {
        return [
            "My communicative nature shines through collaborating remotely using agile methodologies, breaking down language barriers;",
            "I'm a self-taught problem solver, continuously pursuing knowledge to overcome challenges;",
            "Detail-oriented in development, communication, and life, I meticulously attend to information at hand;",
            "With a thirst for learning, I actively seek out the best training opportunities to further enhance my abilities.",
        ];
    };
    var projects = function () {
        var items = [];
        repositories === null || repositories === void 0 ? void 0 : repositories.forEach(function (repository) {
            items.push(_jsx(Grid, __assign({ item: true, xs: 12, sm: 6, md: 4, sx: { wordWrap: "break-word", padding: "16px" } }, { children: _jsx(Link, __assign({ href: repository.html_url, underline: "hover" }, { children: _jsxs(Box, __assign({ border: "1px solid", borderColor: "text.secondary", borderRadius: "8px", sx: {
                            display: "flex",
                            flexDirection: "column",
                            placeContent: "center",
                            alignItems: "center",
                            height: "100%",
                            padding: "8px",
                        } }, { children: [_jsx(Box, { component: "img", alt: "Folder image", width: "50%", src: "https://icon-library.com/images/folder-image-icon/folder-image-icon-2.jpg" }), _jsxs(Box, { children: [_jsx(Text, { type: "body2", fontWeight: "bold", text: repository.name }), _jsx(Text, { type: "body2", text: repository.description })] })] })) })) }), repository.name));
        });
        return [
            _jsx(Grid, __assign({ container: true, spacing: { xs: 2, sm: 2, md: 2 }, justifyContent: "center" }, { children: items }), "repositories"),
        ];
    };
    return (_jsxs(Box, __assign({ sx: { width: "100%" } }, { children: [_jsx(MyAccordion, __assign({ disabled: false, defaultExpanded: true, title: "About Me" }, { children: aboutMe() })), _jsx(MyAccordion, __assign({ disabled: false, defaultExpanded: true, title: "Hard Skills", paragraphIcon: _jsx(CheckBoxTwoToneIcon, {}) }, { children: hardSkills() })), _jsx(MyAccordion, __assign({ disabled: false, defaultExpanded: true, title: "Soft Skills", paragraphIcon: _jsx(CheckBoxTwoToneIcon, {}) }, { children: softSkills() })), _jsx(MyAccordion, __assign({ disabled: false, defaultExpanded: false, title: "GitHub Projects" }, { children: projects() }))] })));
};
//# sourceMappingURL=index.js.map