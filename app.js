let screen = document.getElementById("display");
buttons = document.querySelectorAll("button");
let screenVal = "";

for(item of buttons) {
    item.addEventListener("click", (e) => {
        buttonText = e.target.innerText;
        console.log("Button text is ", buttonText);
        if(buttonText == "x") {
            buttonText = "*";
            screenVal += buttonText;
            screen.value = screenVal;
        }
        else if(buttonText == "C") {
            screenVal = "";
            screen.value = screenVal;
        }
        else if(buttonText == "=") {
            screen.value = eval(screenVal); 
        }
        else {
            screenVal += buttonText;
            screen.value = screenVal;
        }
    })
} 