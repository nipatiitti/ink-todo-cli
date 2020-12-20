declare module "ink-scrollbar" {
	import { Component, FC } from "react";

	const Scrollbar: FC<{
		show?: number;
		current?: number;
		thumbCharacter?: string;
		padding?: number;
		highlight?: Boolean | Object;
	}>;

	export default Scrollbar;
}
