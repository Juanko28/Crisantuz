document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        fetch("/componentes/header.html")
            .then(response => response.text())
            .then(data => document.getElementById("header").innerHTML = data)
            .catch(error => console.error("Error cargando el header:", error));

        fetch("/componentes/footer.html")
            .then(response => response.text())
            .then(data => document.getElementById("footer").innerHTML = data)
            .catch(error => console.error("Error cargando el footer:", error));
    }, 100);
});