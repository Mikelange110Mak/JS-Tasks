"use strict"

/*
function squareSum(numbers) {
   let a = 0;
   a = Math.pow(numbers, 2);
   console.log(a + a);
}
squareSum(3, 2);
*/

/*
const arrA = [4, 3, 2, 1, 5];
const arrB = [8, 7, 6, 5, 10];

function arrAnB(arr1, arr2) {
   let result = [...arr1, ...arr2]; //помещаю в переменную 2 аргумента массива

   result = Array.from(new Set(result)) //типа создаю новый массив удаляя из него дубликаты

   result.sort(function (arr1, arr2) { //сортирую массив, для сортировки чисел пришлось заморачиваться и написать мини функцию
      return arr1 - arr2;
   })
   console.log(result);
}
arrAnB(arrA, arrB);
*/

/*
let arrA = [2, 2];

function mySquareSum(numbers) {
   let result = 0;
   for (let i = 0; i < numbers.length; i++) {
      result += numbers[i] ** 2
   }
   console.log(result);
}
mySquareSum(arrA);
*/

/*
let arrA = ['Make ', 'is ', 'learning', ' Java Script'];

function noSpace(x) {
   console.log(x.replace(/ /g, ''));
};

noSpace(arrA);
*/

/*
function summation(num) {
   let a = 0;
   let b = 0;
   let c = 0;
   a = num + 1;
   b = a * num;
   c = b / 2;
   console.log(c);
}
summation(5);
*/

/*
let arr = [true, true, true, false,
   true, true, true, true,
   true, false, true, false,
   true, false, false, true,
   true, true, true, true,
   false, false, true, true];

function countSheeps(arrayOfSheep) {
   // TODO May the force be with you
   let a = arr.filter(function (value) {
      return value;
   });
   console.log(a.length);
}
countSheeps(arr);
*/

/*
function litres(time) {
   let a = Math.floor(time / 2)
   console.log(a);
}
litres(6.7)
*/

/*
function century(year) {
   // Finish this :)
   let a = Math.ceil(year / 100);
   console.log(a);
}
century(1700);
*/

/*
function getCount(str) {
   let a = str.toLowerCase();
   let b = ["a", "e", "i", "o", "u"];
   let count = 0;

   for (let char of a) {
      if (b.includes(char)) {
         count += 1;
      }
   }
   console.log(count);
}
getCount('Astronomy is zaebis')
*/

/*
function squareDigits(num){
   let result = '';                    //переменная строки чтоб корректно отображать каждую цифру в квадрате
    let numToStr = String(num);        //перевести числовой аргумент встроку
    let numArr = Array.from(numToStr); //разбить все это на массив
    for (let square of numArr) {       //перебор каждого элемента в массиве
        result += square * square;     //возведение в квадрат каждого элемета массива
    }
    return Number(result);             //возврат результата
 }
 */

/*
function highAndLow(numbers) {
  // ...
  let strToNum = numbers.split(' ').join().split(',');
  let min = Math.min(...strToNum);
  let max = Math.max(...strToNum);
  console.log(`${max} ${min}`);
}
highAndLow('5 4 6 3 4');

*/

/*
//задача получить центральные буквы у строки, если четное то 2 буквы, если нечет то одну:
function getMiddle(s) {
   //Code goes here!

   let n = s.length / 2; //переменная которая делит строку на 2 (чтобы добраться до половины)
   let evenFormula = s.slice(n - 1, n + 1); //формула для четных
   let oddFormula = s.slice(n, n + 1) //формула для нечетных

   if (s.length % 2 === 0) { //условие чтоб проверить строка с четным количеством символов или нет
      console.log(evenFormula);
   } else {
      console.log(oddFormula);
   }

}
getMiddle('SuPeRmAna');
*/


