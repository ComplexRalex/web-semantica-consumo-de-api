import { del } from "../../requests";
import { loadEntries } from "../table/table";

const createDeleteModal = () => {
    const modal = document.createElement('div');
    modal.id = 'delete-modal';
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <h4>Eliminar usuario</h4>

            <p>¿Quieres eliminar al usuario con los siguientes datos?</p>

            <div style="margin-top: 2rem;">
                <div class="input-field">
                    <input id="delete-id" placeholder="ID del usuario" disabled class="disabled" type="text">
                    <label for="delete-id">ID</label>
                </div>
                
                <div class="input-field">
                    <input id="delete-name" placeholder="Nombre del usuario" disabled class="disabled" type="text">
                    <label for="delete-name">Nombre</label>
                </div>
            </div>
        </div>
        <div class="modal-footer">
            <button class="modal-close waves-effect waves-light btn">Cancelar</button>
            <button id="delete-button" class="modal-close waves-effect waves-light btn">Aceptar</button>
        </div>
    `;

    return modal;
}

const openDeleteModal = ({ id, nombre }) => {
    const modal = document.getElementById('delete-modal');
    const deleteModal = M.Modal.getInstance(modal);

    document.getElementById('delete-id').value = id;
    document.getElementById('delete-name').value = nombre;

    deleteModal.open();
}

const getIDFromDeleteModal = () => {
    const user = {};
    user['id'] = document.getElementById('delete-id').value;
    
    return user;
}

const setDeleteListener = () => {
    const deleteButton = document.getElementById('delete-button');
    deleteButton.addEventListener('click', async (event) => {
        const user = getIDFromDeleteModal();
        await del(user['id']);
        loadEntries();
    });
}

export {
    createDeleteModal,
    openDeleteModal,
    getIDFromDeleteModal,
    setDeleteListener,
}