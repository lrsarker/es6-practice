//Constant var can't change
const numbers = [12, 45];
numbers[1] = 99;
numbers.push(22);
console.log(numbers);

//let var can change
let numbers1 = 99;
numbers1 = 66;
console.log(numbers1);
