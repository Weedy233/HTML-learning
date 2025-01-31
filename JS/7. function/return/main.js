const input = document.querySelector('.numberInput');
const para = document.querySelector('p');

function squared(num) {
    return num * num;
}

function cubed(num) {
    return num * num * num;
}

function facted(num) {
    let x = num;
    while (x > 1) {
        x--;
        num *= x;
    }
    return num;
}

input.onchange = function () {
    var num = input.value;
    if (isNaN(num)) {
        para.textContent = "You need to enter a number!";
    } else {
        console.log("Hello.")
        para.innerHTML =
            num + " squared is " + squared(num) + ".<br>" +
            num + " cubed is " + cubed(num) + ".<br>" +
            num + " factorial is " + facted(num) + ".<br>";
    }
};
