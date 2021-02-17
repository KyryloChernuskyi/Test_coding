// Поиск одной 4 и остановка

const arr1 = [1, 2, 5, 9, 4, 13, 4, 10];

for (let i = 0; i < arr1.length; i++) {
  // console.log (arr1[i]); // проверка остановки
  if (arr1[i] == 4) {
    console.log ('В arr1 цифра 4 Есть!');
    break;
  }
};

//-------------------------------------------------------------------

// Поиск значений, которые начинаются на 1, 2, 5

  //Поиск по цифрам

const arr2 = [10, 20, 30, 50, 235, 335, 453, 3000];
const values = [1,2,5];
const answer1 = [];
const answer2 = [];
const answer3 = [];

for (let i = 0; i < arr2.length; i++) {
  let temp1 = Math.trunc (arr2[i] / 10)
  let temp2 = Math.trunc (arr2[i] / 100)
  let temp3 = Math.trunc (arr2[i] / 1000)

  if (temp1 == 1 || temp1 == 2 || temp1 == 5 ||
      temp2 == 1 || temp2 == 2 || temp2 == 5 ||
      temp3 == 1 || temp3 == 2 || temp3 == 5) {
        answer1.push (arr2[i]);
      };                                              // 1st variant

  if (values.indexOf(temp1) > -1 ||
      values.indexOf(temp2) > -1 ||
      values.indexOf(temp3) > -1) {
        answer2.push (arr2[i]);
      };                                              // 2nd variant

  if (values.includes(temp1) ||
      values.includes(temp2) ||
      values.includes(temp3)) {
        answer3.push (arr2[i]);
      };                                              // 3rd variant

};

console.log ('answer 1 -', answer1);
console.log ('answer 2 -', answer2);
console.log ('answer 3 -', answer3);

  //Поиск по буквам

const answer4 = [];
const answer5 = [];

for (i = 0; i < arr2.length; i++) {
  let str = arr2[i] + "";
  if (str.indexOf("1") == 0 ||
      str.indexOf("2") == 0 ||
      str.indexOf("5") == 0) {
        answer4.push (arr2[i]);
      };                                              // 1st variant

  if (str.slice(0,1) == 1 ||
      str.slice(0,1) == 2 ||
      str.slice(0,1) == 5) {
        answer5.push (arr2[i]);
      };                                              // 2nd variant
};

console.log ('answer 4 -', answer4)
console.log ('answer 5 -', answer5)

//-------------------------------------------------------------------

// let a = 5;
// let b = a + "";
// console.log (a, b) // (int) 5, (string) "5"

// let temp = Math.trunc (5 / 2); // 2
// console.log ('temp = ', temp)

// let temp5 = Math.trunc (10 / 10)
// console.log ('temp5', temp5)

// console.log ('test', Math.trunc (3000/1000))

// let temp = '3000';
// let str1 = temp.slice (0,1);
// console.log ('str1', str1) // 3
