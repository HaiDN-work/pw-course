const height = 170; //don vi chieu cao: cm
let weight = (height % 100) * 9 / 10;
let maximumWeight = (height % 100);
let minimumWeight = (height % 100) * 8 / 10;

console.log('Cân nặng lý tưởng: ' + weight +  ', ' + 'cân nặng tối đa: ' + maximumWeight + ', ' + 'cân nặng tối thiểu: ' + minimumWeight);