let inputBox = document.querySelector('#inputBox');
let buttons = document.querySelectorAll('button');

let string = "";

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerText == "=") {
            if (inputBox.value != "0") {
                string = String(eval(string));
                inputBox.value = string;
            }
        }
        else if (e.target.innerText == "AC") {
            string = "";
            inputBox.value = string;
        }
        else if (e.target.innerText == "DEL") {
            string = string.substring(0, string.length - 1);
            inputBox.value = string;
        }
        else if (e.target.id == "opposite") {
            if (inputBox.value != "0") {
                string = String(-eval(string));
                inputBox.value = string;
            }
        }
        else {
            string += e.target.innerText;
            inputBox.value = string;
        }
    })
})