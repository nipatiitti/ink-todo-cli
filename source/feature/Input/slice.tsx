import { createSlice } from "@reduxjs/toolkit";

const InputSlice = createSlice({
	name: "input",
	initialState: false,
	reducers: {
		focus: () => true,
		unfocus: () => false,
	},
});

export const { focus, unfocus } = InputSlice.actions;

const InputReducer = InputSlice.reducer;
export default InputReducer;
