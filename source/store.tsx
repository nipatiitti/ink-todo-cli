import {
	combineReducers,
	configureStore,
	getDefaultMiddleware,
} from "@reduxjs/toolkit";

import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";

import { AsyncNodeStorage } from "redux-persist-node-storage";

import InputReducer from "./feature/Input/slice";
import TabsReducer from "./feature/Tabs/slice";
import TodosReducer from "./feature/Todos/slice";

const persistConfig = {
	key: "todo-cli",
	version: 1,
	storage: new AsyncNodeStorage(`${__dirname}/save`),
};

const rootReducer = combineReducers({
	tabs: TabsReducer,
	todos: TodosReducer,
	input: InputReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
	reducer: (persistedReducer as unknown) as typeof rootReducer,
	middleware: getDefaultMiddleware({
		serializableCheck: {
			ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
		},
	}),
});

export let persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;

export default store;
