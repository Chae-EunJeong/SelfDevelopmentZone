//1. String concatenation
console.log('hello ' + 'world');
console.log('23' + 1);
console.log(23 + 1);
console.log(`string literals: 1 + 2 = ${1 + 2}`);
console.log(`<a>${123}</a>`)


//2. numeric operators
console.log(1 + 2);
console.log(1 - 2);
console.log(1 * 2);
console.log(1 / 2);
console.log(1 % 2);
console.log(1 ** 2);

//3. Increment and decrement operators
let counter = 2;
console.log(`Before using preIncrement, counter: ${counter}`)
const preIncrement = ++counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`)

const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`)

//4. Assignment operators
let x = 3;
let y = 6;
x += y;
x -= y;
x *= y;
x /= y;

//5. Comparison operators
console.log(10 > 2);    //greater than
console.log(10 >= 2);   //greater than or equal
console.log(10 < 2);    //less than
console.log(10 <= 2);   //less than or equal

//6. Logical operators: ||(or), &&(and), !(not)
const value1 = true;
const value2 = 4 < 2;
console.log(`value1: ${value1}, value2: ${value2}`);

// ||(or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`);

// &&(and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);

function check() {
    for(let i = 0; i < 10; i++) {
        //wasting time
        console.log('-');
    }
    return true;
}

// !(not)
console.log(`not true: ${!true}`);


//often used to compress long if-statement
//nullableObject && nullableObject.something
//앞에게 널이 아닐때만 something을 받아와서 검사함. 
/* 널체크용
if(nullableObject != null) {
    nullableObject.something;
}
*/

//7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

//=== strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

//object equality by reference
const ellie1 = { name: 'alice' };
const ellie2 = { name: 'alice' };
const ellie3 = ellie1;

console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);

//8. Conditional operators: if
//if, else if, else
const name = 'alice';
if (name === 'alice') {
    console.log(`Hello, ${name}`);
} else if(name === 'coder') {
    console.log('You are amazing coder');
} else {
    console.log('unknown');
}

// 9. Ternary operator: ?
// condition ? true : false;
console.log(name === 'alice' ? 'yes': 'no');

switch(name) {
    case 'alice':
        console.log('name is alice');
        break;
    case 'bob':
    case 'cat':
        console.log('hello bob and cat');
        break;
    default:
        console.log('none');
        break;
}
// 10. Switch statement
//use for multiple if checks
//use for enum-like value check
//use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}

//11. Loops
//while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while(i > 0) {
    console.log(`while: ${i}`);
    i--;
}

//do while loop, body code is executed first, 
// then check the condition.
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);

//for loop, for(begin; condition; step)
for(let i = 3; i > 0; i--) {
    console.log(`inline variable for: ${i}`);
}

//nested loops
for(let i = 0; i < 10; i++) {
    for(let j = 0; j < 10; j++) {
        console.log(`i: ${i}. j: ${j}`);
    }
}

//break, continue
//Q1. iterate from 0 to 10 and print only even numbers(use continue)
for(let i = 0; i <= 10; i++) {
    if(i % 2 !== 0) {
        continue;
    }
    console.log(`even i: ${i}`)
}

//Q2. iterate from 0 to 10 and print numbers until reaching 8(use break)
for(let i = 0; i <= 10; i++) {
    if(i > 8) {
        break;
    }
    console.log(`until 8: ${i}`);
}