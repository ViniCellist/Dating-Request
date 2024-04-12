const btnYes = document.querySelector('#yesButton');
const btnNo = document.querySelector('#noButton');

btnNo.addEventListener('click', moveNoButton);
btnYes.addEventListener('click', moveYesButton);

function moveNoButton() {
    let noButton = document.getElementById("noButton");
    let x = Math.floor(Math.random() * (window.innerWidth - 100));
    let y = Math.floor(Math.random() * (window.innerHeight - 50));

    noButton.style.left = x + "px";
    noButton.style.top = y + "px";
}

function moveYesButton() {
    window.location.href = "./next.html";
}