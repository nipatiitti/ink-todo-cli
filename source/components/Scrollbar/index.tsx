import React, { FC, ReactNode, useEffect, useRef, useState } from "react";
import { Box, useInput } from "ink";

const usePrevious = <T,>(value: T) => {
	const ref = useRef<T>(value);
	useEffect(() => {
		ref.current = value;
	});
	return ref.current;
};

const Scrollbar: FC<{
	height: number;
	childrenHeight: number;
	width?: number;
	focus?: boolean;
	children: ReactNode[];
	current: number;
	onChange: (current: number) => void;
}> = ({
	height,
	width,
	children,
	focus = true,
	onChange,
	current,
	childrenHeight,
}) => {
	const [limit, setLimit] = useState(Math.floor(height / childrenHeight));
	// const [change, setChange] = useState(0);
	const [viewport, setViewport] = useState([current, current + limit] as [
		number,
		number
	]);

	const prevCurrent = usePrevious(current);

	useEffect(() => {
		setViewport(getViewPort(0));
	}, []);

	useEffect(() => {
		setViewport(getViewPort(current - prevCurrent));
	}, [current]);

	useEffect(() => {
		setLimit(Math.floor(height / childrenHeight));
	}, [height]);

	const getViewPort = (change: number): [number, number] => {
		// setChange(change);
		const [oldStart, oldEnd] = viewport;
		// Moving down
		if (change > 0) {
			const newStart = current >= oldEnd ? oldStart + change : oldStart;
			const newEnd = newStart + limit;
			return [newStart, newEnd];
		}

		// Moving up
		if (change < 0) {
			const newEnd = current < oldStart ? oldEnd + change : oldEnd;
			const newStart = newEnd - limit;
			return [newStart, newEnd];
		}

		return viewport;
	};

	useInput((_, key) => {
		if (focus) {
			if (!current && current !== 0) {
				onChange(0);
				return;
			}
			if (key.downArrow) {
				onChange(Math.min(current + 1, children.length - 1));
			}

			if (key.upArrow) {
				onChange(Math.max(current - 1, 0));
			}
		}
	});

	return (
		<>
			{/* <Box flexDirection="column">
				<Text>{(height / childrenHeight).toPrecision(3)}</Text>
				<Text>{limit}</Text>
				<Text>{current}</Text>
				<Text>{change}</Text>
				<Text>{`${viewport[0]},${viewport[1]}`}</Text>
			</Box> */}
			<Box
				flexDirection="column"
				alignItems="flex-start"
				height={Math.floor(height / childrenHeight) * childrenHeight}
				width={width ?? "90%"}
			>
				{children.slice(...viewport)}
			</Box>
		</>
	);
};

export default Scrollbar;
