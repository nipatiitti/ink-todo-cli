#!/usr/bin/env node
import React from "react";
import { render } from "ink";
import meow from "meow";
import App from "./App";
import FullScreen from "./components/Fullscreen";
import KeepAlive from "./components/KeepAlive";
import { Provider } from "react-redux";
import store, { persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

meow(`
	Usage
	  $ todo
`);

render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<FullScreen>
				<KeepAlive />
				<App />
			</FullScreen>
		</PersistGate>
	</Provider>
);
