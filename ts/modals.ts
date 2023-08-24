function openModal(id_name:string) {
  document.getElementById(id_name)?.setAttribute("style", "display: block;");
}

function closeAllModals() {
  // This just sets display to none for anything with class="modal"
  const modals = document.getElementsByClassName("modal");
  for (let i = 0; i < modals.length; i++) {
    modals[i].setAttribute("style", "display: none;");
  }
}