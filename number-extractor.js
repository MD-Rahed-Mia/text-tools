let text = document.getElementById("text");
const extractorBtn = document.getElementById("extractorBtn");
let result = document.getElementById("result");

let textValue = text;

let filtertArr = [];

const regex = new RegExp("/[0-9]{10,11}");

const extractYourNumber = () => {
  if (text.value.length < 11) {
    alert("please enter valid text.");
  }
  const arr = text.value.split(" ");

  filtertArr = [];

  const number = arr.filter((element) => {
    if (element.match(/[0-9]{10,11}/)) {
      filtertArr.push(element);
    } else {
    }
  });
  

  result.value = filtertArr;
};

extractorBtn.addEventListener("click", extractYourNumber);
