const display = document.getElementById("display");
const userInput = document.getElementById("user-input");
const btnAdd = document.getElementById("btn-add");
const btnNew = document.getElementById('btn-new');
const btnClear = document.getElementById('btn-clear');

let colors = ["red", "blue", "yellow", "orange", "purple"];

// getElementById
// getElementsByClass
let getAllByClass = document.getElementsByClassName("profession");


// getElementsByTagName
let getAllParas = document.getElementsByTagName("p");

// getElementsByName
const map1 = new Map();

map1.set("Cheese", 3);


// Key Value Pairs

btnAdd.addEventListener('click', e => {
    let input = userInput.value;
    for(let i = 0; i < getAllParas.length; i++) {
        getAllParas[i].style.color = colors[i % colors.length];
    }
})

btnNew.addEventListener('click', e => {
    let input = userInput.value;
    DisplayNewLine(input)
})

btnClear.addEventListener('click', e => {
    DisplayClear();
})


// Helper Methods

function DisplayClear() {
    display.innerText = "";
}

function DisplayAppend(content) {
    display.innerText += content;
}

function DisplayNewLine(content) {
    display.innerText += content + "\n";
}