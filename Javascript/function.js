//Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

//const { func } = require("prop-types");

// 1. Function declaration
// function name(param1, param2) { body ... return; }
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS

function printHello() {
    console.log('Hello');
}
printHello()

function log(message) {
    console.log(message);
}
log('Hello@')
log(1234);

// 2. Parameters
// premitive parameters : passed by value
// object parameters : passed by reference
function changeName(obj) {
    obj.name = 'coder';
}

const alice = { name: 'alice' };
changeName(alice);
console.log(alice);

// 3. Default parameters (added in ES6)
// parameter 안에 원하는 default 값 바로 지정 가능
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4. Rest parameters (added in ES6)
// array 형태로 전달됨
function printAll(...args) {
    // print example 1.
    for(let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
    // print example 2.
    for(arg of args) {
        console.log(arg);
    }
    // print example 3.
    args.forEach((arg) => console.log(arg));
}
printAll('apple', 'banana', 'carrot');

// 5. Local scope
let globalMessage = 'global message';
function printMessage() {
    let message = 'local variable';
    console.log(message);
    console.log(globalMessage);
    function printAnother() {
        console.log(message);
        let childMessage = 'hello';
    }
}
printMessage();

// 6. Return a value
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2);
console.log(result);
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user) {
    if(user.point > 10) {
        //long upgrade logic...
    }
}
// good
function upgradeUser(user) {
    if(user.point <= 10) {
        return;
    }
    //long upgrade logic...
}

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argue to other functions
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.
const print = function() {
    console.log('print');
};

print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(4,5));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if(answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}

// anonymous function
const printYes = function () {
    console.log('yes!');
};

// named function
// better debugging in debugger's stack traces
// recursions (when insert print() inside the function)
const printNo = function print() {
    console.log('no!');
};

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous
// const simplePrint = function() {
//     console.log('simplePrint');
// };

const simplePrint = () => console.log('simplePrint');
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
    // do something more
    return a * b;
};

// IIFE: Immediately Invoked Function Expression
(function hello() {
    console.log('IIFE');
})();

hello();
// quiz
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainde

// by ellie
// 정해진 데이터를 처리할 때는 if문 보다는 switch문 이용~!
function calculate(command, a, b) {
    switch (command) {
        case 'add':
            return a + b;
        case 'substract':
            return a - b;
        case 'divide':
            return a / b;
        case 'multiply':
            return a * b;
        case 'remainder':
            return a % b;
        default:
            throw Error('unknown command');
    }
}
console.log(calculate('add', 2, 3));