// let dsTen = ["Hung", "Dung", 'Quang'];
// // console.log(dsTen);
// // console.log(dsTen.length);
// // console.log(dsTen[0]);

// for (let index = 0; index < dsTen.length; index++) {
//     const element = dsTen[index];
//     console.log(`${index+1} : ${element}`);
// }
// let numbers = [1,2,3,4,5] ;
// let sum = 0 ;
// for (let index = 0; index < numbers.length ; index++) {
//     sum += numbers[index];
// }
// console.log(sum);
// //2
// let test = parseFloat(sum/ numbers.length);
// console.log(`giá trị trung bình : ${test}`);
// //3
// let lessThanAvg = "";
// for (let index = 0; index < numbers.length; index++) {
//    if (numbers[index] < test) {
//        lessThanAvg += numbers[index] + ";";
//    }
// }
// let  S = lessThanAvg.substring(0,lessThanAvg.length-1)
// console.log(S);

// //4
// let N = Number(prompt("Nhập N"));
// for (let index = 0; index < numbers.length; index++) {
//     if ( N === numbers[index]) {
//         console.log(numbers[index]);
//     }
// }
// sum1=0 ;
// numbers.push(6,7);
// for (let index = 0; index < numbers.length; index++) {
//     sum1 += numbers[index];
// }
// let tb = parseFloat(sum /numbers.length);
// console.log(`giá trị trung bình mới : ${tb}`);

// // 6
// numbers.splice(numbers.length - 4, numbers.length ) ;
// sum2 = 0 ;
// for (let index = 0; index < numbers.length; index++) {
//     sum2 += numbers[index] ;
// }
// let avg = parseFloat(sum2 / numbers.length ) ;
// console.log(`giá trị trung bình : ${avg }`);

// //7 
// let maxValue = numbers[0] ;
// let minValue = numbers[0] ;
// for (let index = 1; index < numbers.length; index++) {
//    if(maxValue < numbers[index]) {
//        maxValue = numbers[index] ;
//    }
// }
// for (let index = 1; index < numbers.length; index++) {
//     if (numbers[index] < minValue) {
//         minValue = numbers[index] ;
//     }
// }
// console.log(`giá trị lớn nhất ${maxValue}`);
// console.log(`giá trị nhỏ nhất ${minValue}`);

//8 sắp xếp mảng theo thứ tự tăng dần , giảm dần .

let names = ["Phạm Văn A" , "Nguyễn Thị B"] ;
// 1. thêm tên mới , hỏi người dùng tên
// thêm tên này vào mảng.
// 2. In mảng ra theo cấu trúc : Stt, tên
let newName = prompt("Bạn muốn thêm tên")
names.push(newName);
for (let index = 0; index < names.length; index++) {
    console.log(`${index +1} : ${names[index]}`);
}

// //3. Hỏi người dùng STT muốn sửa, và tên mới muốn sửa
// // sửa tên trong mảng tại đúng vị trí
// // In lại mảng theo cấu trúc

// let soThuTu = parseInt(prompt("Nhập số thứ tự muốn sửa"));
// if (soThuTu > 0 && soThuTu < names.length) {
//     let newName2 = prompt("Nhập tên mới muốn sửa") ;
//     names[soThuTu] = newName2 ;
//     for (let index = 0; index < names.length; index++) {
//         console.log(`${index +1} : ${names[index]}`);
//     }

// } else {
//     alert("Sai số thứ tự");
// } 


// // 4. Hỏi người dùng Stt cần xóa , xóa tên tại Stt này.
// // In lại mảng theo cấu trúc.

// let deleteName  = prompt("Nhập số thứ tự cần xóa");
// if (deleteName < 0 && deleteName > names.length) {
//     names.splice(deleteName-1 , 1) ;
//     for (let index = 0; index < names.length; index++) {
//         console.log(`${index +1} : ${names[index]}`);
//     } 
// } else {
//     alert("Nhập lại số thứ tự") ;
// }

//5. Hỏi 1 tên, kiểm tra xem mảng có tên này không ? 
let whatName = prompt("Tên bạn muốn kiểm tra") ;
let isExist = false ;
for (let index = 0; index < names.length; index++) {
    const element = names[index];
    isExist = element.toLowerCase.includes(whatName.toLowerCase) ;
    if (whatName === element ) {
        console.log("có tên này");
        
    } else {
        console.log("không có tên này");
    }
}

//6. Hỏi 1 tên, tìm tất cả tên chứa từ này
// let whatName1 = prompt("Tên bạn muốn kiểm tra");
// let rusult = [];





//7. sắp xếp tên.

