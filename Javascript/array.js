'use strict';

// 비슷한 종류의 데이터들을 묶어서 한데 보관하는 개념이 '자료구조'
// object와 자료구조의 차이점? 
// - object : 서로 연관된 특징과 행동들을 묶음. 변수와 메서드.
// - 자료구조 : 비슷한 타입의 object들을 묶음. 동일한 타입의 object(데이터)만 담을 수 있다.
// 배열은 인덱스가 포인트! 인덱스를 사용해 삽입, 삭제가 편리함

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
// 배열의 마지막 인덱스에 접근할 때는 length -1 을 이용한다.
console.log(fruits[fruits.length - 1]); 

console.clear();
// 3. Looping over an array
// print all fruits
// a. for
for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
    console.log(fruit);
}

console.clear();
// c. forEach (ctrl눌러서 함수 정의된 곳 읽어보기)
fruits.forEach((fruit, index) => console.log(fruit))

// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push('🍓', '🍇');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift('🍓', '🍇');
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// pop, push는 배열의 맨 뒤의 빈공간에 데이터를 삽입 삭제 하는데, 
// 기존의 데이터는 움직이지 않고 인덱스만 사용해서 빠름.
// shift, unshift는 배열에 있는 데이터들을 뒤에부터 하나씩 옮겨서 맨 앞에 넣는 것임.
// 빼는것도 앞에거를 빼고, 1번째거부터 한칸씩 앞으로 움직이기 때문에 훨씬 느리다.
// 배열의 길이가 길어질수록 더 느려질 것임
// 즉, shift, unshift 사용보다는 pop, push 이용을 하는 게 굿굿

// splice: remove an item by index position
fruits.push('🍓', '🍇', '🥑');
console.log(fruits);
fruits.splice(1,2);         // 지울 개수를 지정 안하면 끝까지 다 지워버림
console.log(fruits);
fruits.splice(0, 1, '🍉', '🍅');
// 원하는 곳에 그냥 데이터 삽입만 하기 : fruits.splice(0, 0, '🍉', '🍅');
console.log(fruits);

// combine two arrays
const fruits2 = ['🥥', '🍑'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// indexOf: find the index
console.log(fruits);
console.log(fruits.indexOf('🍉'));
console.log(fruits.indexOf('🍇'));
console.log(fruits.indexOf('🥥'));

// includes
console.log(fruits.includes('🍅'));
console.log(fruits.includes('🥥'));

// lastIndexOf
console.log(fruits);
fruits.push('🥑');
console.log(fruits);
console.log(fruits.indexOf('🥑'));
console.log(fruits.lastIndexOf('🥑'));
