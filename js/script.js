const lostLink = document.querySelector(".details-list-lost");
const lostPopup = document.querySelector(".modalLost");
const lostClose = document.querySelector(".modalLost-close");
const lostAction = document.querySelector(".form-action")
const lostForm = document.querySelector(".name-form");
const lostEmail =document.querySelector(".email-form");

lostLink.addEventListener("click", function (evt) { 
  evt.preventDefault();
  lostPopup.classList.add("modalLost-show");
  /*lostForm.focus();*/
});

lostClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  lostPopup.classList.remove("modalLost-show");
});

lostAction.addEventListener("submit", function (evt) {
  if (!lostForm.value || !lostEmail.value) {
    evt.preventDefault(); 
  } else {
    localStorage.setItem("login", lostForm.value);
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (lostPopup.classList.contains("modalLost-show")) {
      evt.preventDefault();
      lostPopup.classList.remove("modalLost-show");
    }
  }
});