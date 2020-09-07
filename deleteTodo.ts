import {ITodo} from "./todoActions";

export const deleteTodo = (id: number, todos: ITodo[]): ITodo[] => {
    todos.filter(item => item.id !== id)
    return todos
}