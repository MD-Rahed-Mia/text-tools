let toUpperCase = document.querySelector("#toUppercase");
let toLowerCase = document.querySelector("#toLowerCase");
let text = document.querySelector("#text");

function convertUppercase() {
  if (text.value !== "") {
    const textConverted = text.value.toUpperCase();
    text.value = textConverted;
  } else {
    alert("Please enter any text.");
  }
}
function convertLowercase() {
  if (text.value !== "") {
    const textConverted = text.value.toLowerCase();
    text.value = textConverted;
  } else {
    alert("Please enter any text.");
  }
}
toUpperCase.addEventListener("click", convertUppercase);
toLowerCase.addEventListener("click", convertLowercase);
