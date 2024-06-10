// const [userPhrase, shift] = process.argv.slice(2);
const userPhrase = process.argv[2];
const shift = Number(process.argv[3]);
//ASCII stands for American Standard Code for Information Interchange.
//With userPhrase.charCodeAt([index number]) I know the letter ASCII number a = 97, b = 98 ... z= 122 A=65 B= 66 ... Z = 90
//With userPhrase.charAt([index number]) I know what letter is in the selected index from userPhrase

// function name(inside the variable or variable to use in the function, separeted with ,) {write all the code -> return + what to do }
// function name() - this is a anonym function

function cipher(str, n) {
  //list of alphabet as reference
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // we turn the string given to Capital letters to match our alphabet
  return (
    str
      .toUpperCase() // turn th string given to capitular letters
      .split("") // splits a string into an array of substrings, and returns the array
      //string.split("")[H,E,L,L,O] by letter string.split(" ")[split, phrase, by, word]
      .map((val) => {
        const char = alphabet.indexOf(val);
        //Return the index of each letter from 0(is A) to 25(is Z) -1 is a space according to our const alphabet
        return char >= 0 ? alphabet[(char + n) % 26] : " ";
        //si se cumple la condicion de char index mayor o igual a 0 return index del caracter + el numero de shift
        // what % 26 is el limite si se suma el num the index + 26 el resultado siempre será el original del num the index
        // si el nume the shift es mayor a 26 the cycle start again 27 % 26 = 1 (1 es el sobrante de la división 27/26 aqui es como 27-26=1)
        // 58 % 26 = 6 || esto por que 26 cabe 2 veces en 58 como numero entero (58- 52) y el sobrante es 6

        // si el numero de index no es igual o mayor a 0 el resultado sera un espacio (espacio en la frase se habia traducido anteriormente en -1)

        // The () ? : Ternary Operator // variablename = (condition) ? value1:value2;
        /*
         let age = 18
         let voteable = (age < 18) ? "Too young":"Old enough";
         let result = voteable + " to vote."
        */
      }) //Cierre de map
      .join("")
    // join() returns an array as a string:
    /*
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    let text = fruits.join(" and ");
    result from text = Banana and Orange and Apple and Mango
    */
  );
}

// New constant that make work the function with the values from the terminal cipher(str, n)
const cipherPhrase = cipher(userPhrase, shift);
console.log(cipherPhrase);
