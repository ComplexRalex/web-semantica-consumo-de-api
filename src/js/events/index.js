import { loadTable } from "..";
import { initFab } from "../components/fab";
import { initModals } from '../components/modals'
import { onClickRow } from "../components/table/row";
import { addTableListener } from "../components/table/table";

const loadEvents = () => {
    document.addEventListener('DOMContentLoaded', () => {
        addTableListener((event) => {
            try {
                onClickRow(event);
            } catch (error) {
                M.toast({ html: error });
            }
        });
        initFab();
        initModals();
        loadTable();
    });
}

export {
    loadEvents,
}