let display = document.querySelector('#display')
let button = document.querySelector('.buttons')

function todisplay(event) {
    if (event.target.tagName === "BUTTON") {

        let content = event.target.textContent;

        if (content === "AC") {
            display.textContent = "";
        }
        else if (content === "DEL") {
            display.textContent = display.textContent.slice(0, display.textContent.length - 1)
        }

        else if (content === "=") {

            let error = isValid(display.textContent);

            if (error) {
                display.textContent = error;
                return;
            }

            // let result = evaluate(display.textContent);
            // display.textContent = result;

        } else {
            display.textContent += content;
        }
    }


}

button.addEventListener("click", todisplay)

// function evaluate(expression) {
// }

function isValid(expression) {
    if (/^[+*/%!]/.test(expression)) {
        return "Cannot start with operator";
    }
    if (expression === "") {
        return "Empty expression";
    }

    if (/[+\-*/.]$/.test(expression)) {
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
