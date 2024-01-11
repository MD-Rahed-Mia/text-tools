//replace text here

let replaceBtn = document.querySelector("#replaceBtn");
let text = document.querySelector("#text");
let searchText = document.querySelector("#searchText");
let replaceTextValue = document.querySelector("#replaceText");

let activeStatus = false;
function checkThis() {
  document.querySelector(".toggle").classList.toggle("active");
  activeStatus = !activeStatus;
}

const replaceText = () => {
  const textValue = text.value;
  const searchValue = searchText.value;
  const replaceValue = replaceTextValue.value;

  if (activeStatus) {
    const exp = new RegExp(searchValue, "gi");
    text.value = textValue.replaceAll(exp, replaceValue);
  }else if(!activeStatus){
    const exp = new RegExp(searchValue, "g");
    text.value = textValue.replaceAll(exp, replaceValue);
  }
};

replaceBtn.addEventListener("click", replaceText);
