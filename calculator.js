console.log("Thank you for using my calculator!");
// Variables
var display = document.getElementById("display");
var buttons = Array.from(document.getElementsByClassName("button"));

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    console.log("Clicked");
    console.log(e);
    console.log(e.target);
    console.log(e.target.innerText);
    switch (e.target.innerText) {
      case "C":
        display.innerText = "";
        break;
      case "←":
        if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1);
        }
        break;
      case "=":
        try {
          display.innerText = eval(display.innerText);
        } catch {
          display.innerText = "ERROR: INVALID SYNTAX";
        }
        break;
      default:
        display.innerText += e.target.innerText;
    }
  });
});
