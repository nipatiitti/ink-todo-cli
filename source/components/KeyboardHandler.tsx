import { useInput } from "ink";
import { useDispatch, useSelector } from "react-redux";
import { tabs } from "../constants";
import { focus, unfocus } from "../feature/Input/slice";
import { switchTabs } from "../feature/Tabs/slice";
import { move, remove, select, todoSelector } from "../feature/Todos/slice";
import { RootState } from "../store";

const KeyboardHandler = () => {
	const dispatch = useDispatch();
	const activeTab = useSelector((state: RootState) => state.tabs);
	const tab = tabs[activeTab] || "todo";
	const inputFocus = useSelector((state: RootState) => state.input);
	const selectedTask =
		useSelector((state: RootState) => state.todos.selected) ?? 0;
	const todos = useSelector(todoSelector.selectAll).filter(
		(todo) => todo.table === tab
	);

	useInput((input, key) => {
		if (key.escape) dispatch(unfocus());

		if (!inputFocus) {
			if (input === "i") dispatch(focus());

			if (key.leftArrow) {
				dispatch(switchTabs(Math.max(0, activeTab - 1)));
				dispatch(select(null));
			}

			if (key.rightArrow) {
				dispatch(switchTabs(Math.min(2, activeTab + 1)));
				dispatch(select(null));
			}

			if (input === "d") {
				dispatch(remove(todos[Math.min(selectedTask)]?.id || 0));
			}

			if (input === " ") {
				const task = todos[Math.min(selectedTask)] || todos[0];
				dispatch(
					move({
						id: task?.id || 0,
						changes: {
							table:
								task?.table === "todo"
									? "doing"
									: task?.table === "doing"
									? "done"
									: "todo",
						},
					})
				);
			}
		}
	});

	return null;
};

export default KeyboardHandler;
