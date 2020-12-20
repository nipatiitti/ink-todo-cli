"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ink_1 = require("ink");
const ink_use_stdout_dimensions_1 = __importDefault(require("ink-use-stdout-dimensions"));
const ink_gradient_1 = __importDefault(require("ink-gradient"));
const ink_big_text_1 = __importDefault(require("ink-big-text"));
const Tabs_1 = __importDefault(require("./feature/Tabs"));
const Input_1 = __importDefault(require("./feature/Input"));
const KeyboardHandler_1 = __importDefault(require("./components/KeyboardHandler"));
const Todos_1 = __importDefault(require("./feature/Todos"));
const App = () => {
    const [width, height] = ink_use_stdout_dimensions_1.default();
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(KeyboardHandler_1.default, null),
        react_1.default.createElement(ink_1.Box, { width: width, height: height - 3, marginTop: 2, borderStyle: "round", alignItems: "flex-start", flexDirection: "column" },
            react_1.default.createElement(ink_1.Box, { marginTop: -1, marginLeft: Math.round(width / 2 - 16), height: 2, width: 29 },
                react_1.default.createElement(ink_gradient_1.default, { name: "atlas" },
                    react_1.default.createElement(ink_big_text_1.default, { text: "TODO CLI", font: "tiny", space: false }))),
            react_1.default.createElement(Tabs_1.default, null),
            react_1.default.createElement(Todos_1.default, { maxHeight: height - 6 })),
        react_1.default.createElement(Input_1.default, null)));
};
exports.default = App;
