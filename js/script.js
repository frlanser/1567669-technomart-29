const lostLink = document.querySelector(".details-list-lost");
const lostPopup = document.querySelector(".modalLost");
const lostClose = document.querySelector(".modalLost-close");
const lostAction = document.querySelector(".form-action")
const lostForm = document.querySelector(".name-form");
const lostEmail =document.querySelector(".email-form");
const mapOpen =document.querySelector(".modalMapOpen");
const mapModal =document.querySelector(".modalMap");
const mapClose =document.querySelector(".modalMap-close");

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

mapOpen.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapModal.classList.add("modalMap-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapModal.classList.remove("modalMap-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapModal.classList.contains("modalMap-show")) {
      evt.preventDefault();
      mapModal.classList.remove("modalMap-show");
    }
  }
});