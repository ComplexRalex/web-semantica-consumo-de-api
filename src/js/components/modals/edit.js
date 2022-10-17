import { put } from "../../requests";
import { loadEntries } from "../table/table";

const createEditModal = () => {
    const modal = document.createElement('div');
    modal.id = 'edit-modal';
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <h4>Modificar usuario</h4>

            <div style="margin-top: 2rem;">
                <div class="input-field">
                    <input id="edit-id" placeholder="ID del usuario" disabled class="disabled" type="text">
                    <label for="edit-id">ID</label>
                </div>
                
                <div class="input-field">
                    <input id="edit-name" placeholder="Nombre del usuario" type="text">
                    <label for="edit-name">Nombre</label>
                </div>
                
                <div class="input-field">
                    <input id="edit-lastname" placeholder="Apellido del usuario" type="text">
                    <label for="edit-lastname">Apellido</label>
                </div>
                
                <div class="input-field">
                    <input id="edit-phone" placeholder="Teléfono del usuario" type="text">
                    <label for="edit-phone">Telefono</label>
                </div>
            </div>
        </div>
        <div class="modal-footer">
            <button class="modal-close waves-effect waves-light btn">Cancelar</button>
            <button id="edit-button" class="modal-close waves-effect waves-light btn">Aceptar</button>
        </div>
    `;

    return modal;
}

const openEditModal = ({ id, nombre, apellido, telefono }) => {
    const modal = document.getElementById('edit-modal');
    const editModal = M.Modal.getInstance(modal);

    document.getElementById('edit-id').value = id;
    document.getElementById('edit-name').value = nombre;
    document.getElementById('edit-lastname').value = apellido;
    document.getElementById('edit-phone').value = telefono;

    editModal.open();
}

const getDataFromEditModal = () => {
    const user = {};
    user['id'] = document.getElementById('edit-id').value;
    user['nombre'] = document.getElementById('edit-name').value;
    user['apellido'] = document.getElementById('edit-lastname').value;
    user['telefono'] = document.getElementById('edit-phone').value;
    
    return user;
}

const setEditListener = () => {
    const editButton = document.getElementById('edit-button');
    editButton.addEventListener('click', async (event) => {
        const user = getDataFromEditModal();
        await put(user['id'], user);
        loadEntries();
    });
}

export {
    createEditModal,
    openEditModal,
    getDataFromEditModal,
    setEditListener,
}