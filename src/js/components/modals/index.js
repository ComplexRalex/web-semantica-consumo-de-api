import { setAddListener } from "./add";
import { setDeleteListener } from "./delete";
import { setEditListener } from "./edit";

const initModals = () => {
    const elems = document.querySelectorAll('.modal');
    M.Modal.init(elems);

    addModalListeners();
}

const addModalListeners = () => {
    setAddListener();
    setEditListener();
    setDeleteListener();
}

export {
    initModals,
}