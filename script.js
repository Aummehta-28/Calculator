let display = document.querySelector('#display')
let button = document.querySelector('.buttons')

function todisplay(event) {
    if (event.target.tagName === "BUTTON") {

        let content = event.target.textContent;

        if (content === "AC") {
            display.value = "";
        }
        else if (content === "DEL") {
            display.value = display.value.slice(0, display.value.length - 1)
        }

        else if (content === "=") {

            let error = isValid(display.value);

            if (error) {
                display.value = error;

                return;
            }

        } else {
            display.value += content;
        }
    }


}

button.addEventListener("click", todisplay)

function isValid(expression) {
    if (/^[+*/%!]/.test(expression)) {
        return "Cannot start with operator";
    }
    if (expression === "") {
        return "Empty expression";
    }

    if (/[+\-*/]$/.test(expression)) {
        return "Cannot end with operator";
    }

    if (/[+*/!]{2,}/.test(expression)) {
        return "Invalid operator sequence";
    }

    if (/\d*\.\d*\./.test(expression)) {
        return "Multiple decimals in number";
    }
    let count = 0;
    for (let ch of expression) {
        if (ch == '(') {
            count++;
        }
        if (ch == ')') {
            count--;
        }
        if (count < 0) {
            return "Invalid order of paranthesis";
        }
    }
    if (count != 0) {
        return "Unbalanced paranthesis";
    }
    return null;
}