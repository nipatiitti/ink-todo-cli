"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ink_1 = require("ink");
const react_redux_1 = require("react-redux");
const slice_1 = require("./slice");
const constants_1 = require("../../constants");
const Scrollbar_1 = __importDefault(require("../../components/Scrollbar"));
const figures_1 = __importDefault(require("figures"));
const Todos = ({ maxHeight }) => {
    var _a;
    const dispatch = react_redux_1.useDispatch();
    const activeTab = react_redux_1.useSelector((state) => state.tabs);
    const todos = react_redux_1.useSelector(slice_1.todoSelector.selectAll);
    const current = (_a = react_redux_1.useSelector((state) => state.todos.selected)) !== null && _a !== void 0 ? _a : 0;
    const activeTodos = todos.filter((todo) => todo.table === constants_1.tabs[activeTab]);
    return (react_1.default.createElement(ink_1.Box, { marginTop: 1 },
        react_1.default.createElement(Scrollbar_1.default, { current: current, onChange: (value) => dispatch(slice_1.select(value)), height: maxHeight !== null && maxHeight !== void 0 ? maxHeight : 0, childrenHeight: 2 }, activeTodos.map((todo, i) => (react_1.default.createElement(ink_1.Box, { height: 2, marginBottom: 1 },
            react_1.default.createElement(ink_1.Box, { marginLeft: 2 },
                react_1.default.createElement(ink_1.Text, { color: current === i ? "greenBright" : "gray" }, current === i ? figures_1.default.circleFilled : figures_1.default.circle)),
            react_1.default.createElement(ink_1.Box, { marginLeft: 1 },
                react_1.default.createElement(ink_1.Text, null, todo.task))))))));
};
exports.default = Todos;
