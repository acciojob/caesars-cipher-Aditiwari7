// Your Script here.

var lookup = {
	 A: "N",
  B: "O",
  C: "P",
  D: "Q",
  E: "R",
  F: "S",
  G: "T",
  H: "U",
  I: "V",
  J: "W",
  K: "X",
  L: "Y",
  M: "Z",
  N: "A",
  O: "B",
  P: "C",
  Q: "D",
  R: "E",
  S: "F",
  T: "G",
  U: "H",
  V: "I",
  W: "J",
  X: "K",
  Y: "L",
  Z: "M",
  "?": "?",
  ",": ",",
};

function rot13(encodedStr){
	var words = encodedStr.split(" "); //string to Array
   let decodedArr = []; // Your Result goes here
  // Only change code below this line

	for(let i=0; i<word.length; j++){
		const word = words[i];
		let decodedWord = "";
		for(let j=0; j<word.length; j++){
			var char = word.charAt(j);
			var decodedChar = lookup[char];
			decodedWord += decodedChar;
		}
		decodedArr.push(decodedWord);
	}

  return decodedArr.join(" ");//return decodedArr
}

module.exports = rot13;