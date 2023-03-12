const matem = 10 % 3;
console.log(matem); // qoldiq
//tenglashtrish
console.log(5 + 5 == "10"); //true
console.log(5 + 5 === "10"); //false

//incr dencr
let incr = 10;
let dencr = 10;

console.log(incr++);
console.log(dencr--);
console.log(incr++);
console.log(dencr--);
console.log(incr++);
console.log(dencr--);
console.log(incr);
console.log(dencr);

//&& = va (hammasi true bo'lishi kerak)
//|| = yoki(hammasi false bo'lishi kerak)

const isAge = true;
const isClose = false;
const isChecked = false;

console.log(isAge && isClose && isChecked);

const isAg = false;
const isClos = false;
const isChecke = false;

console.log(isAg && isClos && isChecke);
