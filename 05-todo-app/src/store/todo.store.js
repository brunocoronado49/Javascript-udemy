import { Todo } from '../todos/models/todo.model'

const Filters = {
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
    console.log(state);
    console.log('InitStore Duck');
}

const loadStore = () => {
    throw new Error('Not implemented');
}

/**
 * 
 * @param {String} description 
 */
const addTodo = (description) => {
    if (!description) throw new Error('Description is required');
    state.todos.push(new Todo(description));
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
}

/**
 * 
 * @param {String} todoId 
 */
const deleteTodo = (todoId) => {
    state.todos = state.todos.filter(todo => todo.id !== todoId);
}

const deleteCompleted = () => {
    state.todos = state.todos.filter(todo => todo.done);
}

/**
 * 
 * @param {Filters} newFilter 
 */
const setFilter = (newFilter = Filters.All) => {
    if (!Object.keys(Filters).includes(newFilter)) {
        throw new Error('New filer not valid.');
    }
    state.filter = newFilter;
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



