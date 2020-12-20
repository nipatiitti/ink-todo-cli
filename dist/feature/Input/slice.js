"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.unfocus = exports.focus = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const InputSlice = toolkit_1.createSlice({
    name: "input",
    initialState: false,
    reducers: {
        focus: () => true,
        unfocus: () => false,
    },
});
_a = InputSlice.actions, exports.focus = _a.focus, exports.unfocus = _a.unfocus;
const InputReducer = InputSlice.reducer;
exports.default = InputReducer;
