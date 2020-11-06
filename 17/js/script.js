const lostLink = document.querySelector(".details-list-lost");
const lostPopup = document.querySelector(".modalLost");
const lostClose = document.querySelector(".modalLost-close");
const lostAction = document.querySelector(".form-action")
const lostForm = document.querySelector(".name-form");
const lostEmail = document.querySelector(".email-form");
const mapOpen = document.querySelector(".modalMapOpen");
const mapModal = document.querySelector(".modalMap");
const mapClose = document.querySelector(".modalMap-close");
const bayOpen = document.querySelector(".buuton-bay");
const bayModal = document.querySelector(".modalBay");
const bayClose = document.querySelector(".modalBay-close");

lostLink.addEventListener("click", function (evt) { 
  evt.preventDefault();
  lostPopup.classList.add("modalLost-show");
  lostForm.focus();
});

lostClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  lostPopup.classList.remove("modalLost-show");
  lostPopup.classList.remove("modalLost-error");
});

lostAction.addEventListener("submit", function (evt) {
  if (!lostForm.value || !lostEmail.value) {
    evt.preventDefault(); 
    lostPopup.classList.remove("modalLost-error");
    lostPopup.offsetWidth = lostPopup.offsetWidth;
    lostPopup.classList.add("modalLost-error");
  } else {
    localStorage.setItem("login", lostForm.value);
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (lostPopup.classList.contains("modalLost-show")) {
      evt.preventDefault();
      lostPopup.classList.remove("modalLost-show");
      lostPopup.classList.remove("modalLost-error");
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

bayOpen.addEventListener("onclick", function (evt) {
  evt.preventDefault();
  bayModal.classList.add("modalBay-show");
});

