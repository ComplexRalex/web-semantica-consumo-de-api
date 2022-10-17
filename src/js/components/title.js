const createTitle = (title) => {
    const header = document.createElement('h1');
    header.innerText = title ?? 'Título';
    return header;
}

export {
    createTitle,
}