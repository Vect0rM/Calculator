let num1 = "";
let num2 = "";
let sign = "";
let finish = false;

const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const action = ["-", "+", "X", "/"];
const sout = document.querySelector(".calc-screen p");

function back(key) {
    if (num2 === "") {
        num1 = Math.floor(num1 / 10);
        sout.textContent = num1;
    }
    else if (num1 !== "" && num2 !== "" && finish) {
        num2 = key;
        finish = false;
        sout.textContent = num2;
    }
    else {
        num2 = Math.floor(num2 / 10);
        sout.textContent = num2;
    }
}

function Calculator(key) {
    if (digit.includes(key)) {
        if (num2 === "" && sign === "") {
            num1 += key;
            sout.textContent = num1;
        }
        else if (num1 !== "" && num2 !== "" && finish) {
            num2 = key;
            finish = false;
            sout.textContent = num2;
        } else {
            num2 += key;
            sout.textContent = num2;
        }
        return;
    }
    if (action.includes(key)) {
        sign = key;
        sout.textContent = sign;
    }
    if (key === "=") {
        switch (sign){
            case "+":
                num1 = (+num1) + (+num2);
                num2 = "";
                break;
            case "-":
                num1 = num1 - num2;
                num2 = "";
                break;
            case "X":
                num1 = num1 * num2;
                num2 = "";
                break;
            case "/":
                if (num2 === 0) {
                    sout.textContent = "Ошибка";
                    num1 = "";
                    num2 = "";
                    sign = "";
                    return;
                }
                num1 = num1 / num2;
                num2 = "";
                break;
        }
        finish = true;
        sout.textContent = num1;
    }


    if (key === "bc") {
        back(key);
    }
}

function clear() {
    num1 = "";
    num2 = "";
    sign = "";
    finish = false;
    sout.textContent = "0";
}

function cc(e) {
    let key = e.key;
    if (key === "Escape") {
        clear();
    }
    if (key === "Backspace") {
        back();
    }
   Calculator(key);
}

document.querySelector(".ac").onclick = clear;
document.addEventListener("keypress", cc)

document.querySelector(".buttons").onclick = (event) => {
    if (!event.target.classList.contains("btn")) {
        return;
    }
    if (event.target.classList.contains("ac")) {
        clear();
    }

    sout.textContent = "";

    let key = event.target.textContent;
    Calculator(key);
}