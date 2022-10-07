fetch("../pages/header.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("header").innerHTML = data;
  })
  .then(() => {
    const menuBurger = document.querySelector(".menu-burger");
    const navLinks = document.querySelector(".nav-links");

    menuBurger.addEventListener("click", () => {
      navLinks.classList.toggle('menu-burger')
    });
  });

fetch("../pages/footer.html")
  .then(response => response.text())
  .then(data => document.querySelector("footer").innerHTML = data);


const popup = document.getElementById("popupForm");
const form = document.querySelector(".form");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const namePopup = document.querySelector("#namePopup");
const emailPopup = document.querySelector("#emailPopup");

function openForm(e) {
  e.preventDefault();

  console.log(nameInput.value);

  namePopup.innerHTML = `${nameInput.value} <br> ${emailInput.value} <br>`;

  nameInput.value = '';
  emailInput.value = '';
  messageInput.value = '';

  popup.style.display = "block";
  form.style.opacity = "40%";

}

function closeForm() {
  popup.style.display = "none";
  form.style.opacity = "initial";
}


fetch("../pages/navBottom.html")
  .then(response => response.text())
  .then(data => document.querySelector(".nav-bottom").innerHTML = data)
  .then(() => {

    window.addEventListener('scroll', () => {
      const { scrollTop, clientHeight } = document.documentElement;
      const navBottom = document.querySelector('.nav-bottom');
      console.log(scrollTop);
      scrollTop > 51 ? navBottom.classList.add('active') : navBottom.classList.remove('active');

    });
  });


  fetch("../pages/ratingContainer.html")
  .then(response => response.text())
  .then(data => document.querySelector(".rating-container-wrapper").innerHTML = data);