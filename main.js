const button = document.getElementById("Button")

let buttonWidth = 60;
let buttonHeight = 40;
let fontSize = 10;

button.style.width = buttonWidth + "px";
button.style.height = buttonHeight + "px";
button.style.fontSize = fontSize + "px";

button.addEventListener("click", () => {
    buttonWidth += 20;
    buttonHeight += 10;
    fontSize += 5;
    button.style.width = buttonWidth + "px";
    button.style.height = buttonHeight + "px";
    button.style.fontSize = fontSize + "px";
})