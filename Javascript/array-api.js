// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    // join() : 구분자를 넣어 원하는 방식으로 문자열로 변환함
    console.log(fruits.join(" "));
}

// Q2. make an array out of a string
{
    const fruits = '🍇, 🍓, 🍌, 🥑';
    // string의 API : split() 
    // * limit은 optional
    console.log(fruits.split(',', 2));
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    // reverse는 배열 자체를 역순으로 변환(리턴)시킨다.
    console.log(array.reverse());
}

// Q4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    // splice는 배열 자체에서 데이터를 삭제함. (그 배열이 변함)
    // slice는 배열의 특정한 부분을 리턴함
    console.log(array.slice(2));
}

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 25, true, 88),
];

// Q5. find a student with the score 90
{
    // const result = students.find((student) => student.score === 90);
    const result = students.find(function(student, index) {
        return student.score === 90;
    });
    console.log(result);
}

// Q6. make an array of enrolled students
{
    const result = students.filter((student) => student.enrolled);
    console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    const result = students.map   
}