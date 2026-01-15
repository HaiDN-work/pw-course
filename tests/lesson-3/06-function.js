//Bai 1
function multiply (a, b) {
    console.log(a * b);
}
multiply(2, 6);
multiply(-2, 5);

//Bai 2
function findMin (a, b, c) {
    if (a <= b && a <= c) {
         return a;
    } else if (b <= a && b <= c) {
        return b;
    } else {
        return c;
    }
}
console.log(findMin(2, 4, 6));


//Bai 3
const listStudents = [
  { name: "Hai", score: 10 },
  { name: "Huong", score: 9 },
  { name: "Linh", score: 8 },
  { name: "Tu", score: 7 },
  { name: "Ngoc", score: 9 },
  { name: "Hieu", score: 7 },
  { name: "Trang", score: 8 }
];

const threshold = 8;
function getTopStudents (students, threshold) {
    let newListStudents = [];
    for (let i = 0; i < students.length; i++) {          //length: lay do dai cua string haoc array
        if (students[i].score >= threshold) {
            newListStudents.push(students[i].name);
        }
    }
    return newListStudents;
}

console.log(getTopStudents(listStudents, threshold));


//Bai 4
function calculateInterest (principal, rate, years) {
    return total = principal + (principal * rate * years) / 100;
}

console.log(calculateInterest(100000, 5, 10));