let arr1 = [1, 2, 3,];
let arr2 = [4, 5, 6,];

arr1.push (4);
console.log ("array after push - ", arr1);             // arr1 == [1, 2, 3, 4]

arr1.pop ();
console.log ("array after pop - ", arr1);              // arr1 == [1, 2, 3]

let a = arr1.shift ();
console.log ("variable 'a' after arr1.shift", a);      // a == 1

let b = arr1.pop ();
console.log ("variable 'b' after arr1.pop", b);        // b == 3

console.log (arr1);                                    // arr1 == [2]

arr1.unshift (0, 1);
console.log ("array after unshift - ", arr1);          // arr1 == [0, 1, 2]

arr2.unshift (0, 1, 2, 3);
arr2.push (7, 8, 9);
console.log ("new arr2 - ", arr2); // arr2 == [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

let fruits = [];
fruits[99999] = 5;
fruits.age = 25;
console.log("fruits - ", fruits, ", age - ", fruits.age);
let c = [];
c.push (fruits.age);
console.log(c);

//-----------------------------------------------------------------------------

let new_fruits = ['apple', 'cherry', 'grape', 'lemon', 'orange'];

for (let fruit_test_1 of new_fruits) {
  console.log('for .. of', fruit_test_1);
}

for (let fruit_test_2 in new_fruits) {
  console.log('for .. in', new_fruits[fruit_test_2]);
}
