let signinbtn = document.querySelector(".sign-in");
let signupbtn = document.querySelector(".sign-up");
let nameInput = document.querySelector(".name");
let btns = document.querySelectorAll(".btns");
let pera = document.querySelector("#pera");


signinbtn.addEventListener("click",() => {
    signinbtn.style.backgroundColor = "gray";
    pera.innerText = "Sign in";
    signupbtn.style.backgroundColor = "blue";
    nameInput.classList.add("name");
});


signupbtn.addEventListener("click",() => {
    signupbtn.style.backgroundColor = "gray";
    pera.innerText = "Sign up";
    signinbtn.style.backgroundColor = "blue";
    nameInput.classList.remove("name");
});



