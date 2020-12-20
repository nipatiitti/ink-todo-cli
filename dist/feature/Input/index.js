"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ID = void 0;
const react_1 = __importStar(require("react"));
const ink_1 = require("ink");
const ink_text_input_1 = __importDefault(require("ink-text-input"));
const react_redux_1 = require("react-redux");
const slice_1 = require("../Todos/slice");
const slice_2 = require("./slice");
const constants_1 = require("../../constants");
const ID = () => {
    return "_" + Math.random().toString(36).substr(2, 9);
};
exports.ID = ID;
const Input = () => {
    var _a;
    const dispatch = react_redux_1.useDispatch();
    const [value, setValue] = react_1.useState("");
    const activeTab = react_redux_1.useSelector((state) => state.tabs);
    const focus = react_redux_1.useSelector((state) => state.input);
    return (react_1.default.createElement(ink_1.Box, null,
        react_1.default.createElement(ink_1.Box, { marginRight: 1 },
            react_1.default.createElement(ink_1.Text, { color: "gray" }, "~"),
            react_1.default.createElement(ink_1.Text, { color: "cyanBright" }, "$:")),
        react_1.default.createElement(ink_text_input_1.default, { placeholder: `Add task to ${(_a = constants_1.tabs[activeTab]) === null || _a === void 0 ? void 0 : _a.toUpperCase()} <i>, Delete task <d>, move task <SPACE>. Move around <ARROWS>`, value: value, focus: focus, onChange: setValue, onSubmit: (value) => {
                var _a;
                dispatch(slice_1.add({ task: value, table: (_a = constants_1.tabs[activeTab]) !== null && _a !== void 0 ? _a : "todo", id: exports.ID() }));
                dispatch(slice_2.unfocus());
                setValue("");
            } })));
};
exports.default = Input;
