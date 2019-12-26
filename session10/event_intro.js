// document.getElementById('event-test').onclick = function() {
//     alert("Click registed by JS") ;
//     clickTest();
// }

// function clickTest () {
//     console.log("Click by new function ");
// }

// let clickTest2 = function() {
//     console.log("Click by new function 2") ;
// }
// document.getElementById('event-test').onclick = clickTest;
// document.getElementById('event-test').onmousedown = clickTest2;


// function clickTest3(){
//     alert("Click by new function 3");   
// }
// function changeLanguage() {
//     document.getElementById('event-test4').innerHTML = 'xin chào C4E 58' ;
// }
// function getNow() {
//     document.getElementById('event-test5').innerHTML = new Date();
// }

// let countClick = 0;
// function countUserClick() {
//     //document.getElementById('count-click').innerHTML = ++countClick ;
//     document.getElementById('count-click').innerHTML = Number(document.getElementById('count-click').innerHTML) + 1 ;  
// }

// function buttonClick(e) {
//    // alert("button Clicked")
//    //document.getElementById('event-test').style.color ="blue";
//    //document.getElementById('event-test').style.backgroundColor ="red";
//    //document.getElementById('event-test').className = "text-primary bg-success";
//    //document.getElementById('event-test').style.display = "none";
//    //document.getElementById('event-test').remove();
//    console.dir(e.innerHTML);
//    e.remove();
// } 

// //document.getElementById('event-test').onclick = 
// function eventClick6(globalEvent, event) {
//     console.dir(globalEvent);
//     console.dir(event);
// }
let foods = ["Phở", "Cơm", "Bún"];
function display(){
    let ul = document.getElementById("food");
    ul.innerHTML = '' ;
    for (let i = 0; i < foods.length; i++) {
        const element = "<li>" + foods[i] + "</li>";
        ul.innerHTML += element;
    }
}  
display();  

function submit() {
    let inputText = document.getElementById('input-text').value;
    foods.push(inputText);
    document.getElementById('input-text').value = '' ;
    display();  
}
function submitByEnter(e) {
    console.log(e);
    if (e.keyCode === 13) {
        submit();
    }
}
