import React, { FC } from "react";
import { Box, Text } from "ink";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { select, todoSelector } from "./slice";
import { tabs } from "../../constants";
import Scrollbar from "../../components/Scrollbar";
import figures from "figures";

const Todos: FC<{ maxHeight?: number }> = ({ maxHeight }) => {
	const dispatch = useDispatch();
	const activeTab = useSelector((state: RootState) => state.tabs);
	const todos = useSelector(todoSelector.selectAll);
	const current = useSelector((state: RootState) => state.todos.selected) ?? 0;

	const activeTodos = todos.filter((todo) => todo.table === tabs[activeTab]);
	return (
		<Box marginTop={1}>
			<Scrollbar
				current={current}
				onChange={(value) => dispatch(select(value))}
				height={maxHeight ?? 0}
				childrenHeight={2}
			>
				{activeTodos.map((todo, i) => (
					<Box height={2} marginBottom={1}>
						<Box marginLeft={2}>
							<Text color={current === i ? "greenBright" : "gray"}>
								{current === i ? figures.circleFilled : figures.circle}
							</Text>
						</Box>
						<Box marginLeft={1}>
							<Text>{todo.task}</Text>
						</Box>
					</Box>
				))}
			</Scrollbar>
		</Box>
	);
};

export default Todos;
