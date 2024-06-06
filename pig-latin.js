const userPhrase = process.argv.slice(2);
// console.log(userPhrase);
const vowels = ["a", "i", "o", "u", "e"];
const ending = "ay";
const ending2 = "way";

const pigWord = userPhrase.map((word) => {
  const checkVowels = vowels.includes(word[0]);
  //   console.log(vowels.includes(word[0]));
  const firstLetter = word.substring(0, 1);
  const pigTest = word.substring(1) + firstLetter + ending;
  const pigTest2 = word.substring(1) + firstLetter + ending2;

  if (checkVowels == true) {
    return pigTest2;
  } else {
    return pigTest;
  }
});

const phraseString = new String(pigWord).toString().replaceAll(",", " ");

console.log(phraseString);

if (userPhrase == "") {
  return console.log("Error: please enter a word or phrase to translate.");
}
