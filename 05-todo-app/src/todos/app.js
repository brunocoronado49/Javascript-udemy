import html from './app.html?raw'
import todoStore, {Filters} from '../store/todo.store'
import { renderTodos, renderPendingTodos } from './use-cases';

const elementIds = {
    ClearCompleted: '.clear-completed',
    NewTodoInput: '#new-todo-input',
    RendingCount: '#pending-count',
    TodoFilters: '.filtro',
    TodoList: '.todo-list',
};

/**
 * 
 * @param {String} elementId 
 */
export const App = (elementId) => {
    const displayTodos = () => {
        const todos = todoStore.getTodos(todoStore.getCurrentfilter());
        renderTodos(elementIds.TodoList, todos);
        updatePendingCount();
    }

    const updatePendingCount = () => {
        renderPendingTodos(elementIds.RendingCount);
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
    const todoListUL = document.querySelector(elementIds.TodoList);
    const clearComppletedButton = document.querySelector(elementIds.ClearCompleted);
    const filtersUL = document.querySelectorAll(elementIds.TodoFilters);

    newDescriptionInput.addEventListener('keyup', event => {
        if (event.keyCode !== 13) return;
        if (event.target.value.trim().length === 0) return;

        todoStore.addTodo(event.target.value);
        displayTodos();
        event.target.value = '';
    });

    todoListUL.addEventListener('click', event => {
        const element = event.target.closest('[data-id]');
        todoStore.toggleTodo(element.getAttribute('data-id'));
        displayTodos();
    });

    todoListUL.addEventListener('click', event => {
        const isDestroy = event.target.className === 'destroy';
        const element = event.target.closest('[data-id]');
        if (!element || !isDestroy) return;

        todoStore.deleteTodo(element.getAttribute('data-id'));
        displayTodos();
    });

    clearComppletedButton.addEventListener('click', () => {
        todoStore.deleteCompleted();
        displayTodos();
    });

    filtersUL.forEach(element => {
        element.addEventListener('click', element => {
            filtersUL.forEach(el => el.classList.remove('selected'));
            element.target.classList.add('selected');

            switch (element.target.text) {
                case 'Todos':
                    todoStore.setFilter(Filters.All);
                    break;
                case 'Pendientes':
                    todoStore.setFilter(Filters.Pending);
                    break;
                case 'Completados':
                    todoStore.setFilter(Filters.Completed);
                    break;
            }

            displayTodos();
        });
    });
}



