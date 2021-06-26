'use strict';
// Object-oriented programming
// class: template
// object: instance of a class
// JavaScript classes
//  - introduced in ES6
//  - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
    // constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const channy = new Person("channy", "25");
console.log(channy.name);
console.log(channy.age);
channy.speak();

// 2. Getter and setters
// 사용자가 말도 안되는 숫자로 잘못 설정해도 
// 우리가 좀 더 방어적인 자세로 만들 수 있게 해주는 역할임.
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        // if (value < 0) {
        //     throw Error('age can not be negative');
        // }
        // this._age = value;
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Steve', 'Jobs', -1);
console.log(user1.age);

// 3. Fields (public, private)
// Too soon! (나온지 얼마 안 됨. 참고용)
// private field는 # 이용
class Experiment {
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods
// Too soon! (이것도 아직 쓰기에는 무리가 있음. 참고용)
// static 변수는 object마다 할당되는 게 아니라 class 자체에 붙어있는 것임.
class Article {
    static publisher = 'Dream coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
// object를 통해 호출하면 undefined
// console.log(article1.publisher);
console.log(Article.publisher);
Article.printPublisher();

// 5. Inheritance
// a way for one class to extend another class.
class Shape { 
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    // overriding + 부모의 기능도 사용하고 싶을 때
    draw() {
        super.draw();
        console.log('🔺');
    }
    //overriding
    getArea() {
        return (this.width * this.height) / 2;
    }
    //JS의 Object 함수 overriding
    toString() {
        return `Triangle: color: ${this.color}`;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf
// 'A instanceof B' : A가 B 클래스를 사용해 생성된 instance인지 확인(true or false)
// * JS에서 생성한 모든 object, class는 JS의 Object를 상속한 것임(Object위에 마우스 커서 놓고 ctrl로 확인)
// * 당연히 Object의 함수도 overriding할 수 있음
console.log(rectangle instanceof Rectangle);    //t
console.log(triangle instanceof Rectangle);     //f
console.log(triangle instanceof Triangle);      //t
console.log(triangle instanceof Shape);         //t
console.log(triangle instanceof Object);        //t