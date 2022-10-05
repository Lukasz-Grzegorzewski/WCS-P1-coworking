fetch("../pages/header.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector("header").innerHTML = data;
    })
    .then(() => {
        const menuBurger = document.querySelector(".menu-burger");
        const navLinks = document.querySelector(".nav-links")

        menuBurger.addEventListener("click", () => {
            navLinks.classList.toggle('menu-burger')
        })
    });

fetch("../pages/footer.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector("footer").innerHTML = data;
    });

const form = document.querySelector("#form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");

form.onsubmit = function (event) {
    event.preventDefault();
    console.log(`Salut ${name.value} merci pour ton message nous te recontacterons sur ${email.value} dès que nos equipes l'auront traité !`);
};
