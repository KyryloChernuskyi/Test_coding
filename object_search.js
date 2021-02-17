let test = "sdffdw sdfwdasdasda asdadsqddqwfdads. asaqd as. adq adqwrqsafaaa afq.";
let a_count = 0;
let words = test.split (" ");
let sentences = test.split ('. ');

for (let i = 0; i < test.length; i++) {
  if (test[i] == 'a') {
    a_count++;
  };
};

let longest_word = '';
for (let i = 0; i < words.length; i++) {
  if (longest_word.length < words[i].length) {
    longest_word = words[i];
  };
};

let longest_sentence = '';
for (let i = 0; i < sentences.length; i++) {
  if (longest_sentence.length < sentences[i].length) {
    longest_sentence = sentences[i];
  };
};

console.log('Count of \'a\' is', a_count);
console.log('Longest word is ', longest_word);
console.log('Longest sentence is ', longest_sentence);