/*
function disemvowel(str) {
   let vowels = ["a", "e", "i", "o", "u", 'A', 'E', 'I', 'O', 'U'];

   for (let char of str) {
      if (vowels.includes(char)) {
         str = str.replace(`${char}`, '');

      }
   }
   console.log(str);

}
disemvowel('Arbuzniki');
*/

/*
var isSquare = function (n) {

   let a = Math.sqrt(n);
   if (Number.isInteger(a)) {
      console.log(a);
   } else {
      console.log('no');
   }

}

isSquare(25);
*/
/*
function descendingOrder(n) {
   let a = n.toString();
   let b = a.split("");
   b.sort((a, b) => a - b);
   b.reverse();
   let c = b.join('');
   c = parseInt(c)
   console.log(c);
}
descendingOrder(14256);
*/

/*
let arr = [8, 2, 3, 'asd', 'bkb', 4, 5]

function filter_list(l) {
   let sort = l.filter(item => {
      if (typeof (item) == 'string') {
         return false;
      } else {
         return true;
      }
   })
   console.log(sort);
}
filter_list(arr);
*/

/*
function jadenCase(str) {
   let arr = str.split(" ");
   for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[0].toUpperCase() + arr[i].slice(1)
   }
   let result = arr.join(' ');
   console.log(result);
}
jadenCase('Abc asd bkb power treads bloodthorn and othEr items');

*/

/*
function getAge(inputString) {
   // return the girl's correct age as an integer. Happy coding :) 
   let age = parseInt(inputString);
   console.log(age);
}
getAge('4 xdssdfsdf');
*/

/*
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
   // code goes here
   return laLigaGoals, copaDelReyGoals, championsLeagueGoals
}
goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals);
*/

/* 
function firstNonConsecutive (arr) {
arr.forEach((item, index) => {
      if (item + 1 < arr[index + 1]) {
         return arr[index + 1];
      } else if (item > arr[index + 1]) {
         return arr[index];
      }
      else {
         return null;
      }
   });
}
*/




let arrO = [5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16];
let arrMinus = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 5, 6];
let arrBug = [83, 6, 7, 8, 9, 10, 11]
let simpleArr = [1, 2, 3, 4, 6, 7, 8]
let miniArr = [1, 3]
let rightArr = [1, 2, 3, 4, 5, 6, 7, 8]
let microArr = [2]

/* мое решение которое не работает
function firstNonConsecutive(arr) {
   arr.forEach((item, index) => {
      if (item + 1 < arr[index + 1]) {
         //console.log(arr[index + 1]);
         a = [arr[index + 1]];
      } else if (item > arr[index + 1]) {
         //console.log(arr[index]);
         a = [arr[index]];
      }
      return null;
   });
   if (arr.length < 2) {
      return null;
   }
}
firstNonConsecutive(arrMinus)
*/

/* 
function firstNonConsecutive2(arr) {
   let number;
   arr.forEach((item, index, array) => {
      if (item > array[index - 1] + 1) {
         number = item;
      }
   });
   //return number === undefined ? null : number;
   console.log(number === undefined ? null : number);
}
firstNonConsecutive2(arrMinus)
*/

/*
function sumArray(array) {

   if (!array || array.length < 2) {
      console.log(0);
   }
   let a = Math.max(...array)
   let b = Math.min(...array)
   let result = 0;
   for (let i = 0; i < array.length; i++) {
      result += array[i]
   }
   console.log(result - a - b);

}
sumArray([])
*/

/*
function bonusTime(salary, bonus) {
   // your code here
   let a;
   if (bonus === true) {
      a = salary * 10;
      console.log(String(`£${a}`));
   } else {
      console.log(`£${salary}`);
   }

}
bonusTime(5, false)
*/

/*
function basicOp(operation, value1, value2) {
   let a = `${value1} ${operation} ${value2}`;
   console.log(eval(a));
}
basicOp('+', 4, 7)
*/

/*
function booleanToString(b) {
   if (b === true) {
      console.log('true');
   } else {
      console.log('false');
   }
}
booleanToString(false)
*/

