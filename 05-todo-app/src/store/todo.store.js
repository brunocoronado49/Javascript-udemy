import { Todo } from '../todos/models/todo.model'

export const Filters = {
    All: 'all',
    Completed: 'completed',
    Pending: 'pending'
}

const state = {
    todos: [
        new Todo('Sable de luz'),
        new Todo('Carta de joker'),
        new Todo('Anillo unico'),
        new Todo('Barita de sauco'),
        new Todo('Espada de plata'),
        new Todo('Rellic'),
    ],
    filter: Filters.All,
}

const initStore = () => {
    loadStore();
    console.log('InitStore Duck');
}

const loadStore = () => {
    if (!localStorage.getItem('state')) return;

    const {todos = [], filter = Filters.All} = JSON.parse(localStorage.getItem('state'));
    state.todos = todos;
    state.filter = filter;
}

const saveStateToLocalStorage = () => {
    localStorage.setItem('state', JSON.stringify(state));
}

/**
 * 
 * @param {String} description 
 */
const addTodo = (description) => {
    if (!description) throw new Error('Description is required');
    state.todos.push(new Todo(description));

    saveStateToLocalStorage();
}

/**
 * 
 * @param {String} todoId 
 */
const toggleTodo = (todoId) => {
    state.todos = state.todos.map(todo => {
        if (todo.id === todoId) {
            todo.done = !todo.done;
        }

        return todo;
    });

    saveStateToLocalStorage();
}

/**
 * 
 * @param {String} todoId 
 */
const deleteTodo = (todoId) => {
    state.todos = state.todos.filter(todo => todo.id !== todoId);
    saveStateToLocalStorage();
}

const deleteCompleted = () => {
    state.todos = state.todos.filter(todo => !todo.done);
    saveStateToLocalStorage();
}

/**
 * 
 * @param {Filters} newFilter 
 */
const setFilter = (newFilter = Filters.All) => {
    state.filter = newFilter;
    saveStateToLocalStorage();
}

const getCurrentfilter = () => {
    return state.filter;
}

const getTodos = (filter = Filters.All) => {
    switch (filter) {
        case Filters.All:
            return [...state.todos];
            
        case Filters.Completed:
            return state.todos.filter(todo => todo.done);
        
        case Filters.Pending:
            return state.todos.filter(todo => !todo.done);

        default:
            throw new Error(`Option ${filter} not permited`);
    }
}

export default {
    addTodo,
    deleteCompleted,
    deleteTodo,
    getCurrentfilter,
    getTodos,
    initStore,
    loadStore,
    setFilter,
    toggleTodo,
};



