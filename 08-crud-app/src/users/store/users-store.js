import { loadUsersByPage } from "../usecases/load-users-by-page";

const state = {
    users: [],
    currentPage: 0,
}

const loadNextPage = async() => {
    await loadUsersByPage(state.currentPage + 1);
}

const loadPreviousPage = async() => {
    throw new Error('Not implemened yet');
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
    getUsers: () => [...state.users],
    getCurrentPage: () => state.currentPage,
}


