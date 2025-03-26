// Cargar Header y Footer dinámicamente
document.addEventListener("DOMContentLoaded", function () {
    fetch("componentes/header.html")
        .then(response => response.text())
        .then(data => document.getElementById("header").innerHTML = data);

    fetch("componentes/footer.html")
        .then(response => response.text())
        .then(data => document.getElementById("footer").innerHTML = data);
});

function loadPage(event, page) {
    event.preventDefault(); // Evita la recarga de la página

    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementById("content").innerHTML = data;
            window.history.pushState({}, "", page); // Cambia la URL sin recargar
        });
}

function loadComponent(id) {
    const element = document.getElementById(id);
    const file = element.getAttribute("data-src");

    fetch(file)
        .then(response => response.text())
        .then(data => {
            element.innerHTML = data;
        })
        .catch(error => console.error("Error cargando " + file, error));
}

// Cargar header y footer automáticamente
document.addEventListener("DOMContentLoaded", () => {
    loadComponent("header");
    loadComponent("footer");
});
