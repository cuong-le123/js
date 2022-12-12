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


//Hiểu  hơn về câu lệnh điều kiện và phép so sánh
/*Trong JS có 6 giá trị sẽ chuyển đổi qua Boolean có kết quả là false:
    - Giá trị 0
    - false
    - Chuỗi rỗng: '' và ""
    - undefined
    - NaN
    - null
còn lại chuyển đổi qua Boolean có kết quả là true    
*/
var a = 1; 
var b = 2;

var result = a<b;
console.log('result:' , result);

var result1 = a<b && a<0 ;
console.log('result1:' , result1);

var result2 = 'A' && 'B';
console.log('result2:' , result2);
/*Khi đó JS kiểm tra từ trái sang phải khi kiểm tra từ trái thì nếu giá trị không thuộc 6 giá trị trên thì sau đó  
lấy giá trị phải gán vào result nếu có giá trị thuộc 6 giá trị trên thì sẽ lấy giá trị đó và không kiểm tra các phần tử sau  */ 

var result3 = null || 0 || NaN || 'D';
console.log('result3:' , result3);
if(result3){
    console.log('True');
}else{
    console.log('False');
}
/*Khi đó JS kiểm tra từ trái sang phải nếu phần tử đầu tiên không thuộc 6 giá trị trên thì nó sẽ lấy giá trị đó  và không kiểm tra các phần tử sau đó 
nếu phần tử đầu tiên  thuộc 6 giá trị trên thì nó sẽ lấy giá trị tiếp theo và không kiểm tra các phẩn tử sau đó 
nếu tất cả các phần tử thuộc vào 6 giá trị trên thì biểu thức đó là sai */

/*
CHUỖI TRONG JS
1. Tạo chuỗi 
    - Các cách tạo chuỗi 
    - Nên sử dụng cách nào? Lý do?
    - Kiểm tra data type
2. Một số case sử dụng backslash (\)
3. Xem độ dài chuỗi
4. Chú ý độ dài khi viết code
5. Template string ES6
*/

/*  Tạo Chuỗi
    Có 2 cách tạo chuỗi 
    Cách 1: Khuyên dùng */
var fullName2 = 'Lê Quốc Cường';
console.log(fullName2);
//  Cách 2:
var fullName3 = new String('Lê Quốc Cường');
console.log(fullName3);

/*2. Một số case sử dụng backslash (\)
(backslash in JS) */
var fullName4 = 'Quốc Cường \'SuperMan\'';
console.log(fullName4);

