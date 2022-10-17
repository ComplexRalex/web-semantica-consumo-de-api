import { post } from "../../requests";
import { loadEntries } from "../table/table";

const createAddModal = () => {
    const modal = document.createElement('div');
    modal.id = 'add-modal';
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <h4>Agregar usuario</h4>

            <div style="margin-top: 2rem;">                
                <div class="input-field">
                    <input id="add-name" placeholder="Nombre del usuario" type="text">
                    <label for="add-name">Nombre</label>
                </div>
                
                <div class="input-field">
                    <input id="add-lastname" placeholder="Apellido del usuario" type="text">
                    <label for="add-lastname">Apellido</label>
                </div>
                
                <div class="input-field">
                    <input id="add-phone" placeholder="Teléfono del usuario" type="text">
                    <label for="add-phone">Telefono</label>
                </div>
            </div>
        </div>
        <div class="modal-footer">
            <button class="modal-close waves-effect waves-light btn">Cancelar</button>
            <button id="add-button" class="modal-close waves-effect waves-light btn">Aceptar</button>
        </div>
    `;

    return modal;
}

const openAddModal = () => {
    const modal = document.getElementById('add-modal');
    const addModal = M.Modal.getInstance(modal);

    document.getElementById('add-name').value = '';
    document.getElementById('add-lastname').value = '';
    document.getElementById('add-phone').value = '';

    addModal.open();
}

const getDataFromAddModal = () => {
    const user = {};
    user['nombre'] = document.getElementById('add-name').value;
    user['apellido'] = document.getElementById('add-lastname').value;
    user['telefono'] = document.getElementById('add-phone').value;
    
    return user;
}

const setAddListener = () => {
    const addButton = document.getElementById('add-button');
    addButton.addEventListener('click', async (event) => {
        const user = getDataFromAddModal();
        await post(user);
        loadEntries();
    });
}

export {
    createAddModal,
    openAddModal,
    getDataFromAddModal,
    setAddListener,
}