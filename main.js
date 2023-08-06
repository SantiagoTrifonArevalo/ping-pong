const body = document.querySelector("body");
const form = document.createElement("form");

const btnPlusOne = document.createElement("button");
btnPlusOne.textContent =" +1 Player 1";
// btnPlusOne.style.backgroundColor = "blue";
const btnPlusTwo = document.createElement("button");
btnPlusTwo.textContent =" +1 Player 2";
// btnPlusTwo.style.backgroundColor = "green";
const btnReset = document.createElement("button");
btnReset.textContent = "Reset";
// btnReset.style.backgroundColor = "red";
const counterDisplayOne = document.createElement("h1");
const counterDisplayTwo = document.createElement("h1");
const p = document.createElement("p");
p.textContent = "to";
const p2 = document.createElement("p");
p2.textContent = "Max points:";

body.appendChild(counterDisplayOne);
body.appendChild(p);
body.appendChild(counterDisplayTwo);
body.appendChild(p2);
body.appendChild(form);
body.appendChild(btnPlusOne);
body.appendChild(btnPlusTwo);
body.appendChild(btnReset);

counterDisplayOne.innerText = 0;

counterDisplayTwo.innerText = 0;

let options = [
  { value: 3, text: "3" },
  { value: 5, text: "5" },
  { value: 7, text: "7" },
  { value: 10, text: "10" },
  { value: 15, text: "15" },
];

function createSelect(optionsList) {
  let select = document.createElement("select");

  for (let i = 0; i < optionsList.length; i++) {
    const element = optionsList[i];
    let option = document.createElement("option");
    option.setAttribute("value", element.value);
    option.innerText = element.text;
    select.appendChild(option);
  }

  return select;
}

const select = createSelect(options);
form.appendChild(select);

let counterOne = 0;
let counterTwo = 0;

btnPlusOne.addEventListener("click", () => {
  if (counterOne < selectValue) {
    counterOne++;
    counterDisplayOne.innerText = counterOne;
  }
});

btnPlusTwo.addEventListener("click", () => {
  if (counterTwo < selectValue) {
    counterTwo++;
    counterDisplayTwo.innerText = counterTwo;
  }
});

btnReset.addEventListener("click", () => {
  counterDisplayOne.innerText = 0;
  counterDisplayTwo.innerText = 0;
  counterOne = 0;
  counterTwo = 0;
});

let selectValue = 3;
select.addEventListener("change", () => {
  selectValue = document.querySelector("select").value;
});


body.style=`background-image: url('https://royaltennisclub.com/wp-content/uploads/2018/06/mainpic_pingpong.jpg');background-repeat: no-repeat;background-size: contain; height:100vh;`

document.getElementsByTagName("button")[0].style.backgroundColor="blue"
document.getElementsByTagName("button")[0].style.height = "60px"
document.getElementsByTagName("button")[0].style.width = "180px"

document.getElementsByTagName("button")[1].style.backgroundColor="green"
document.getElementsByTagName("button")[1].style.height = "60px"
document.getElementsByTagName("button")[1].style.width = "180px"

document.getElementsByTagName("button")[2].style.backgroundColor="red"
document.getElementsByTagName("button")[2].style.height = "60px"
document.getElementsByTagName("button")[2].style.width = "180px"


document.getElementsByTagName(createSelect)