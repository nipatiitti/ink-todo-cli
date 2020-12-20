"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.switchTabs = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const TabsSlice = toolkit_1.createSlice({
    name: "tabs",
    initialState: 0,
    reducers: {
        switchTabs: (_, { payload }) => payload,
    },
});
exports.switchTabs = TabsSlice.actions.switchTabs;
const TabsReducer = TabsSlice.reducer;
exports.default = TabsReducer;