/*
function digitize(n) {
   let a = Array.from(n.toString(), Number).reverse();
   console.log(a);
}
digitize(35231)
*/

/* подходящее решение (если не считать что я пока не знаком с методом map, но оно не проходит, проходит только метод map)
let arr = [1, 2, 3];
function maps(x) {
   for (let key in x) {
      x[key] = x[key] * 2;
   }
   console.log(x);
}
maps(arr)
*/

/*
function abbrevName(name) {
   let a = name.split(' ');
   for (let key in a) {
      a[key] = a[key].substr(0, 1);;
   }
   let b = a.join('.');
   let c = b.toUpperCase();
   console.log(c);
}
abbrevName('david sagitov')
*/

/*
function findNeedle(haystack) {
   let a = haystack.indexOf("needle");
   return `found the needle at position ${a}`;

}
findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]);
*/

/*
function past(h, m, s) {
   let result = h * 3600000 + m * 60000 + s * 1000;
   console.log(result);
}
past(1, 1, 1)
*/

/*
function solution(number) {
   let sum = 0;
   let a = 0;
   if (number < 0) {
      sum = null;
   }
   for (let i = 0; i < number; i++) {
      if (i % 3 == 0 || i % 5 == 0) {
         a += i;
      }

   }
   sum += a;
   console.log(sum);
}
solution(10)
*/

/*
function isDivisible(n, x, y) {
   if (n % x === 0 || n % y === 0) {
      return true;
   } else {
      return false
   }
}
isDivisible(n, x, y);
*/

let aArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
let bArr = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];

/*
function countPositivesSumNegatives(input) {
   let a = 0;
   let b = 0;

   if (!input || input === null || input.length < 1) {
      console.log([]);
      //return null;
   }


   input.forEach((element) => {

      if (element > 0) {
         a++;
      } else if (element < 0) {
         b += element;
      }

   });


   let result = [a, b];
   console.log(result);

}
countPositivesSumNegatives([]);
*/

/*
function makeUpperCase(str) {
   console.log(str.toUpperCase());
}
makeUpperCase('str')
*/

/*
let arrA = [0, 1, 2, 3, 4, 5, -5, -4, -2, -1, -0];

function invert(array) {

   for (let i = 0; i < array.length; i++) {
      array[i] = array[i] - array[i] * 2;

      if (array[i] === 0) {
         array[i] = -0
      }

   }
   console.log(array);

}
invert(arrA);
*/

/*
function paperwork(n, m) {
   if (n < 0 || m < 0) {
      return 0;
   } else {
      return n * m;
   }
}
*/

/*
function lovefunc(flower1, flower2) {
   if (flower1 % 2 == 0 && flower2 % 2 == 0 || flower1 % 2 > 0 && flower2 % 2 > 0) {
      return false
   }
   return true
}
*/

/*
function sum(numbers) {
   let sum = 0

   numbers.forEach(element => {
      sum += element;
   });

   console.log(sum);
};
sum(sumArrays)
*/

/*
function fakeBin(x) {
   let a = x.split('')

   for (let i = 0; i < a.length; i++) {
      a[i] = +a[i];
      if (a[i] >= 5) {
         a[i] = 1
      } else {
         a[i] = 0;
      }
   }
   a = a.join('');

   console.log(a);
}
fakeBin('1728394635')
*/

/*
function XO(str) {

   str = str.split('')
   let a = 0;
   let b = 0;
   str.forEach(element => {
      if (element === 'x' || element === 'X') {
         a++
      } else if (element === 'o' || element === 'O') {
         b++
      }
   });
   if (a === b) {
      return true;
   }
   return false

}
XO("oOxx");
*/

/*
function isIsogram(str) {

   let a = str.toLowerCase().split('').sort();

   for (let i = 0; i < a.length; i++) {
      if (a[i + 1] == a[i]) {
         console.log('yeh');
      }
   }
}
isIsogram('abcd')
*/

