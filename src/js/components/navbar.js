import img from '../../assets/img/logo.png';

const createNavbar = () => {
    const nav = document.createElement('nav');
    nav.innerHTML = `
        <div class="nav-wrapper container">
            <a href="#" class="brand-logo">
                <img class="avatar" src="${img}" />
                <span id="page-title">Alejandro Batres</span>
            </a>
        </div>
    `;

    return nav;
}

export {
    createNavbar,
}