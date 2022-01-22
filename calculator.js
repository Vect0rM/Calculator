let num1 = "";
let num2 = "";
let sign = "";
let finish = false;

const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const action = ["-", "+", "X", "/"];
const sout = document.querySelector(".calc-screen p");

function clear() {
    num1 = "";
    num2 = "";
    sign = "";
    finish = false;
    sout.textContent = "0";
}

document.querySelector(".ac").onclick = clear();

document.querySelector(".buttons").onclick = (event) => {
    if (!event.target.classList.contains("btn")) {
        return;
    }
    if (event.target.classList.contains("ac")) {
        clear();
    }
    sout.textContent = "";
    const key = event.target.textContent;


    if (digit.includes(key)) {
        if (num2 === "" && sign === "") {
            num1 += key;
            sout.textContent = num1;
        }
        else if (num1 !== "" && num2 !== "" && finish) {

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
                break;
            case "-":
                num1 = num1 - num2;
                break;
            case "X":
                num1 = num1 * num2;
                break;
            case "/":
                num1 = num1 / num2;
                break;
        }
        finish = true;
        sout.textContent = num1;
    }
}