/*
function findShort(s) {
   let a = s.split(' ');
   let b = [];

   a.forEach(element => {
      b.push(element.length)
   });

   console.log(Math.min(...b));
}

findShort("turns out random test cases are easier than writing out basic ones");
*/

/*
function accum(s) {
   let a = s.split('');
   let str = '';

   for (let i = 0; i < a.length; i++) {
      let item = a[i]
      str += item.toUpperCase() + item.toLowerCase().repeat(i) + '-'
   }

   console.log(str.slice(0, -1));
   //
}
accum('RqaEzty');
*/

/*
function areYouPlayingBanjo(name) {

   if (name[0] === 'R' || name[0] === 'r') {
      return `${name} plays banjo`
   }
   return `${name} does not play banjo`
}
areYouPlayingBanjo('Raulf');
*/


/*
function find_average(array) {
   if (!array || array.length < 1) {
      console.log(null);
   }
   let count = 0;
   for (let i = 0; i < array.length; i++) {
      count += array[i]
   }
   console.log(count / array.length);
}
find_average([]);
*/

/*
let name1 = ["Peter"];
let name2 = ["Jacob", "Alex"];
let name3 = ["Max", "John", "Mark"];
let name4 = ["Alex", "Jacob", "Mark", "Max", "Sunny", "Adam", "Mike"];

function likes(names) {
   let a = names.length;

   switch (true) {
      case (a === 0): console.log('no one likes this');
         break
      case (a === 1): console.log(`${names[0]} likes this`);
         break
      case (a === 2): console.log(`${names[0]} and ${names[1]} like this`);
         break
      case (a === 3): console.log(`${names[0]}, ${names[1]} and ${names[2]} like this`);
         break
      case (a > 1): console.log(`${names[0]}, ${names[1]} and ${a - 2} others like this`);
   }

}
likes([])
*/

/*
function createPhoneNumber(numbers) {
   let a = numbers
   console.log(`(${a[0]}${a[1]}${a[2]}) ${a[3]}${a[4]}${a[5]}-${a[6]}${a[7]}${a[8]}${a[9]}`);
}
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
*/

/* yeahh boy, i did it)))))
function recursionTrain(num) {
   let count = 0

   let a = Array.from(num.toString(), Number)
   a.forEach(n => {
      count += n
   });

   if (count >= 10) {
      recursionTrain(count)
   } else {
      console.log(count);
   }
}

recursionTrain(132189)
*/

/*
function spinWords(string) {
   string = string.split(' ')

   for (let i = 0; i < string.length; i++) {
      if (string[i].length > 5) {
         string[i] = string[i].split('').reverse().join('');
      }
   }
   string = string.join(' ')
   console.log(string);
}

spinWords('Hey fellow warriors');
*/

/*
let checkA = ['t', 'a', 's', 't']

function check(a, x) {
   let c = 0;
   a.forEach(element => {
      if (x == element) {
         c++;
      }
   });
   if (c) {
      console.log('tr');
   }

}

check(checkA, 'e')
*/

/*
function hero(bullets, dragons) {
   if (dragons * 2 > bullets) {
      return false
   }
   return true
}
*/

/*
const reverseSeq = n => {
   let arr = []

   for (let i = n; i > 0; i--) {
      arr.push(i)
   }
   console.log(arr);
};

reverseSeq(7)
*/

/*
function bmi(weight, height) {

   let count = weight / (height * height)

   switch (true) {
      case (count <= 18.5): console.log('Underweight');
         break
      case (count <= 25.0): console.log('Normal');
         break
      case (count <= 30.0): console.log('Overweight');
         break
      case (count > 30): console.log('Obese');
         break
   }

}

bmi(80, 1.80)
*/

/*
var min = function (list) {
   console.log(Math.min.apply(null, list));
}
min([-52, 56, 30, 29, -54, 0, -110])

var max = function (list) {
   console.log(Math.max.apply(null, list));
}
max([4, 6, 2, 1, 9, 63, -134, 566])
*/

