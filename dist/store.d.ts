/// <reference types="redux-persist/types/types" />
/// <reference types="redux-persist" />
declare const rootReducer: import("redux").Reducer<import("redux").CombinedState<{
    tabs: number;
    todos: import("@reduxjs/toolkit").EntityState<{
        id: string;
        task: string;
        table: "todo" | "doing" | "done";
    }> & {
        selected: number | null;
    };
    input: boolean;
}>, import("redux").AnyAction>;
declare const store: import("@reduxjs/toolkit").EnhancedStore<import("redux").CombinedState<{
    tabs: number;
    todos: import("@reduxjs/toolkit").EntityState<{
        id: string;
        task: string;
        table: "todo" | "doing" | "done";
    }> & {
        selected: number | null;
    };
    input: boolean;
}>, import("redux").AnyAction, import("@reduxjs/toolkit").MiddlewareArray<import("redux").Middleware<{}, any, import("redux").Dispatch<import("redux").AnyAction>> | import("redux-thunk").ThunkMiddleware<any, import("redux").AnyAction, null> | import("redux-thunk").ThunkMiddleware<any, import("redux").AnyAction, undefined>>>;
export declare let persistor: import("redux-persist").Persistor;
export declare type RootState = ReturnType<typeof rootReducer>;
export default store;
