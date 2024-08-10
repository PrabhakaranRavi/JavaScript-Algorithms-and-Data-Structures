/**
 * Return an English translated sentence of the passed binary string.

The binary string will be space separated.
 */

function binaryAgent(str) {
  let firstArr = str.split(" ");
  let finalArr = [];
  for (let i = 0; i < firstArr.length; i++) {
    let j = 0;
    let binary = parseInt(firstArr[i]);
    let decimal = 0;
    let remainder = binary % 10;
    while (j < firstArr[i].length) {
      decimal += remainder * Math.pow(2, j);
      binary = Math.floor(binary / 10);
      j++;
      remainder = binary % 10;
    }
    finalArr.push(String.fromCharCode(decimal));
  }
  return finalArr.join("");
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