/*
function DNAtoRNA(dna) {
   let arr = dna.split('')
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 'T') {
         arr[i] = 'U'
      }
   }
   console.log(arr.join(''));
}
DNAtoRNA('GCAT')
*/

/*
function duplicateCount(text) {
   let a = text.toLowerCase().split('').sort();
   let arr = [];

   for (let i = 0; i < a.length; i++) {
      if (a[i] === a[i + 1]) {
         arr.push(a[i])
      }
   }

   let uniqArr = [...new Set(arr)]
   console.log(uniqArr.length);

}
duplicateCount('a')
*/

/*
//ОТФИЛЬТРОВАЛ МАССИВЫ МЕТОДОМ FILTER()
function arrayDiff(a, b) {

   let isItemIncludes = (elem) => !b.includes(elem) //здесь заранее для метода фильтер написал мини-функцию, что елементы массива b не включаются в массива а

   let arr = a.filter(isItemIncludes) //здесь для массива a запустил метод фильтер и вставил аргумент вышестоящей мини-функции

   console.log(arr);

}
arrayDiff([1, 2, 2, 2, 3], [2])
*/

/*
function findOutlier(integers) {

   const isEven = (elem) => elem % 2 == 0
   const isOdd = (elem) => elem % 2 != 0

   let arrIsEven = integers.filter(isEven)
   let arrIsOdd = integers.filter(isOdd)

   if (arrIsEven.length === 1) {
      console.log(Number(arrIsEven));
   }
   else if (arrIsOdd.length === 1) {
      console.log(Number(arrIsOdd));
   }
}
findOutlier([160, 3, 1719, 19, 11, 13, -21])
*/

/*
function DNAStrand(dna) {
   let arr = dna.split('')
   for (let i = 0; i < arr.length; i++) {
      switch (arr[i]) {
         case 'A': arr[i] = 'T'
            break
         case 'T': arr[i] = 'A'
            break
         case 'G': arr[i] = 'C'
            break
         case 'C': arr[i] = 'G'
            break
      }
   }
   console.log(arr.join(''));
}
DNAStrand('ATTGC')
*/

/*
function sumTwoSmallestNumbers(numbers) {
   let arr = numbers.sort((a, b) => a - b)
   let count = arr[0] + arr[1]

   console.log(count);
}
sumTwoSmallestNumbers([19, 5, 42, 2, 77])
*/

/*
function getSum(a, b) {
   let count = 0;
   let A = Math.min(a, b)
   let B = Math.max(a, b)


   if (a === b) {
      return a
   } else {
      for (let i = A; i <= B; i++) {
         count += i
      }
      console.log(count);
   }




}
getSum(-1, 2)
*/


/*
function isValidWalk(walk) {

   let axisX = 0;               //переменная оси Х
   let axisY = 0;              //переменная оси Y

   for (let i = 0; i < walk.length; i++) {    //перебор массива
      switch (walk[i]) {     //если элемент массива равен:
         case 'n': axisY++   // 'n' добавить к значению по оси Y
            break
         case 'e': axisX++   // 'e' добавить к значению по оси X
            break
         case 's': axisY--  // 's' убавить от значения по оси Y
            break
         case 'w': axisX--  // 'w' убавить от значения по оси X
            break
      }
   }
   if (axisX === 0 && axisY === 0 && walk.length === 10) {   //если ось X и ось Y равна нулю и длина массива равна 10 то:
      console.log('true');   //вернуть true
   } else {                  // в ином случае:
      console.log('false');  // вернуть false
   }

}
isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])
*/

/*
function maskify(cc) {
   cc = cc.split("")
   let hidden = []
   for (let i = 0; i < 4; i++) {
      let a = cc.pop()
      hidden.push(a)
   }

   for (let i = 0; i < cc.length; i++) {
      cc[i] = '#'

   }

   let result = [...cc, ...hidden.reverse()]
   console.log(result.join(''));
}
maskify('4556364607935616')
*/

