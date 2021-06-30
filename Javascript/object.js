// reference 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value };

// 1. Literals and properties
// object 생성 방법
const obj1 = {};    // 'object literal' syntax
const obj2 = new Object();  // 'object constructor' syntax

// primitive type 사용시 문제점 - 데이터 관리 번거로움
// const name = 'alice';
// const age = 20;
// print(name, age)
// function print(name, age) {
//     console.log(name);
//     console.log(age);
// }

// Object로 데이터를 간편하게 관리
function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const channy = { name: 'channy', age: 25};
print(channy);

// with JavaScript magic (dynamically typed language)
// can add properties later
channy.hasJob = true;
console.log(channy.hasJob);

// can delete properties later
delete channy.hasJob;
console.log(channy.hasJob); 

// 2. Computed properties
// key should be always string
console.log(channy.name);
console.log(channy['name']);
channy['hasJob'] = true;
console.log(channy.hasJob);

// 언제 어떤 키를 받을 지 모를 때 예시
// object.key로 하면 undefined!! - object에 key라는 property는 들어있지 않으니까.
// computed properties 사용하여 object[key]로 작성해야함. 
function printValue(obj, key) {
    console.log(obj[key]);
}
printValue(channy, 'name');
printValue(channy, 'age') 

// 3. Property value shorthand
const person1 = { name: 'bob', age: 22 };
const person2 = { name: 'steve', age: 23 };
const person3 = { name: 'dave', age: 24 };
const person4 = makePerson('clara', 29);
console.log(person4);
function makePerson(name, age) {
    return {
        name,
        age,
    };
}

// 4. Constructor Function
function Person(name, age) {
    // 생략 : this = {};
    this.name = name;
    this.age = age;
    // 생략 : return this;
}

// 5. in operator: property existence check(key in obj)
// 해당 object 안에 key 존재 여부 확인
console.log('name' in channy);
console.log('age' in channy);
console.log('address' in channy);
console.log(channy.address);

// 6. for..in vs for..of
// for (key in obj)
console.clear();
// for..in : 모든 key들을 받아와서 처리할 때 사용
for (key in channy) {
    console.log(key);
}

// for (value of iterable)
// for..of : obj가 아니라 배열, 리스트 같이 iterable할 때 사용
const array = [1, 2, 3, 4, 5];
// for(let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// array의 모든 값들을 value에 할당
for (value of array) {
    console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'channy', age: '20' };
const user2 = user;
// user2.name = 'coder';
console.log(user);

// user의 이름까지는 안 바뀌게 하는 법?!
// old way : 수동적으로 할당
const user3 = {};
for (key in user) {         // user 안의 key를 돌아(1. name, 2. age)
    user3[key] = user[key];
}
console.clear();
console.log(user3);

// new way
const user4 = {};
Object.assign(user4, user);
// 위의 두 줄을 한줄로 : const user4 = Object.assign({}, user);
console.log(user4);

// another example
// mixed처럼 여러 object를 섞을 수 있는데, 
// 이때, 앞서 나온 객체와 뒤의 객체의 key가 겹치면, 
// 뒤에 것이 앞의 것을 덮어씌운다!
// 아래에서 fruit2, fruit1으로 바꾸면 red와 big
const fruit1 = { color: 'red'};
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);