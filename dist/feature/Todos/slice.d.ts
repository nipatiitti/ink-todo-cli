declare type Todo = {
    id: string;
    task: string;
    table: "todo" | "doing" | "done";
};
export declare const todosAdapter: import("@reduxjs/toolkit").EntityAdapter<Todo>;
export declare const todoSelector: import("@reduxjs/toolkit").EntitySelectors<Todo, import("redux").CombinedState<{
    tabs: number;
    todos: import("@reduxjs/toolkit").EntityState<Todo> & {
        selected: number | null;
    };
    input: boolean;
}>>;
export declare const add: import("@reduxjs/toolkit").ActionCreatorWithPayload<Todo, string>, remove: import("@reduxjs/toolkit").ActionCreatorWithPayload<string | number, string>, move: import("@reduxjs/toolkit").ActionCreatorWithPayload<import("@reduxjs/toolkit").Update<Todo>, string>, select: import("@reduxjs/toolkit").ActionCreatorWithPayload<number | null, string>;
declare const TodosReducer: import("redux").Reducer<import("@reduxjs/toolkit").EntityState<Todo> & {
    selected: number | null;
}, import("redux").AnyAction>;
export default TodosReducer;