/*
function persistence(num) {
   let count;
   let result = 1;
   if (num < 10) {
      return0
   }

   let arr = num.toString().split("")
   count = arr.reduce((acc, curr) => acc * curr)

   while (count > 9) {
      count = count.toString().split("")
      count = count.reduce((acc, curr) => acc * curr)
      result++
   }


   console.log(result);
}
persistence(39)
*/

/*
var uniqueInOrder = function (iterable) {
   //iterable = iterable.split('')
   let arr = []

   for (let i = 0; i < iterable.length; i++) {
      if (iterable[i] !== iterable[i + 1]) {
         arr.push(iterable[i])
      }
   }

   console.log(arr);
}

uniqueInOrder('AAAABBaBCCDAABBB')
*/

/*
function toCamelCase(str) {
   str = str.split('')
   for (let i = 0; i < str.length; i++) {
      if (str[i] === '-' || str[i] === '_') {
         str[i + 1] = str[i + 1].toUpperCase()
         str.splice(i, 1)
      }
   }
   console.log(str.join(''));
}
toCamelCase('The_Stealth_Warrior')
*/

/*
function friend(friends) {
   let arr = []
   friends.forEach(element => {
      if (element.length === 4) {
         arr.push(element)
      }
   });
   console.log(arr);
}
friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"])
*/

/*
function nbYear(p0, percent, aug, p) {

   let a = Math.round((p0 / 100) * percent + aug)
   let count = 0;
   console.log(a);
   while (p0 < p) {
      p0 = p0 + a
      a = (p0 / 100) * percent + aug

      count++
   }

   console.log(count);
}

nbYear(1500, 5, 100.75, 5000)
*/

/*
function isTriangle(a, b, c) {
   if (a + b > c && a + c > b && b + c > a) {
      return true;
   } else{
     return false
     }
}
isTriangle(2, 8, 6)
*/

/*
function order(words) {
   words = words.split(' ').sort(function (a, b) {
      return a.match(/\d/) - b.match(/\d/);
   })
   console.log(words.join(' '));
}
order("is2 Thi1s T4est 3a")
*/

/*
function solution(str, ending) {
   let a = str.length - ending.length;
   let b = str.slice(a)
   if (b === ending) {
      console.log(true);
   }
   return false
}
solution('abcde', 'cde')
*/

/*
function addBinary(a, b) {
   let num = a + b
   let arr = []

   while (num > 1) {
      arr.push(Math.floor(num % 2))
      num /= 2;
      console.log(num);
   }

   console.log(arr.reverse().join(''));
}
addBinary(700, 49)
*/

/*
function validatePIN(pin) {
   let a = pin.length
   pin = pin.split('')

   for (let i = 0; i < a; i++) {
      if (isNaN(pin[i]) || pin[i] === '\n') {
         console.log(false);
      }
   }
   if (a === 4 || a === 6) {
      console.log(true);
   }

}
validatePIN('1\n23')
*/

/*
function rowSumOddNumbers(n) {
   console.log(Math.pow(n, 3));
}
rowSumOddNumbers(5)
*/

/*
function pigIt(str) {
   str = str.split(' ')


   for (let i = 0; i < str.length; i++) {
      let a = str[i].length

      if (/^[a-zA-Z0-9]+$/.test(str[i])) {
         str[i] = str[i].split(' ')
         str[i] += str[i]
         str[i] = str[i].slice(1, a + 1)
         str[i] = str[i] + 'ay'
      }
   }

   console.log(str.join(' '));
}
pigIt('Pig latin is cool')
*/

/*
function findNextSquare(sq) {
   let a = 0

   a = Math.pow(Math.sqrt(sq) + 1, 2);

   if (!Number.isInteger(a)) {
      console.log(-1);
   }
   console.log(a);

}
findNextSquare(155)
*/

