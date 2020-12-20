import { useState, useEffect } from "react";

const KeepAlive = () => {
	const [_, setCounter] = useState(1);

	useEffect(() => {
		const timer = setInterval(() => {
			if (_) setCounter((_) => _ + 1);
		}, 100);

		return () => {
			clearInterval(timer);
		};
	}, []);

	return null;
};

export default KeepAlive;
