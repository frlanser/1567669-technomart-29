const lostLink = document.querySelector(".details-list-lost");
const lostPopup = document.querySelector(".modalLost");
const lostClose = document.querySelector(".modalLost-close");
const lostAction = document.querySelector(".form-action")
const lostForm = document.querySelector(".name-form");
<<<<<<< HEAD
const lostEmail = document.querySelector(".email-form");
const mapOpen = document.querySelector(".modalMapOpen");
const mapModal = document.querySelector(".modalMap");
const mapClose = document.querySelector(".modalMap-close");
const bayOpen = document.querySelector(".buuton-bay");
const bayModal = document.querySelector(".modalBay");
const bayClose = document.querySelector(".modalBay-close");
=======
const lostEmail =document.querySelector(".email-form");
const mapOpen =document.querySelector(".modalMapOpen");
const mapModal =document.querySelector(".modalMap");
const mapClose =document.querySelector(".modalMap-close");
>>>>>>> 55aefd215c4a96f6b2161eb2f7fc9e619915d867

lostLink.addEventListener("click", function (evt) { 
  evt.preventDefault();
  lostPopup.classList.add("modalLost-show");
<<<<<<< HEAD
  lostForm.focus();
=======
  /*lostForm.focus();*/
>>>>>>> 55aefd215c4a96f6b2161eb2f7fc9e619915d867
});

lostClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  lostPopup.classList.remove("modalLost-show");
<<<<<<< HEAD
  lostPopup.classList.remove("modalLost-error");
=======
>>>>>>> 55aefd215c4a96f6b2161eb2f7fc9e619915d867
});

lostAction.addEventListener("submit", function (evt) {
  if (!lostForm.value || !lostEmail.value) {
    evt.preventDefault(); 
<<<<<<< HEAD
    lostPopup.classList.remove("modalLost-error");
    lostPopup.offsetWidth = lostPopup.offsetWidth;
    lostPopup.classList.add("modalLost-error");
=======
>>>>>>> 55aefd215c4a96f6b2161eb2f7fc9e619915d867
  } else {
    localStorage.setItem("login", lostForm.value);
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (lostPopup.classList.contains("modalLost-show")) {
      evt.preventDefault();
      lostPopup.classList.remove("modalLost-show");
<<<<<<< HEAD
      lostPopup.classList.remove("modalLost-error");
=======
>>>>>>> 55aefd215c4a96f6b2161eb2f7fc9e619915d867
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
<<<<<<< HEAD
});

bayOpen.addEventListener("onclick", function (evt) {
  evt.preventDefault();
  bayModal.classList.add("modalBay-show");
});

=======
});
>>>>>>> 55aefd215c4a96f6b2161eb2f7fc9e619915d867
