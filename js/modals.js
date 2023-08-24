"use strict";
function openModal(id_name) {
    var _a;
    (_a = document.getElementById(id_name)) === null || _a === void 0 ? void 0 : _a.setAttribute("style", "display: block;");
}
function closeAllModals() {
    // This just sets display to none for anything with class="modal"
    var modals = document.getElementsByClassName("modal");
    for (var i = 0; i < modals.length; i++) {
        modals[i].setAttribute("style", "display: none;");
    }
}
