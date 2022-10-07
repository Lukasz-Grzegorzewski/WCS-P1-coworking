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
      scrollTop > 51 ? navBottom.classList.add('active') : navBottom.classList.remove('active');

    });
  });


fetch("../pages/ratingContainer.html")
  .then(response => response.text())
  .then(data => document.querySelector(".rating-container-wrapper").innerHTML = data)
  .then(() => {

    const starsGiven = document.querySelectorAll('.star-input');

    const comments = document.querySelector('.comments');
    const comment = document.querySelector('.comment');
    const timeDate = document.querySelector('.timeDate');
    const paragraph = document.querySelector('.paragraph');
    const textareaInput = document.getElementById('textarea-input');
    const buttonFeedback = document.getElementById('button-feedback');
    const starsFeedback = document.querySelector('.stars');

    console.log(timeDate.innerText, paragraph.innerText, textareaInput.value);

    buttonFeedback.addEventListener('click', () => {

      const newComment = document.createElement('li');
      const commentTime = document.createElement('div');
      const commentParagr = document.createElement('p');

      newComment.classList.add('comment');
      commentTime.classList.add('timeDate');
      commentParagr.classList.add('paragraph');


      const date = new Date();
      commentTime.innerText = `${date.toLocaleDateString()} \n${date.toLocaleTimeString()} `;
      commentParagr.innerText = textareaInput.value;
      textareaInput.value = '';

      comments.appendChild(newComment);
      newComment.appendChild(commentTime);
      newComment.appendChild(commentParagr);
      //---------------------------- Adding tars to comment -----------------------------------
      for (let i = starsGiven.length - 1; i >= 0; i--) {
        if (starsGiven[i].checked) {
          const starsComment = document.createElement('div');
          starsComment.classList.add('stars');

          switch (i) {
            case 0:
              starsComment.innerText = `😍 ⭐⭐⭐⭐⭐`;
              break;

            case 1:
              starsComment.innerText = `😁 ⭐⭐⭐⭐`;
              break;

            case 2:
              starsComment.innerText = `☺️ ⭐⭐⭐`;
              break;

            case 3:
              starsComment.innerText = `🥱 ⭐⭐`;
              break;

            case 4:
              starsComment.innerText = `😡 ⭐`;
              break;

            default:
              console.log('ERROR adind star to comment');
              
              break;
          }

          newComment.appendChild(starsComment);

        }
      }

    });

  });
