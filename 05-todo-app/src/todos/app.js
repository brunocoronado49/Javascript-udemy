import html from './app.html?raw'
import todoStore from '../store/todo.store'
import { renderTodos } from './use-cases';

const elementIds = {
    TodoList: '.todo-list',
    NewTodoInput: '#new-todo-input',
};

/**
 * 
 * @param {String} elementId 
 */
export const App = (elementId) => {
    const displayTodos = () => {
        const todos = todoStore.getTodos(todoStore.getCurrentfilter());
        renderTodos(elementIds.TodoList, todos);
    }

    // cuando la funcion se manda a llamar
    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
        displayTodos();
    })();

    // referencias html
    const newDescriptionInput = document.querySelector(elementIds.NewTodoInput);
    newDescriptionInput.addEventListener('keyup', event => {
        if (event.keyCode !== 13) return;
        if (event.target.value.trim().length === 0) return;

        todoStore.addTodo(event.target.value);
        displayTodos();
        event.target.value = '';
    });
}


