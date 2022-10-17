const url = 'https://serviciosdigitalesplus.com/servicio/servicio.php';
const clave = '201836943'

const request = async (url) => {
    const response = await fetch(url);
    const json = await response.json();
    return json;
}

const get = async () => {
    const response = await request(`${url}?tipo=1&clave=${clave}`);
    return response['dato'];
}

const getByID = async (id) => {
    const user = (await get()).find(user => user.id === id);
    return user === undefined
        ? undefined
        : {
            id: user.id,
            nombre: user.nom,
            apellido: user.app,
            telefono: user.tel,
        }
}

const post = async ({ nombre, apellido, telefono }) => {
    const response = await request(`${url}?tipo=2&nom=${nombre}&app=${apellido}&tel=${telefono}&clave=${clave}`);
    return response['dato'];
}

const put = async (id, { nombre, apellido, telefono }) => {
    const response = await request(`${url}?tipo=3&id=${id}&nom=${nombre}&app=${apellido}&tel=${telefono}&clave=${clave}`);
    return response['dato'];
}

const del = async (id) => {
    const response = await request(`${url}?tipo=4&id=${id}&clave=${clave}`);
    return response['dato'];
}

export {
    get,
    getByID,
    post,
    put,
    del,
}