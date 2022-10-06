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
<<<<<<< HEAD
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


function openForm(e) {
    e.preventDefault();
    document.getElementById("popupForm").style.display = "block";
    document.querySelector('.form').style.opacity = "70%";
    form.reset();
};

function closeForm() {

    document.getElementById("popupForm").style.display = "none";
    document.querySelector(".form").style.opacity = "initial";
};






















/*const form = document.querySelector('form');


function openPopup(e) {
    e.preventDefault();
    document.querySelector('.popup').style.display = "block";

}

closePopup = () => {
    popup.classList.add('open-popup');
}*/




/*const btn = document.getElementById('Envoyer');
btn.addEventListener('click', () => btn.classList.add("open-popup"));*/



/*document.getElementById("contactUs").addEventListener('submit', function (e) {
    e.preventDefault();
    alert('form envoyé');
})*/



/*document.forms["contacUs"].addEventListener("submit", function (e) {

    let erreur;
    let inputs = this;

    for (var i = 0; i < inputs.length; i++) {
        console.log(inputs[i]);
        if (!inputs[i].value) {
            erreur = "Veuillez renseigner tous les champs";
            break;
        }
    }

    if (erreur) {
        e.preventDefault();
        document.getElementById("erreur").innerHTML = erreur;
        return false;
    } else {
    
           alert(`Salut ${name.value} merci pour ton message nous te recontacterons sur ${email.value} dès que nos equipes l'auront traité !`);
    }

}
* /



/*const form = document.querySelector("#form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");

form.onsubmit = function (event) {
    event.preventDefault();
    console.log(`Salut ${name.value} merci pour ton message nous te recontacterons sur ${email.value} dès que nos equipes l'auront traité !`);
};


const popup = document.getElementsByClassName(".popup"); */

=======
  });

fetch("../pages/footer.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("footer").innerHTML = data;
  });
>>>>>>> f1c42b21259092f768a261db1e5628f211570c8a
