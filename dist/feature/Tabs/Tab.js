"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ink_1 = require("ink");
const react_1 = __importDefault(require("react"));
const Tab = ({ children, active = false, }) => {
    let capString = "╭";
    let middleString = "│";
    let bottomString = "╯";
    for (let i = 0; i < children.length; i++) {
        capString += "─";
        bottomString += " ";
    }
    capString += "╮";
    bottomString += "╰";
    return (react_1.default.createElement(ink_1.Box, { marginRight: active ? 1 : 2, flexDirection: "column" },
        react_1.default.createElement(ink_1.Box, { marginTop: -1 },
            react_1.default.createElement(ink_1.Text, { bold: active, color: active ? "blue" : "white" }, children)),
        active && (react_1.default.createElement(ink_1.Box, { marginLeft: -1, marginTop: -2, height: 3, flexDirection: "column" },
            react_1.default.createElement(ink_1.Text, null, capString),
            react_1.default.createElement(ink_1.Box, null,
                react_1.default.createElement(ink_1.Text, null, middleString),
                react_1.default.createElement(ink_1.Box, { marginLeft: children.length },
                    react_1.default.createElement(ink_1.Text, null, middleString))),
            react_1.default.createElement(ink_1.Text, null, bottomString)))));
};
exports.default = Tab;
