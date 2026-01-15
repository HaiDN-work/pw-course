//Bai 1
const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2021,
};
console.log(car.year);


//Bai 2
const person = {
  name: "Hai",
  address: {
    street: "Linh Nam",
    city: "Ha Noi",
    country: "Viet Nam",
  },
};
console.log(person.address.street);


// Bai 3
const student = {
  name: "Hai",
  grades: {
    math: 8,
    english: 9,
  },
};
console.log(student.grades["math"]);


//Bai 4
const settings = {
    volume: 100,
    brightness: 50
};
settings.volume = 80;
console.log(settings);


//Bai 5
const bike = {};
bike.color = "Red";
console.log(bike);


//Bai 6
const employee = {
    name: "Hai",
    age: 27
}; 
delete employee.age;
console.log(employee);


//Bai 7
const school = {
  classA: ["An", "Bình", "Châu"],
  classB: ["Đào", "Hương", "Giang"],
};
console.log(school);