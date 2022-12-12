//Toán tử Logic
var a = 1;
var b = 2;
if (!(a < 0)) {
  console.log("TRUE");
} else {
  console.log("FALSE");
}

if (a > 0 && b > 0) {
  console.log("TRUE");
} else {
  console.log("FALSE");
}

if (a > 0 || b < 0) {
  console.log("TRUE");
} else {
  console.log("FALSE");
}

/*Kiểu dữ liệu trong JS
1. Primitive Data
    - Number
    - String
    - Boolean
    - Undefined
    - Null
    - Symbol
2. Complex Data
    - Function
    - Object        
*/

//Number
var a = 1;
var b = 2.5;
console.log(typeof a , typeof b)
//String
var fullName = "LQC";
var fullName1 = "Lê Quốc'Cường";
console.log(fullName);
console.log(fullName1);
console.log(typeof fullName , typeof fullName1)
//Boolean
var isSuccess = true;
console.log(typeof isSuccess)
//Undefined
var age;
console.log(age);
console.log(typeof age);
//Null
var isNull = null; //notthing
console.log(isNull);
console.log(typeof isNull);
//Symbol
var id = Symbol("id"); // unique
var id1 = Symbol("id"); // unique
console.log(id == id1);
console.log(typeof id);
//Function
var myFunction = function () {
  var a = 1;
  var b = 2;
  if (!(a > 0)) {
    console.log("TRUE");
  } else {
    console.log("FALSE");
  }

  if (a < 0 && b > 0) {
    console.log("TRUE");
  } else {
    console.log("FALSE");
  }

  if (a > 0 || b < 0) {
    console.log("TRUE");
  } else {
    console.log("FALSE");
  }
};
myFunction();
console.log(typeof myFunction);
//Object
var myObject = {
    name: 'Cuong Le',
    age: 24,
    adress:'Nghe An'
    /*myFunction: function () {
        alert('Hello các bạn')
    }*/
};
console.log(myObject);
console.log(typeof myFunction);
var myArray = [
    'JS',
    'PHP',
    'RUBY',
];
console.log(myArray)
console.log(typeof myArray);

/*
Toán tử so sánh 
==      -->     Bằng
!=      -->     Không bằng
>       -->     Lớn hơn 
<       -->     Bé hơn
>=      -->     Lớn hơn hoặc bằng
<=      -->     Bé hơn hoặc bằng
So sánh  tuyệt đối
===     -->     Bằng 
!==     -->     Không bằng 
*/

var a = 1;
var b = '1';

if(a == b){
    console.log ('true');
}else{
    console.log ('false')
}

if(a === b){
    console.log ('true');
}else{
    console.log ('false')
}

if(a != b){
    console.log ('true');
}else{
    console.log ('false')
}

if(a !== b){
    console.log ('true');
}else{
    console.log ('false')
}

