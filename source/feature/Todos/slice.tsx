import {
	createSlice,
	createEntityAdapter,
	PayloadAction,
} from "@reduxjs/toolkit";
import { RootState } from "../../store";

type Todo = {
	id: string;
	task: string;
	table: "todo" | "doing" | "done";
};

export const todosAdapter = createEntityAdapter<Todo>();

const TodosSlice = createSlice({
	name: "todos",
	initialState: todosAdapter.getInitialState({
		selected: null as null | number,
	}),
	reducers: {
		add: todosAdapter.addOne,
		remove: todosAdapter.removeOne,
		move: todosAdapter.updateOne,
		select: (state, { payload }: PayloadAction<null | number>) => {
			state.selected = payload;
		},
	},
});

export const todoSelector = todosAdapter.getSelectors(
	(state: RootState) => state.todos
);
export const { add, remove, move, select } = TodosSlice.actions;
const TodosReducer = TodosSlice.reducer;
export default TodosReducer;
