// for (let index = 0; index < 6; index++) {
//     console.log(index);
// }

// Nhập vào 1 số N in ra màn hình các số từ 0 đến N
// in ra các số từ 1 - N;
//let N = Number(prompt("Nhập số N")) ;
// for (let index = 0; index <= N; index++) {
//     console.log(index);
    
// }
// // Nhập vào M , N , in ra các số từ M- N ;
// let M = Number(prompt("Nhập M"));
// for (let index = M; index <= N; index++) {
//     console.log(index);
// }
// // Nhập vào N , in ra màn hình từ N - 0

// for (let index = N; index >= 0; index --) {
//     console.log(index);
// }
// // In ra các số chẵn từ 0 - N

// for (let index = 0; index <= N; index+=2) {
//     //if(index % 2 === 0) {
//         console.log(index);
//     //}
// }
//let sum = 0;
// for (let index = 1; index <= N; index++) {
//     sum += index;
// }
// console.log(sum);

// for (let index = 1; index <= N; index += 2) {
//     sum+= index ;
// }
// console.log(sum);

// for (let index = 1; index <= N; index++) {
//     sum += 1/index ;
// }
// console.log(sum);
// let sum2 = 0 ;
// for (let index = 2; index <= N; index++) {
//     sum2 += 1/(index * (index - 1)) ;

// }
// console.log(sum2);
// let sum3= 0 ;
// for (let index = 1; index < N; index++) {
//     sum3 +=  index/(index +1) ;
// }
// console.log(sum3);
// let giaiThua = 1 ;
// for (let index = 1; index <=  N; index++) {
//     giaiThua = giaiThua * index ;
// }
// console.log(giaiThua);

// let term = 1 ;
// let sum = 0;
// for (let index = 1; index <= N; index++) {
//     term *= index ;
//     sum += term ;
// } 
// console.log(sum);

// let n = 10 ;
// let i = 0 ;
// while (i < n) {
//     console.log(i);
//     i++;
// }

// let passWord = prompt("Nhập mật khẩu");
// while(passWord.length < 8 ) {
//     passWord = prompt("Yêu cầu nhập mật khẩu có ít nhất 8 ký tự") ;
// } 
// console.log(passWord);

// let N = Number(prompt("Nhập N"));
// while(N <= 10 ) {
//     N = prompt("Nhập N > 10") ;
// } 
// console.log(N);
// let user = prompt("Nhập user");
// let passWord = prompt("Nhập passWord");
// while(user !== "admin" || passWord !== "123456") {
//     user = prompt("Nhập lại user") ;
//     passWord = prompt("Nhập lại passWord");
// }
// console.log("Đăng nhập thành công");

// let pass = prompt("Nhập mật khẩu") ;
// while (!pass.includes('@')) {
//     pass = prompt("Mật khẩu phải chứa ký tự @");
// }
// console.log(pass);

// let pass = prompt("Nhập mật khẩu") ;
// while(pass.length <= 8 || !pass1.includes('@')) {
//     pass = prompt("Mật khẩu cần phải lớn hơn 8 ký tự và chứ ký tự @");
// }
// console(pass);



// break , continue

// for (let index = 0; index < 10; index++) {
//     if (index % 2 === 1) {
//         //break ;
//         continue;
//     }
//     console.log(index);
// }

// Nhập N - kiểm tra số nguyên tố

let N = Number(prompt("Nhập N"));
let  count = 0 ;
for (let index = 1; index <= N; index++) {
    if(N % index === 0 ) {
        count ++ ;
    }
    if (count > 3) {
        break ;
    }
}
if (count == 2) {
    console.log("N là số nguyên tố");
} else {
    console.log("N không là số nguyên tố");
}





