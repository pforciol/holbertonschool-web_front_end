function divideBy(firstNumber) {
    return function (secondNumber) {
        return secondNumber / firstNumber;
    };
}

function addBy(firstNumber) {
    return function (secondNumber) {
        return secondNumber + firstNumber;
    };
}

let addby100 = addBy(100);
let addby1000 = addBy(1000);
let divideby10 = divideBy(10);
let divideby100 = divideBy(100);
