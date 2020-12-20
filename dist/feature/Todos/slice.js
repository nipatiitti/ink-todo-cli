"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.select = exports.move = exports.remove = exports.add = exports.todoSelector = exports.todosAdapter = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
exports.todosAdapter = toolkit_1.createEntityAdapter();
const TodosSlice = toolkit_1.createSlice({
    name: "todos",
    initialState: exports.todosAdapter.getInitialState({
        selected: null,
    }),
    reducers: {
        add: exports.todosAdapter.addOne,
        remove: exports.todosAdapter.removeOne,
        move: exports.todosAdapter.updateOne,
        select: (state, { payload }) => {
            state.selected = payload;
        },
    },
});
exports.todoSelector = exports.todosAdapter.getSelectors((state) => state.todos);
_a = TodosSlice.actions, exports.add = _a.add, exports.remove = _a.remove, exports.move = _a.move, exports.select = _a.select;
const TodosReducer = TodosSlice.reducer;
exports.default = TodosReducer;
