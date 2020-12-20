import { Box, Text } from "ink";
import React, { FC } from "react";

const Tab: FC<{ active: boolean; children: string }> = ({
	children,
	active = false,
}) => {
	let capString = "╭";
	let middleString = "│";
	let bottomString = "╯";
	for (let i = 0; i < children.length; i++) {
		capString += "─";
		bottomString += " ";
	}

	capString += "╮";
	bottomString += "╰";

	return (
		<Box marginRight={active ? 1 : 2} flexDirection="column">
			<Box marginTop={-1}>
				<Text bold={active} color={active ? "blue" : "white"}>
					{children}
				</Text>
			</Box>
			{active && (
				<Box marginLeft={-1} marginTop={-2} height={3} flexDirection="column">
					<Text>{capString}</Text>
					<Box>
						<Text>{middleString}</Text>
						<Box marginLeft={children.length}>
							<Text>{middleString}</Text>
						</Box>
					</Box>
					<Text>{bottomString}</Text>
				</Box>
			)}
		</Box>
	);
};

export default Tab;
