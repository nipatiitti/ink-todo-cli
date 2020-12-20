import React, { useState } from "react";
import { Box, Text } from "ink";
import TextInput from "ink-text-input";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../Todos/slice";
import { RootState } from "../../store";
import { unfocus } from "./slice";
import { tabs } from "../../constants";

export const ID = () => {
	return "_" + Math.random().toString(36).substr(2, 9);
};

const Input = () => {
	const dispatch = useDispatch();
	const [value, setValue] = useState("");

	const activeTab = useSelector((state: RootState) => state.tabs);
	const focus = useSelector((state: RootState) => state.input);

	return (
		<Box>
			<Box marginRight={1}>
				<Text color="gray">~</Text>
				<Text color="cyanBright">$:</Text>
			</Box>
			<TextInput
				placeholder={`Add task to ${tabs[
					activeTab
				]?.toUpperCase()} <i>, Delete task <d>, move task <SPACE>. Move around <ARROWS>`}
				value={value}
				focus={focus}
				onChange={setValue}
				onSubmit={(value) => {
					dispatch(
						add({ task: value, table: tabs[activeTab] ?? "todo", id: ID() })
					);
					dispatch(unfocus());
					setValue("");
				}}
			/>
		</Box>
	);
};

export default Input;
