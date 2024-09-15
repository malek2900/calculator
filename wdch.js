
let calculator = document.getElementById('calculator')
let displayA = document.getElementById('display_a')

calculator.addEventListener('click', e => {
    if (e.target.nodeName === "BUTTON") {
        switch (e.target.textContent) {
            case "C":
                clear();
                break;
            case "DELT":
                deleteOnvalue();
                break;
            case "=":
                evaluate();
                break;
            default:
                addToDisplayA(e.target.textContent);
        }
    }
});
function clear() {
    displayA.textContent = ""

}

function deleteOnvalue() {
    let currentContant = displayA.textContent;
    displayA.textContent = currentContant.substring(0, currentContant.length - 1)
}

function addToDisplayA(value) {
    displayA.textContent = displayA.textContent + value;

}

// function evaluate() {
//     try {
//         let result = math.evaluate(displayA.textContent);
//         displayA.textContent = result;
//     } catch (error) {
//         displayA.textContent = "error";
//     }
// }

function evaluate() {
    try {
        let result = math.evaluate(displayA.textContent);
        displayA.textContent = result; // استخدام `value` بدلاً من `textContent` للـ input
    } catch (error) {
        displayA.textContent = "حدث خطأ: " + error.message;
    }
}





