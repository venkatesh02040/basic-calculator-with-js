function clearDisplay() {
    document.getElementById("display").value = "";
}

function del() {
 document.getElementById("display").value = document.getElementById("display").value.slice(0,-1) 
}

function appendToDisplay(value) {
    document.getElementById("display").value += value;
}



function calculateResult() {
    const display = document.getElementById("display");
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
