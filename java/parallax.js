
function initialize() {

    window.addEventListener("scroll", moveDown);

}

function moveDown() {

    const scrollPosition = window.scrollY;

    const ENTITY = document.getElementById("entity")

    ENTITY.style.bottom = scrollPosition + "px";

}

//initialize();