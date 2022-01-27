const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  // write your solution here
  const letterCounter = expr.length / 10;
  const arrayOfLetters = [];
  for (let index = 0; index < letterCounter; index++) {
    arrayOfLetters.push(expr.substr(index * 10, 10));
  }

  let res = "";
  arrayOfLetters.forEach((codedSymbol) => {
    let letter = "";
    if (codedSymbol == "**********") {
      res += " ";
    } else {
      for (let index = 0; index < 5; index++) {
        switch (codedSymbol.substr(index * 2, 2)) {
          case "11":
            letter += "-";
            break;
          case "10":
            letter += ".";
            break;

          default:
            letter += "";
            break;
        }
      }
      if (MORSE_TABLE[letter]) {
        res += MORSE_TABLE[letter];
      }
    }
  });
  return res;
}

module.exports = {
  decode,
};

// const expr = "10111111111111101010001110101000101011101010111111101010101011111111101110101010";
// const result = "17bf2596";

// // const expr =
// //   "00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010";
// // const result = "hello world";

// console.log(decode(expr));
