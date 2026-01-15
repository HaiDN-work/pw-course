//Bai 1
let sum = 0;
for (i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);

//Bai 2
for (i = 2; i <= 9; i++) {
    console.log(`Bang cuu chuong ${i}`);
    for (j = 1; j <= 10; j++) {
        let result = j * i;
        console.log(`${j} * ${i} = ${result}`);
    }
    console.log("------------");
}


const doanhThu = [
    {month: 1, total: 10},
    {month: 2,total: 10},
    {month: 3, total: 30},
    {month: 1, total: 10},
    {month: 1, total: 10},
    {month: 1, total: 10},
    {month: 1, total: 10},
    {month: 1, total: 10},
    {month: 1, total: 10},
    {month: 1, total: 10},
    {month: 1, total: 10},
    {month: 1, total: 10},
];
let tong = 0;
for (i = 0; i <= 11; i++) {
    tong = tong + doanhThu[i].total;
}
console.log(tong);

// for (i = 0; i <= doanhThu.length; i++) {
//     sum = sum + doanhThu[i].total;
// }
// console.log(sum);