// let name = "Dung" ;

// console.log(name);

// let jsonName = JSON.stringify(name) ;
// console.log(jsonName);

// let age = 20 ;
// console.log(age);
// let jsonAge = JSON.stringify(age);
// console.log(jsonAge);

// let isRain = true ;
// console.log(isRain);
// let jsonIsRain = JSON.stringify(isRain) ;
// console.log(jsonIsRain);

// let favorive = ['Html' , 'Css', 'Javascript'];
// console.log(favorive);
// let isfavorite = JSON.stringify(favorive);
// console.log(isfavorite);


// let myInfor = {
//     'name' : "Hung",
//     'age' : 20 ,
//     'favorite' : ["hmtl", 'css','Javascript']
// };
//     console.log(myInfor);
 
//     let isMyInfor = JSON.stringify(favorive);
//     console.log(isMyInfor);



// console.log("================== Json parse  ====================");
// let json = '[{"food\":\"cơm\", \"price\ " : 20000}, {"food" : "Phở", "price": 30000 }]';
// let data = JSON.parse(json);
// console.log(data);
// console.log(data.pop());
// console.log(data);



var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // document.getElementById("demo").innerHTML = this.responseText;
        let data = JSON.parse(this.responseText);
        document.getElementById('Now').innerHTML = data.date ;
        document.getElementById('temperature').innerHTML = data.temperature + "&deg;" + data.unit ;
        document.getElementById('condition').innerHTML = data.condition ;
        document.getElementById('humidity').innerHTML = data.humidity ;
        
    }
};
  xhttp.open("GET", "https://weather-data-demo.herokuapp.com/get-weather-today", true);
  xhttp.send();