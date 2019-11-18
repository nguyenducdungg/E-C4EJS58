let X = parseInt(prompt("Nhập số tiền "));

let a = X / 100000;
if ( a > 10 && a < 100) {
    console.log(`có ${a} tờ 100 000 nghìn`);
} else if ( a < 10 && a > 0)