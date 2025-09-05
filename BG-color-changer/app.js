let buttons = document.querySelectorAll("button");
let body = document.querySelector("body");

buttons.forEach((button) => {
    button.addEventListener("click",() => {
        if(button.innerText == "Red"){
            body.style.backgroundColor = "red";

        }else if(button.innerText == "Blue"){
            body.style.backgroundColor = "blue";

        }else if(button.innerText == "Green"){
            body.style.backgroundColor = "green";

        }else if(button.innerText == "Yellow"){
            body.style.backgroundColor = "yellow";

        }else if(button.innerText == "Pink"){
            body.style.backgroundColor = "rgb(248, 78, 180)";

        }else if(button.innerText == "White"){
            body.style.backgroundColor = "white";

        }else if(button.innerText == "Purple"){
            body.style.backgroundColor = "purple";

        }
    })
})