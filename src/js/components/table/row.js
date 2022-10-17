import { get, getByID } from "../../requests";
import { openDeleteModal } from "../modals/delete";
import { openEditModal } from "../modals/edit";

const createRow = ({ id, nombre, apellido, telefono }) => {
    const row = document.createElement('tr');
    row.dataset['id'] = id;
    row.innerHTML = `
        <td data-field="id">${id}</td>
        <td data-field="nombre">${nombre}</td>
        <td data-field="apellido">${apellido}</td>
        <td data-field="telefono">${telefono}</td>
        <td data-field="opciones" style="display: flex; justify-content: flex-end">
            <button class="waves-effect waves-light btn" data-operation="edit">
                <i class="material-icons left">edit</i> Modificar
            </button>
            <button class="waves-effect waves-light btn" style="margin-left: 1rem" data-operation="delete">
                <i class="material-icons left">delete</i> Eliminar
            </button>
        </td>
    `;

    return row;
}

const onClickRow = async (event) => {
    const element = event.target;
    const row = element.parentElement.parentElement;
    const id = row.dataset['id'];

    if (row.localName !== 'tr') return;

    const user = await getByID(id);
    if (user === undefined) throw Error('No se ha encontrado al usuario.');

    if (element.localName.includes("button")) {
        if (element.dataset['operation'] === 'edit') {
            onClickEdit(event, user);
        } else if (element.dataset['operation'] === 'delete') {
            onClickDelete(event, user);
        }
    }
}

const onClickEdit = async (event, { id, nombre, apellido, telefono }) => {
    openEditModal({ id, nombre, apellido, telefono });
}

const onClickDelete = async (event, { id, nombre }) => {
    openDeleteModal({ id, nombre });
}

export {
    createRow,
    onClickRow,
};