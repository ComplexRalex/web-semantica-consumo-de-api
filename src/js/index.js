import { createFloatingAddButton } from './components/fab';
import { createAddModal } from './components/modals/add';
import { createDeleteModal } from './components/modals/delete';
import { createEditModal } from './components/modals/edit';
import { createNavbar } from './components/navbar';
import { createTable, loadEntries } from './components/table/table';
import { createText } from './components/text';
import { createTitle } from './components/title';

const createMainPage = () => {
    const navbar = createNavbar();
    document.body.appendChild(navbar);

    const container = document.createElement('div');
    container.className = 'container'

    const header = createTitle('Usuarios');
    container.appendChild(header);

    const paragraph = createText(
        'Servicio de administración de usuarios. Consumo del servicio ' +
        'web para el curso de Web Semántica.'
    );
    container.appendChild(paragraph);

    const table = createTable();
    container.appendChild(table);

    const addFab = createFloatingAddButton();
    container.appendChild(addFab);

    const addModal = createAddModal();
    container.appendChild(addModal);

    const editModal = createEditModal();
    container.appendChild(editModal);

    const deleteModal = createDeleteModal();
    container.appendChild(deleteModal);

    document.body.appendChild(container);
};

const loadTable = () => {
    loadEntries();
}

export {
    createMainPage as init,
    loadTable,
};