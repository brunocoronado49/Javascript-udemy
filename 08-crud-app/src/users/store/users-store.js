import { loadUsersByPage } from "../usecases/load-users-by-page";

const state = {
    currentPage: 0,
    users: [],
}

const loadNextPage = async() => {
    const users = await loadUsersByPage(state.currentPage + 1);
    if (users.length === 0) return;

    state.currentPage += 1;
    state.users = users;
}

const loadPreviousPage = async() => {
    const users = await loadUsersByPage(state.currentPage - 1);
    if (users.length === 0) return;

    state.currentPage -= 1;
    state.users = users;
}

const onUserChanged = () => {
    throw new Error('Not implemened yet');
}

const reloadPage = async() => {
    throw new Error('Not implemened yet');
}

export default {
    loadNextPage,
    loadPreviousPage,
    onUserChanged,
    reloadPage,
    /**
     * 
     * @returns {User[]}
     */
    getUsers: () => [...state.users],
    /**
     * 
     * @returns {Number}
     */
    getCurrentPage: () => state.currentPage,
}


