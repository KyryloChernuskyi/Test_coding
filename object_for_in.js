let test = {
  name: "Kirill",
  age: 23,
  height: 183,
};

for (let key in test) {
  console.log ("Key: ", key, ", value: ", test[key])
};

// key: name,     value: Kirill
// key: age,      value: 23
// key: height,   value: 183
console.log ("-----------------------------------------------");
//-----------------------------------------------------------------------------

let obj = {
  green: "зеленый",
  red: "красный",
  blue: "голубой",
};

for (let color in obj) {
  console.log ("Color ", color, "translates as", obj[color])
};

// Color  green translates as зеленый
// Color  red translates as красный
// Color  blue translates as голубой
console.log ("-----------------------------------------------");
//-----------------------------------------------------------------------------

let salary = {
  Kolya: 200,
  Vasya: 300,
  Petya: 400,
};

for (let name in salary) {
  console.log ("Salary of", name, "is", salary[name], "dollars")
}
