let X = parseInt(prompt("Nhập số ")) ;
let index = X % 100 ;
let a  = (X- index) / 100 ;
let b = (index - (index % 10)) / 10 ;
alert(`${a} + ${b} + ${(index % 10)} = ${a + b + (index % 10)}`);
