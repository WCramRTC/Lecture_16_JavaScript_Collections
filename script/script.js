const display = document.getElementById("display");
const userInput = document.getElementById("user-input");
const btnAdd = document.getElementById("btn-add");
const btnNew = document.getElementById('btn-new');
const btnClear = document.getElementById('btn-clear');




btnAdd.addEventListener('click', e => {
    let input = userInput.value;
    DisplayAppend(input)
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