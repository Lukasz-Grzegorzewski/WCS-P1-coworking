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
  })
  .then(() => {
      
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



  });



fetch("../pages/footer.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("footer").innerHTML = data;
  });



