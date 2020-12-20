import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const TabsSlice = createSlice({
	name: "tabs",
	initialState: 0,
	reducers: {
		switchTabs: (_, { payload }: PayloadAction<number>) => payload,
	},
});

export const { switchTabs } = TabsSlice.actions;
const TabsReducer = TabsSlice.reducer;
export default TabsReducer;
