const people = [];
// const arr = [{name: "Kirill", age: 23, height: 183}, {name: "Vasya", age: 20, height: 190}];

people.push ({
  name: "Kirill",
  age: 23,
  height: 183
});

people.push ({
  name: "Katya",
  age: 22,
  height: 173
});

let max_age = people[0];
let min_height = people[0];

for (let i = 1; i < people.length; i++) {           // max age
  if (max_age.age < people[i].age ) {
    max_age = people[i]
  };
  if (min_height.height > people[i].height ) {      // min height
    min_height = people[i]
  }
}

// console.log (arr)
console.log ('max age', max_age, '\nmin height', min_height)
