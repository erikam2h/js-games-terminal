const userPhrase = process.argv.slice(2);
// console.log(userPhrase);
const vowels = ["a", "i", "o", "u", "e"];
const consonants = [
  "b",
  "c",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "m",
  "n",
  "p",
  "q",
  "r",
  "s",
  "t",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const ending = "ay";
const ending2 = "way";

const pigWord = userPhrase.map((word) => {
  const checkVowels = vowels.includes(word[0]);
  const checkConsonants = consonants.includes(word[(0, 1)]);
  // console.log(checkConsonants);
  //   console.log(vowels.includes(word[0]));
  const firstLetter = word.substring(0, 1);
  const twoConsonanats = word.substring(0, 2);
  const pigTest = word.substring(1) + firstLetter + ending;
  const pigTest2 = word + ending2;
  const pigTest3 = word.substring(2) + twoConsonanats + ending;

  if (checkVowels == true) {
    return pigTest2;
  } else if (checkConsonants == true) {
    return pigTest3;
  } else {
    return pigTest;
  }
});

const phraseString = new String(pigWord).toString().replaceAll(",", " ");

console.log(phraseString);

if (userPhrase == "") {
  return console.log("Error: please enter a word or phrase to translate.");
}
