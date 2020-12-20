"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ink_1 = require("ink");
const react_redux_1 = require("react-redux");
const constants_1 = require("../constants");
const slice_1 = require("../feature/Input/slice");
const slice_2 = require("../feature/Tabs/slice");
const slice_3 = require("../feature/Todos/slice");
const KeyboardHandler = () => {
    var _a;
    const dispatch = react_redux_1.useDispatch();
    const activeTab = react_redux_1.useSelector((state) => state.tabs);
    const tab = constants_1.tabs[activeTab] || "todo";
    const inputFocus = react_redux_1.useSelector((state) => state.input);
    const selectedTask = (_a = react_redux_1.useSelector((state) => state.todos.selected)) !== null && _a !== void 0 ? _a : 0;
    const todos = react_redux_1.useSelector(slice_3.todoSelector.selectAll).filter((todo) => todo.table === tab);
    ink_1.useInput((input, key) => {
        var _a;
        if (key.escape)
            dispatch(slice_1.unfocus());
        if (!inputFocus) {
            if (input === "i")
                dispatch(slice_1.focus());
            if (key.leftArrow) {
                dispatch(slice_2.switchTabs(Math.max(0, activeTab - 1)));
                dispatch(slice_3.select(null));
            }
            if (key.rightArrow) {
                dispatch(slice_2.switchTabs(Math.min(2, activeTab + 1)));
                dispatch(slice_3.select(null));
            }
            if (input === "d") {
                dispatch(slice_3.remove(((_a = todos[Math.min(selectedTask)]) === null || _a === void 0 ? void 0 : _a.id) || 0));
            }
            if (input === " ") {
                const task = todos[Math.min(selectedTask)] || todos[0];
                dispatch(slice_3.move({
                    id: (task === null || task === void 0 ? void 0 : task.id) || 0,
                    changes: {
                        table: (task === null || task === void 0 ? void 0 : task.table) === "todo"
                            ? "doing"
                            : (task === null || task === void 0 ? void 0 : task.table) === "doing"
                                ? "done"
                                : "todo",
                    },
                }));
            }
        }
    });
    return null;
};
exports.default = KeyboardHandler;
