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


  fetch("../pages/navBottom.html")
  .then(response => response.text())
  .then(data => document.querySelector(".nav-bottom").innerHTML = data)
  .then(() => {

    window.addEventListener('scroll', () => {
      const { scrollTop, clientHeight } = document.documentElement;
      const navBottom = document.querySelector('.nav-bottom');
      scrollTop > 51 ? navBottom.classList.add('active') : navBottom.classList.remove('active');

    });
  });