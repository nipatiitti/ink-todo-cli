"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ink_1 = require("ink");
const react_1 = __importDefault(require("react"));
const react_redux_1 = require("react-redux");
const constants_1 = require("../../constants");
const Tab_1 = __importDefault(require("./Tab"));
const isActive = (id, key) => id === key;
const Tabs = () => {
    const activeTab = react_redux_1.useSelector((state) => state.tabs);
    return (react_1.default.createElement(ink_1.Box, { marginTop: -2, marginLeft: 2 }, constants_1.tabs.map((item, i) => (react_1.default.createElement(Tab_1.default, { active: isActive(i, activeTab) }, item.toUpperCase())))));
};
exports.default = Tabs;
