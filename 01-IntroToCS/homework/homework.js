'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
     sum += +num[i] * 2 ** (num.length - 1 - i);
  }
  return sum;
}

function DecimalABinario(num) {
  // tu codigo aca
  let bin = 0;
  let rem, i = 1;
  while (num != 0) {
      rem = num % 2;
      num = Math.floor(num / 2);
      bin = bin + rem * i;
      i = i * 10;
  }
  return (bin.toString());
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}