/*
function moveZeros(arr) {
   let nulArr = []

   arr.forEach(el => {
      if (el === 0) {
         nulArr.push(el)
      }
   });

   arr = arr.filter(function (item) {
      return item !== 0
   })
   nulArr.forEach(el => { arr.push(el) })

   console.log(arr);
}

moveZeros([9, 0, 9, 1, 2, 1, 1, 3, 1, 9, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0])
*/

/*
function isPangram(string) {
   const regex = /([a-z])(?!.*\1)/g;
   string = string.toLowerCase()
   if (string.match(regex).length === 26) {
      return true
   }
   return false
}
*/

/*
function openOrSenior(data) {
   let result = []
   data.forEach(el => {
      if (el[0] > 54 && el[1] > 7) {
         result.push('Senior')
      } else {
         result.push('Open')
      }
   });
   console.log(result);
}
openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]])
*/

/*
function printerError(s) {
   s = s.split('');
   let count = 0
   s.forEach(el => {
      if (el.charCodeAt() > 109) {
         count++
      }
   });

   console.log(`${count}/${s.length}`);
}
printerError("aaaxbbbbyyhwawiwjjjwwm")
*/

/*
function narcissistic(value) {
   let valueCount = value.toString().split('').map(el => +el);
   const pow = valueCount.map(el => Math.pow(el, valueCount.length))
   let sum = 0
   pow.forEach(el => sum += el);
   if (sum === value) {
      console.log(true);
   } else {
      console.log(false);
   }

}
narcissistic(1652)
*/

/*
var countBits = function (n) {
   let arr = []
   let count = 0
   while (n >= 1) {
      arr.push(Math.floor(n % 2))
      n /= 2;
   }
   arr.forEach(el => {
      if (el === 1) { count++ }
   });
   console.log(count);
};
countBits(10)
*/

/*
function binary_array_to_number(arr) {
   arr = arr.join('')
   let res = parseInt(arr, 2)
   console.log(res);
}
binary_array_to_number([0, 0, 1, 0])
*/

/*
function humanReadable(seconds) {
   let h = Math.floor(seconds / 3600).toString().split('')
   let m = Math.floor((seconds / 60) % 60).toString().split('')
   let s = Math.floor(seconds % 60).toString().split('')

   if (h.length < 2) { h.unshift('0') }
   if (m.length < 2) { m.unshift('0') }
   if (s.length < 2) { s.unshift('0') }

   console.log(`${h.join('')}:${m.join('')}:${s.join('')}`);
   
}
humanReadable(359999)
*/

/*
function findUniq(arr) {
   const uniqArr = arr.filter((el, i, array) => array.indexOf(el) === array.lastIndexOf(el))
      .join()
   console.log(Number(uniqArr));
}
findUniq([0.55, 0, 0, 0, 0])
*/

/*
var number = function (busStops) {
   const arr = busStops.reduce((acc, curr) => {
      return acc + curr[0] - curr[1]
   }, 0)
   console.log(arr);
}
number([[10, 0], [3, 5], [5, 8]])
*/

/*
function isPrime(num) {
   const limit = Math.sqrt(num);
   let iter = 2
   while (limit >= iter) {
      if (num % iter === 0) console.log(false);;
      iter += 1
   }
}
isPrime(0)
*/

/*
function duplicateEncode(word) {
   word = word.toLowerCase().split('')
   console.log(word);
   word = word.map((curr, i, arr) => {
      return arr.filter((el) => el === curr).length - 1 ? ')' : '(';
   })
   console.log(word);
}
duplicateEncode('recede')
*/

/*
function oddOrEven(array) {
   const arr = array.reduce((acc, curr) => {
      return acc + curr
   }, 0)
   if (arr % 2 === 0) {
      return 'even'
   } else {
      return 'odd'
   }
}
oddOrEven([0, -1, -3])
*/

function simpleMultiplication(number) {
   if (number % 2 === 0) {
      return number * 8
   } else {
      return number * 9
   }
}