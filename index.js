let display = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName("button"));
/*console.log(display);
console.log(buttons);*/

buttons.map((input) => {
  input.addEventListener("click", (e) => {
    /*console.log("clicked");
    console.log(e);
    console.log(e.target);
    console.log(e.target.innerText);*/
    switch (e.target.innerText) {
      case "C":
        display.innerText = "";
        break;
      case "=":
        try {
          display.innerText = eval(display.innerText);
        } catch {
          display.innerText = "Error!";
        }
        break;
      default:
        display.innerText += e.target.innerText;
    }
  });
});
