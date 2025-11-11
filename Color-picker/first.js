let page = document.querySelector(".main-page");
let btn1 = document.querySelector(".btn-1");
let btn2 = document.querySelector(".btn-2");
let msg = document.querySelector(".pera");
let btns= document.querySelectorAll(".btn");
let msgBox = document.querySelector(".msg-box");

let hax = "0123456789abcdef";
let color1 = "#000";
let color2 = "#fff";

btn1.addEventListener("click",() => {
    handel1();
})

btn2.addEventListener("click",() => {
    handel2();
})

msgBox.addEventListener("click", () => {
    copyToClipboard();
})

const handelValue = () => {
    let color = "#";
    for(let i = 0; i < 6; i++){
     color = color + hax[Math.floor(Math.random() * 16)];
    }
    return color;
}

const handel1 = () => {
    color1 = handelValue(); 
    btn1.innerText = color1;
    page.style.backgroundImage = `linear-gradient(to right top,${color1} , ${color2})`;
    msg.innerHTML = `background-image : linear-gradient(to right top, ${color1}, ${color2});`;
}

const handel2 = () => {
    color2 = handelValue(); 
    btn2.innerText = color2;
    page.style.backgroundImage = `linear-gradient(to right top,${color1} , ${color2})`;
    msg.innerHTML = `background-image : linear-gradient(to right top, ${color1}, ${color2});`;
}

const copyToClipboard = () => {
    navigator.clipboard.writeText(msgBox.innerText);
    alert("copied text = " + msgBox.innerText);
}
