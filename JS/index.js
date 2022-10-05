fetch("../pages/header.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("header").innerHTML = data;
  })
  .then(() => {
    //-------------------BURGER CLICK-------------------
    const menuBurger = document.querySelector(".menu-burger");
    const navLinks = document.querySelector(".nav-links")

    menuBurger.addEventListener("click", () => {
      navLinks.classList.toggle('menu-burger')
    })

    //----------CARD EFFECT LISTANER -------------------

    const cardDiv = document.querySelectorAll('.card');
    window.addEventListener('scroll', () => {
      const { scrollTop, clientHeight } = document.documentElement;
      
      for (let i = 0; i < cardDiv.length; i++) {

        if (scrollTop > (scrollTop + cardDiv[i].getBoundingClientRect().top).toFixed() - clientHeight * 0.7) {
          cardDiv[i].classList.add('card-effect');
        } else {
          cardDiv[i].classList.remove('card-effect');
        }
      }
    });

  });

fetch("../pages/footer.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("footer").innerHTML = data;
  });

