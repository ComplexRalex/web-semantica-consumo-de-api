import { get } from "../../requests";
import { createRow } from "./row";

const createTable = () => {
    const div = document.createElement('div');
    div.id = 'table-container';
    div.innerHTML = `
        <table class="highlight striped">
            <thead>
                <th>ID</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Teléfono</th>
                <th>Opciones</th>
            </thead>
            <tbody id="usuarios">
                <!-- Aquí deberían estar los usuarios -->
            </tbody>
        </table>
    `;

    return div;
}

const insertRow = (row) => {
    const body = document.getElementById('usuarios');
    body.appendChild(row);
}

const insertPlaceholder = () => {
    const body = document.getElementById('usuarios');

    const row = document.createElement('tr');
    row.innerHTML = '<td colspan="5">No hay elementos existentes</td>';

    body.appendChild(row);
}

const loadEntries = async () => {
    clearTableEntries();
    const elements = await get();
    if(elements.length > 0) {
        elements.forEach(element => {
            const row = createRow({
                id: element.id,
                nombre: element.nom,
                apellido: element.app,
                telefono: element.tel,
            });
            insertRow(row);
        });
    } else {
        insertPlaceholder();
    }
}

const clearTableEntries = () => {
    const body = document.getElementById('usuarios');
    body.innerHTML = '';
}

const addTableListener = (fn) => {
    const body = document.getElementById('usuarios');
    body.addEventListener('click', fn);
}

export {
    createTable,
    insertRow,
    clearTableEntries,
    addTableListener,
    loadEntries,
}