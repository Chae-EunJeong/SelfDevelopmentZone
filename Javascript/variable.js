'use strict';

const char = 'c';
const brendon = 'brendon';
const greeting = 'hello ' + brendon;

console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendon}!`;
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

//symbol
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);   //false

const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); //true

console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// dynamic typing : dynamically typed language
let text = 'hello'; //string
console.log(`value: ${text}, type: ${typeof text}`);
text = 10;          //number
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;     //string
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / 2;     //number(연산자이고 string 안에 있는 것도 number)
console.log(`value: ${text}, type: ${typeof text}`);