import {todoActions, ITodo} from "./todoActions";
import {deleteTodo} from "./todoActions";

const todoAddForm: HTMLElement = document.getElementById('todoAddForm')!
const todoContent: Element = document.querySelector('.todos__content')!
const filterSelector: Element = document.querySelector('#filterSelect')!
const searchInput: Element = document.querySelector('#search-todos')!
const testBtn: Element = document.createElement('button')
testBtn.setAttribute('id', 'delete-btn')

const todos: ITodo[] = [
    {
        id: 1,
        title: 'Купить хлеб',
        completed: true
    },
    {
        id: 2,
        title: 'Купить молока',
        completed: false
    },
    {
        id: 3,
        title: 'Купить пиво',
        completed: false
    }
]

declare global {
    interface String {
        searchWords(s: string): boolean
    }
}

String.prototype.searchWords = function (s) {
    var hay = this.toLowerCase(), i = 0, n = -1, l;
    s = s.toLowerCase();
    for (; l = s[i++];) if (!~(n = hay.indexOf(l, n + 1))) return false;
    return true;
};

const mapRenderTodo = (todos: ITodo[], html: Element): void => {
    if (todos.length !== 0) {
        todos.map(item => {
            html.innerHTML += `<div class="todos__content-item" >
                            <input data-id=${item.id} type="checkbox" ${item.completed ? 'checked' : null}>
                            <h4 class=${item.completed ? 'done' : null}>${item.title}</h4>
                            <button id="delete-btn" data-id=${item.id}>Delete</button>
                        </div>`
        })
    } else {
        html.innerHTML = '<h4>No todos!</h4>'
    }

}

export const renderTodos = (todos: ITodo[], html: Element): void => {
    html.innerHTML = ''
    const filter = localStorage.getItem('filter') || 'all'
    switch (filter) {
        case 'all':
            mapRenderTodo(todos, todoContent)
            break
        case 'active':
            todos = todos.filter(item => item.completed === false)
            mapRenderTodo(todos, todoContent)
            break
        case 'completed':
            todos = todos.filter(item => item.completed === true)
            mapRenderTodo(todos, todoContent)
            break
    }

}

todoAddForm.addEventListener('submit', (e: Event): void => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const title: string = formData.get('todo')!.toString()
    todoActions(JSON.parse(localStorage.getItem('todos') as string) || todos, todoContent, title)

})

todoContent.addEventListener('click', (e: Event) => {
    const storageTodos: ITodo[] = JSON.parse(localStorage.getItem('todos') as string)

    if ((<Element>e.target).getAttribute('id') == testBtn.getAttribute('id')) {
        const id = Number((<HTMLElement>e.target).dataset.id)
        deleteTodo(id, storageTodos, todoContent)
    }

    if ((<Element>e.target).getAttribute('type') === 'checkbox') {
        const id = Number((<HTMLElement>e.target).dataset.id)
        const toglleCheckTodos = storageTodos.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    completed: !item.completed
                }
            }
            return {...item}
        })
        localStorage.setItem('todos', JSON.stringify(toglleCheckTodos))
        renderTodos(toglleCheckTodos, todoContent)
    }
})

searchInput.addEventListener('input', (e: Event) => {
    const value = (<HTMLInputElement>e.target).value

    if (value.length > 3) {
        const todos: ITodo[] = JSON.parse(localStorage.getItem('todos') as string)
        const serchByKeywordTodo = todos.filter(item => item.title.searchWords(value))
        renderTodos(serchByKeywordTodo, todoContent)
    } else {
        renderTodos(JSON.parse(localStorage.getItem('todos') as string), todoContent)
    }
})

filterSelector.addEventListener('change', (e: Event) => {
    const value = (<HTMLSelectElement>e.target).value
    const todos = JSON.parse(localStorage.getItem('todos') as string)
    localStorage.setItem('filter', value)
    renderTodos(todos, todoContent)

})

renderTodos(JSON.parse(localStorage.getItem('todos') as string) || todos, todoContent)