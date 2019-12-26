// function welcome () {
//     print("Hello world");
// }   

// welcome(); // gọi sử dụng function ;
// welcome();  
// welcome(); 

// let xinChao = function () {
//     print("Xin chào");
    
// }

// xinChao();

// function sum (a,b) {
//     print(`Tổng 2 số là ${a + b}`);
// }

// sum(10,20);
// let number1 = 10 ;
// let number2 = 20 ;
// sum(number1,23,21);

// function  hieu (a,b,c) {
//     print(`Hiệu 3 số ${a-b-c}`);
    
// }
// hieu(5,10,15) ;
// function print (message) {
//     console.log(message);
// }
// function sum1(a,b) {
//     return a + b ;
// }
// let tinhTong = sum1(number1, number2) ;
// print(tinhTong);


// chỉ số BMI, nhập vào chiều cao và cân nặng 
// in ra màn hình trạng thái của người dùng


// let hight = Number(prompt("Nhập vào chiều cao "));
// let weight = Number(prompt("Nhập vào cân nặng")) ;
// function BMI(hight, weight) {
//     console.log(hight, weight);
// }
 


//1. Đảo ngược chuỗi
// ví dụ : "Hello"
// function reverseString (string) {
//     return string.split("").reverse().join("");
// }

// function reverseString(string) {
//     let temp = ``;
//     for (let index = 0; index < string.length; index++) {
//         const element = string[index];
//         temp += element ;

//     }
//     return temp ;
// }
// let nhapChuoi = prompt("Nhập chuỗi") ;

// Bài 2 
 let chickenList = [
     {
         id : 001,
         weight : 2.1
     },
     {
         id : 002 , 
         weight : 2.2
     },
     {
         id  :003,
         weight : 2.3
     },
     {
         id  :004,
         weight : 2.4
     },
     {
         id : 005 ,
         weight : 2.5
     },
 ]
//2.2
// let max = chickenList[0];
// let stt = 0 ;
// for (let index = 1; index < chickenList.length; index++) {
//     if(max.weight < chickenList.weight) {
//         max = chickenList[index];
//         stt = index ;
//     }
// }
// console.log(`con gà có cân nặng lớn nhất có số thứ tự ${stt + 1}`);
// console.log(`cân nặng ${max}`);

// function removeRandomChicken (chickens) {
//     let random ; // 0 <= random < chickens.lenght ;

//     // hàm Math.floor () làm tròn giảm , 
//     // hàm Math.ceil () làm tròn tăng ;
//     // hàm Math.round () làm tròn..... 5,7 -> 6 ; 5,1 ---> 5
//     random = Math.floor(Math.random() * chickens.length) ;
//     let chickenH5N1 = chickens[random] ;
//     console.log(`con gà bị H5N1 là :`);
//     console.log(chickenH5N1);
//     chickens.splice(random,1);

// }
// removeRandomChicken(chickenList);
// removeRandomChicken(chickenList);
// removeRandomChicken(chickenList);
// console.table(chickenList);


// function sumWeight (chickens) {
//     let sumWeight = 0 ;
//     for (let index = 0; index < chickenList.length; index++) {
//         sumWeight += chickenList[index].weight ;
//     }
//     return sumWeight ;
// }
// Number(console.log(sumWeight(chickenList)));


function changgeValue (a) {
    a = 10 ;
    console.log("Trong function changeValue : a =" + a);
}

let number = 20;
changgeValue(number);
console.log(number); // 10 or 20 ->> 20.

function changeValue2 (o){
    o.age = 10;
    console.log("Trong function changeValue : age = ");
    console.log(o); // 10
}
let person = {
    age : 20 
};

changeValue2(person) ;
console.log(person); // 10

let a = 20 ;
let b =  a ;
b= 10 ;
let array = [{},{},{}] ;
let array2 = [];
let person = {};
for (let index = 0; index < array.length; index++) {
    array2.push(array[index]);
    
}
array2.pop() // array.pop();
array2[0].age = 20 ;
let array3 = JSON.parse(JSON.stringify(array));