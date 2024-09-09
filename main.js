// Q1
var numbers = [1,5,3,8,2,4,6,7,9,10];
var numbers1 = numbers.sort((a, b) => a - b);
console.log(numbers1);

var numbers = [1,5,3,8,2,4,6,7,9,10];
let newnum = numbers.map(num => num * num);
console.log(newnum);


let number3 = numbers.find(num => num > 25 ) 
console.log(number3)
        
    
let number4 = numbers.every(num => num >5)
console.log(number4);

let number5 = numbers.every(num => num = 3)
console.log(number5);

let number6 = numbers.filter(num => num % 2 === 0)
console.log(number6);

let number7 = Math.floor(numbers.length / 2);
let number8 = numbers.splice (number7- 1, 2);
console.log(number8);

