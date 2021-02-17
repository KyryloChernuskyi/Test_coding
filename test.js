const obj = {
  a:1,
  b:2
}

/// ====================

/*

  [1,3,6]

*/

const arr = [];

//const person = ;

arr.push({
  name: "Kirill",
  age: 23,
  height: 183
});

arr.push({
  name: "Vays",
  age: 22,
  height: 190
});

// arr[i].age
// const pers = arr[i]; pers.age


for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

const arr_test = [];
arr_test.push (2);

arr_test[1] = 3;
console.log ("arr_test - ", arr_test)
