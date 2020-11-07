const lostLink = document.querySelector(".details-list-lost");
const lostPopup = document.querySelector(".modallost");
const lostClose = document.querySelector(".modallost-close");
const lostAction = document.querySelector(".form-action")
const lostForm = document.querySelector(".name-form");
const lostEmail = document.querySelector(".email-form");
const mapOpen = document.querySelector(".modalmapopen");
const mapModal = document.querySelector(".modalmap");
const mapClose = document.querySelector(".modalmap-close");
const bayOpen = document.querySelector(".buuton-bay");
const bayModal = document.querySelector(".modalbay");
const bayClose = document.querySelector(".modalbay-close");

lostLink.addEventListener("click", function (evt) { 
  evt.preventDefault();
  lostPopup.classList.add("modallost-show");
  lostForm.focus();
});

lostClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  lostPopup.classList.remove("modallost-show");
  lostPopup.classList.remove("modallost-error");
});

lostAction.addEventListener("submit", function (evt) {
  if (!lostForm.value || !lostEmail.value) {
    evt.preventDefault(); 
    lostPopup.classList.remove("modallost-error");
    lostPopup.offsetWidth = lostPopup.offsetWidth;
    lostPopup.classList.add("modallost-error");
  } else {
    localStorage.setItem("login", lostForm.value);
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (lostPopup.classList.contains("modallost-show")) {
      evt.preventDefault();
      lostPopup.classList.remove("modallost-show");
      lostPopup.classList.remove("modallost-error");
    }
  }
});

mapOpen.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapModal.classList.add("modalmap-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapModal.classList.remove("modalmap-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapModal.classList.contains("modalmap-show")) {
      evt.preventDefault();
      mapModal.classList.remove("modalmap-show");
    }
  }
});

bayOpen.addEventListener("onclick", function (evt) {
  evt.preventDefault();
  bayModal.classList.add("modalbay-show");
});

