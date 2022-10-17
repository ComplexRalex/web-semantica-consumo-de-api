const createText = (text) => {
    const paragraph = document.createElement('p');
    paragraph.innerText = text ?? '';
    return paragraph;
}

export {
    createText,
}