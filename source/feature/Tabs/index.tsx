import { Box } from "ink";
import React from "react";
import { useSelector } from "react-redux";
import { tabs } from "../../constants";
import { RootState } from "../../store";
import Tab from "./Tab";

const isActive = (id: number, key: number) => id === key;

const Tabs = () => {
	const activeTab = useSelector((state: RootState) => state.tabs);

	return (
		<Box marginTop={-2} marginLeft={2}>
			{tabs.map((item, i) => (
				<Tab active={isActive(i, activeTab)}>{item.toUpperCase()}</Tab>
			))}
		</Box>
	);
};

export default Tabs;
