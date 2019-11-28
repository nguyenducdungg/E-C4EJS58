// let myInfor = { 
//     "name" : "Hung" ,
//     "age" : 20 ,
//     favorite : ["coding, watching"] ,
// }
//     console.log(myInfor);
//     console.log(myInfor["name"]); // cách 1 
//     console.log(myInfor.age);
//     let key = "favorite" ;// cách 3 ~ cách 1
//     console.log(myInfor[key]);
    
// delete myInfor.favorite ;    
// console.log(myInfor);
    
// for (const key in myInfor) {
//     if (myInfor.hasOwnProperty(key)) {
//         const element = myInfor[key];
//         console.log(key + ": " + element);
//     }
// }

//------------- Bài tập ----------------------

/*  1. Khởi tạo 1 object : Person rỗng 
cho người dùng nhập vào 3 key và value
thêm các cặp key- value này vào Person
In lại ra màn hình theo cú pháp : key : value 


2. Sửa, cho người nhập vào key cần sửa,
kiểm tra nếu key đúng thì cho nhaaoj giá trị mới vào update
In lại person ra màn hình. ngược ại thông báo không tồn tại key


3.Xóa ,  cho nhập key, xóa key tương ứng nếu tồn tại , không có thông báo không tồn tại key

4. Trong các trường hợp nhập key để sửa và xóa trên, nghĩ cách để cho người dùng nhập đến khi nào đúng thì mới
thực hiện nhiệm vụ.

*/
// let person = {};

// for (let index = 0; index < 3; index++) {
//     let  key = prompt(`Nhập key ${index +1 }`) ;
//     let value = prompt (`Nhập value ${index +1}`)
//     person[key] = value ;
//     console.log(key + ": " + value);
// }

// let keyEdit = prompt("Nhập key cần sửa") ;

// while(!person.hasOwnProperty(keyEdit)) {
//     keyEdit = prompt("Nhập lại key");
// }

// if (person.hasOwnProperty(keyEdit)) {
//     let newValue = prompt("Nhập value mới") ;
//     person[keyEdit] = newValue ;    
//     console.log("--------sau khi sửa-------------");
//     for (const key in person) {
//         if (person.hasOwnProperty(key)) {
//             const element = person[key];
//             console.log(key + ": " + element);
//         }
//     }
// } else {
//     console.log("không tồn tại key");
// }   


// //4 
// // let keyExisted = prompt("Nhập key") ;
// // while(!person.hasOwnProperty(keyExisted)) {
// //     keyExisted = prompt("Nhập lại key");
// // }

// ---------------------------Bài tập---------------------------
//1.tạo danh sách 3 điện thoại(tên, giá, nhà sản xuất) .    

    
let listPhone = [
    {
        name : "iphone X" ,
        price : 20e6 ,
        brand : 'Apple',
    },
    {
        name : "iphone 7" ,
        price : 10e6 ,
        brand : 'Apple',
    },
    {
        name : "iphone 8" ,
        price : 15e6 ,
        brand : 'Apple',
    },
]
for (let i = 0; i < listPhone.length; i++) {
    const phone  = listPhone[i];
    console.log(`${i+1}.`);
    
    for (const key in phone) {
        const value = phone[key];
        console.log(key + ":" + value );
            
    }
    console.log('---------------------');
}
let searchName = prompt("Bạn muốn tìm  kiếm ") ;
while(searchName.includes("  ")) {
    searchName = searchName.replace("  " , " ") ;
}
console.log(`----------Kết quả tìm kiếm "${searchName}" :`);

for (let i = 0; i < listPhone.length; i++) {
    const phone = listPhone[i];
    if (phone.name.toLowerCase().includes(searchName.toLowerCase())) {
        console.log(phone);
    }
}

//Thêm 
// Sửa 
// Xóa

// Tìm theo giá

let pricePhone = Number(prompt("Bạn muốn tìm điện thoại tầm giá:"));
for (let i = 0; i < listPhone.length; i++) {
    const phone = listPhone[i];
    if (phone.price === pricePhone ) {
        console.log("---------Điện thoại bạn cần tìm ");
        console.log(phone);
    } else {
        
    }
}

// let brandPhone = prompt("Bạn muốn tìm điện thoại hãng:") ;
// for (let i = 0; i < listPhone.length; i++) {
//     const phone = listPhone[i];
//     if (phone.brand === brandPhone ) {
//         console.log("---------Điện thoại bạn cần tìm ");
//         console.log(phone);
//     }
// }

