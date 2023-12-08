function initialize() {

    const header_menu_icon_open = document.getElementById("icon-open");
    header_menu_icon_open.addEventListener("click", showSideMenu);
    const header_menu_icon_close = document.getElementById("icon-close");
    header_menu_icon_close.addEventListener("click", closeSideMenu);

}

function showSideMenu() {

    const side_menu = document.getElementById("side-menu");
    side_menu.classList.add("side-menu-open");
    side_menu.classList.remove("side-menu-close");

}

function closeSideMenu() {

    const side_menu = document.getElementById("side-menu");
    side_menu.classList.add("side-menu-close");
    side_menu.classList.remove("side-menu-open");

}

initialize();