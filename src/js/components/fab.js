import { openAddModal } from "./modals/add";

const createFloatingAddButton = () => {
    const fab = document.createElement('div');
    fab.className = 'fixed-action-btn';
    fab.id = 'add-fab-button';
    fab.innerHTML = `
        <a class="btn-floating btn-large waves-effect waves-light">
            <i class="large material-icons">add</i>
        </a>
    `;

    return fab;
}

const initFab = () => {
    const elems = document.querySelectorAll('.fixed-action-btn');
    M.FloatingActionButton.init(elems);

    addFabListener();
}

const addFabListener = () => {
    const addButton = document.getElementById('add-fab-button');
    addButton.addEventListener('click', () => {
        openAddModal();
    });
}

export {
    createFloatingAddButton,
    initFab,
    addFabListener,
}