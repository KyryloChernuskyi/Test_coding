let fruit = "cherry";

let bag = {
  [fruit]: 5,
};

let bag_2 = {
  banana: 4,
};

console.log (bag, ",", bag_2);      // { cherry: 5} , {banana: 4}

//-------------------------------------------------------------------------

let bag3 = {
  [fruit + 'Cola']: 3,
};

console.log (bag3)                  // {cherryCola: 3}
