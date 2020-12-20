"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.persistor = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const redux_persist_1 = require("redux-persist");
const redux_persist_node_storage_1 = require("redux-persist-node-storage");
const slice_1 = __importDefault(require("./feature/Input/slice"));
const slice_2 = __importDefault(require("./feature/Tabs/slice"));
const slice_3 = __importDefault(require("./feature/Todos/slice"));
const persistConfig = {
    key: "todo-cli",
    version: 1,
    storage: new redux_persist_node_storage_1.AsyncNodeStorage(`${__dirname}/save`),
};
const rootReducer = toolkit_1.combineReducers({
    tabs: slice_2.default,
    todos: slice_3.default,
    input: slice_1.default,
});
const persistedReducer = redux_persist_1.persistReducer(persistConfig, rootReducer);
const store = toolkit_1.configureStore({
    reducer: persistedReducer,
    middleware: toolkit_1.getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [redux_persist_1.FLUSH, redux_persist_1.REHYDRATE, redux_persist_1.PAUSE, redux_persist_1.PERSIST, redux_persist_1.PURGE, redux_persist_1.REGISTER],
        },
    }),
});
exports.persistor = redux_persist_1.persistStore(store);
exports.default = store;
