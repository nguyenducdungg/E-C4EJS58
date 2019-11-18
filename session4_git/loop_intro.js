// for (let index = 0; index < 6; index++) {
//     console.log(index);
// }

// Nhập vào 1 số N in ra màn hình các số từ 0 đến N
// in ra các số từ 1 - N;
let N = Number(prompt("Nhập số N")) ;
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
let sum2 = 0 ;
for (let index = 2; index <= N; index++) {
    sum2 += 1/(index * (index - 1)) ;

}
console.log(sum2);
let sum3= 0 ;
for (let index = 1; index < N; index++) {
    sum3 +=  index/(index +1) ;
}
console.log(sum3);


