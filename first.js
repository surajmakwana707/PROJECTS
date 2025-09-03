let buttons = document.querySelectorAll(".button");
let btn = document.querySelector(".mode");
let title = document.querySelector(".title");
let mode = "light";
let string = "";
let display = document.querySelector(".input");


buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if(button.innerText == "=") {
            string = eval(string);
            display.value = string;

        } else if(button.innerText == "AC"){
            string = "";
            display.value = string;

        } else if(button.innerText == "CE"){
           string = display.value.slice(0,-1);
           display.value = string;
         
        }else{
            string = string + button.innerText;
            display.value = string;
           
        }
      }
    )
});    

btn.addEventListener("click", () => {
    if(mode === "light"){
        mode = "dark";
        btn.innerText = "Light mode";
        title.style.color = "white";
        document.querySelector("body").style.backgroundColor = "black";
    }else{
        mode = "light";
         btn.innerText = "Dark mode";
          title.style.color = "black";
         document.querySelector("body").style.backgroundColor = "white";
    }
});