import {renderTodos} from "./main";

export interface ITodo {
    readonly id: number,
    title: string,
    completed: boolean
}

export const deleteTodo = (id: number, todos: ITodo[], html: Element):void => {
    const filteredTodos = todos.filter(item => item.id !== id)
    todoActions(filteredTodos, html)
}

export const todoActions = (todos: ITodo[], html: Element, title?: string): void => {

    if (title){
        const newTodo: ITodo = {
            id: Date.now(),
            title,
            completed: false
        }

        todos.push(newTodo)
    }

    localStorage.setItem('todos', JSON.stringify(todos))
    const parsedTodos: ITodo[] = JSON.parse(localStorage.getItem('todos') as string)
    renderTodos(parsedTodos, html)
}