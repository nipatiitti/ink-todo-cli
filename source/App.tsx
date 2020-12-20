import React, { FC } from "react";
import { Box } from "ink";
import useStdoutDimensions from "ink-use-stdout-dimensions";
import Gradient from "ink-gradient";
import BigText from "ink-big-text";
import Tabs from "./feature/Tabs";
import Input from "./feature/Input";
import KeyboardHandler from "./components/KeyboardHandler";
import Todos from "./feature/Todos";

const App: FC<{}> = () => {
	const [width, height] = useStdoutDimensions();

	return (
		<>
			<KeyboardHandler />
			<Box
				width={width}
				height={height - 3}
				marginTop={2}
				borderStyle="round"
				alignItems="flex-start"
				flexDirection="column"
			>
				<Box
					marginTop={-1}
					marginLeft={Math.round(width / 2 - 16)}
					height={2}
					width={29}
				>
					<Gradient name="atlas">
						<BigText text="TODO CLI" font="tiny" space={false} />
					</Gradient>
				</Box>
				<Tabs />
				<Todos maxHeight={height - 6} />
			</Box>
			<Input />
		</>
	);
};

export default App;
