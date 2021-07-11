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
    // map : 배열안의 요소들을 콜백함수로 리턴된 것으로 변환
    // 예를 들어 곱하기 2를 하는 함수를 이용해 [1,2,3]을 [2,4,6]으로 변환하는 식
    const result = students.map((student) => student.score);
    console.log(result);   
}

// Q8. check if there is a student with the score lower than 50
{
    console.clear();
    // some() : 하나라도 조건에 만족하는 요소가 있다면 true를 반환함
    const result = students.some((student) => student.score < 50);
    console.log(result);

    // every() : 배열의 모든 요소가 조건에 만족해야 true를 반환
    // !를 붙여서 모든 학생들의 점수가 50점이 넘는 것이 아닐때 true를 출력 
    const result2 = !students.every((student) => student.score >= 50)
    console.log(result2);
}

// Q9. compute students' average score
{
    console.clear();
    // reduce() : 배열의 모든 요소들의 값을 누적할 때 사용
    // 아래 코드를 간단하게 하면  => prev
    // const result = students.reduce((prev, curr) => prev + curr.score, 0)
    const result = students.reduce((prev, curr) => {
        console.log('----------------')
        console.log(prev);
        console.log(curr);
        return prev + curr.score;    // 다음 콜백 호출때 prev로서 전달됨
    }, 0);
    console.log(result / students.length);
}

// Q10. make a string containing all the scores
// 50점 이상인 점수만 filtering해서 출력
// result should be: '45, 80, 90, 66, 88'
{
    const result = students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join(', ');
    console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    const result = students.map((student) => student.score)
    .sort((a, b) => a - b)
    .join();
    console.log(result);
}