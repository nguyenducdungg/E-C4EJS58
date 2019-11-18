// let passWord = prompt("Nhập mật khẩu") ;

// let doDaiMatKhau = passWord.length ;
// if(doDaiMatKhau < 8 ) {
//     alert("Mật khẩu của bạn phải chứa đủ 8 ký tự");
// } else {
//     alert("Mật khẩu hợp lệ");
    
// }


// let thang = parseInt(prompt("Nhập vào 1 tháng trong năm")) ;
// if(thang < 0 || thang > 12) {
//     alert("tháng không hợp lệ") ;
// } else if (thang == 1 
//         ||thang===3
//         ||thang===5 
//         ||thang ===7
//         ||thang ===8
//         ||thang===10
//         ||thang===12) {
//     alert("Tháng có 31 ngày") ;
// } else if (thang == 4
//     ||thang===6 
//     ||thang === 9 
//     || thang===11) {
//     alert ("Tháng có 30 ngày") ;
// } else  if (thang == 2) {
//     alert ("Tháng có 29 ngày") ;
// }  
let thang = parseInt(prompt("Nhập vào 1 tháng trong năm")) ;

switch(month) {
    case 1 :
    case 3 :
    case 5 :
        alert ("31 ngày") ;
        break ;
    case 2 :
        alert ("28 ngày hoặc 29 ngày") ;
        break;    
}   