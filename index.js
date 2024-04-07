const hw1 = ['D' , 'Da' , 'Dau' , 'Daur' , 'Daure' , 'Dauren'];

hw1.forEach((element) => console.log(element));


const hw2 = [3 , 4 , 1005];
const map = hw2.map((d) => d * 2);

console.log(map);


const hw3 = [1 , 10 , 2 , 20 , 3 , 30 , 44 , 99];
const result = hw3.filter((num) => num > 9);

console.log(result);


const hw4 = (smallnum) => smallnum < 50;

const num1 = [13, 10, 49, 39, 30, 23];

console.log(num1.every(hw4));


const nuM2 = [5 , 1 , 3 , 7 , 9 , 11];
const hw5 = (w) => w % 2 === 0;

console.log(nuM2.some(hw5));


const num3 = [1 , 2 , 3,  , 100 , 90 , 80 , 70];
const hw6 = num3.find((num) => num > 10);

console.log(hw6);


const num4 = [1, 12, 13, 31, 21 , 1];
const hw7 = (element) => element < 0;

console.log(num4.findIndex(hw7));


const num5 = [999 , 6 , 6 , 999];
const i = 0;
const hw8 = num5.reduce(
  (a, Value) => a + Value,
  i,
);

console.log(hw8);


const n1 = [2 , 4 , 2024];
const s2 = ['two', 'four', 'two thousand twenty-four'];
const hw9 = n1.concat(s2);

console.log(hw9);


const hw10 = ['Mersedas', 'BMW', 'Audi', 'Lexus'];

console.log(hw10.slice(2));
console.log(hw10.slice(1));
console.log(hw10.slice(0));


const num6 = ['one', 'two', 'three', 'four', 'five'];
const hw11 = num6.reverse();
console.log('hw11:', hw11);


const hw12 = [-5, -3, -1, -2, -4];
hw12.sort();
console.log(hw12);


const hw13 = ['september', 'october', 'march', 'april', 'may'];
hw13.splice(0, 1, 'januvery');
hw13.splice(1, 1, 'february');
console.log(hw13);


const hw14 = ['pineapple', 'oreng', 'banana', 'apple'];

console.log(hw14.pop());
console.log(hw14);


const animals = ['Wolf', 'leopard', 'lion'];
const hw15 = animals.push('Eagle');

console.log(hw15);
console.log(animals);


const hw16 = [3, 4, 5];

console.log(hw16.unshift(1, 2));
console.log(hw16);


const hw17 = [1 , 12 , 23 , 34 , 45];

console.log(hw17.fill(0));


const hw18 = [5, 1, 2, 3, 55];
const ind = hw18.findLast((t) => t < 5);

console.log(ind);


const hw19 = [11, 10, 9, 8, 7, 6, 5];
const n = (e) => e > 10;

console.log(hw19.findLastIndex(n));


const hw20 = [3, 4, 2, 1];
const f = hw20.flatMap((num) => (num < 5? [2, 2] : 1));

console.log(f);


const hw21 = ['Dauren', 'Bolot', 'Erbol', 'Adil'];
const r = hw21.entries();

console.log(r.next().value);


const hw22 = [1, 2, 3, 4, 5];

console.log(hw22.includes(5));