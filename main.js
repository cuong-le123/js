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

/*
Kiểu dữ liệu trong JS
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
//3. Kiểm tra độ dài chuỗi 
console.log('Độ dài chuỗi:',fullName4.length);

/*4. Chú ý độ dài khi viết code
Độ dài khi viết code tối đa 80 ký tự hoặc sử dụng nối chuỗi*/

var fullName5 =
'Quốc Cường \'SuperMan\''
+ 'Quốc Cường \'SuperMan\''
+ 'Quốc Cường \'SuperMan\''
+ 'Quốc Cường \'SuperMan\'';

console.log(fullName5);

/*5. Template string ES6*/

var firstName = 'Cường';
var lastName = 'Lê';

console.log(`Tôi là: ${firstName} ${lastName}`);

/*
LÀM VIỆC VỚI CHUỖI
1. Length
2. Find index
3. Cut string
4. Replace
5. Convert to upper case
6. Convert to lower case
7. Trim
8. Split
9. Get a character by index
*/
// Keyword: Javascript string methods

var myString = '   Le Quoc Cuong Le Quoc Cuong Le Quoc Cuong'   ;

//1.Length: Đo độ dài chuỗi 
console.log(myString.length);
//2. Find index: Tìm vị trí của một ký tự trong chuỗi 
console.log(myString.indexOf('Quoc'));
//Lưu ý: 
//- Nếu ký tự trong chuỗi không có thì nó sẽ trả về giá trị là -1
console.log(myString.indexOf('ABC'));
//- indexOf chỉ kiếm ký tự đầu tiên trong chuỗi mà nó tìm được 
console.log(myString.indexOf('Quoc', 4));
//- Nếu muốn tìm ký tự cuối cùng ở trong chuỗi thì chúng ta sử dụng lệnh lastIndexOf
console.log(myString.lastIndexOf('Quoc'));
//search
console.log(myString.search('Quoc'));
//3. Cut string: Cắt Chuỗi
console.log(myString.slice(0, 13));
//Lưu ý:
// Chúng ta có thể cắt từ phải qua trái nhưng tham số phải nhập là số âm
console.log(myString.slice(-19, -14))
//4. Replace: ghi đè lên chuỗi
console.log(myString.replace('Cuong','Huy'));
//Lưu ý:
// Nếu sử dụng cú pháp như trên thì chúng chỉ thay thế ký tự đầu tiên nó tìm được và chúng không thay thế các ký tự sau.
// Khi đó chúng ta sử dụng cú pháp sau:
console.log(myString.replace(/Cuong/g, 'Huy'));
// Với cú pháp này chúng ta đã khắc phục vấn đề trên 
//5. Convert to upper case: Chuyển đổi tất cả chỗi thành chữ hoa
console.log(myString.toUpperCase());
//6. Convert to lower case: Chuyển đổi tất cả chỗi thành chữ thường
console.log(myString.toLowerCase());
//7. Trim: xử lý dữ liệu được nhập vào 
console.log(myString.trim());
//8. Split: cắt một chuỗi thành 1 array dựa vào điểm chung 
var languages ='C++, C#, Ruby, PHP'
console.log(languages.split(', '));
var ten = 'CUONG';
console.log(ten.split(''));
//9. Get a character by index: lấy 1 ký tự bởi một index cho trước 
const ten1 = 'Cuong Le';
console.log(ten1.charAt(1));
console.log(ten1[2]);

/*
Kiểu số (Number) trong Javascript
1. Tạo giá trị Number
  - Các Cách tạo
  - Dùng cách nào? Tại sao?
  - Kiểm tra data type
2. Làm việc với Number
  - To string
  - To Fixed  
Keyword: Javascript number methods
*/
//1. Tạo giá trị Number
//Các Cách tạo number

//cách 1: (khuyên dùng)
var age1 = 18 ;
var PI = 3.14 ;
//cách 2:
var otherNumber = new Number(9);
// Kiểm tra data type
console.log(typeof age1);
//Lưu ý: Khi sử dụng phép toán không hợp lệ thì nó sẽ trả về là NaN ( NaN biểu diễn 1 số không hợp lệ vì kiểm tra typeof nó sẽ ra là number)
var number1 = 20/'abc';
var number2 = 100/1;
console.log('Kết quả là:' , number1);
console.log('Kiểu dữ liệu là:' , typeof number1);
// Cách kiểm tra NaN
console.log('number1 có phải là NaN không?',isNaN(number1));
console.log('number2 có phải là NaN không?',isNaN(number2));
//2. Làm việc với Number
//To string: chuyển đổi từ kiểu số sang kiểu String
var age2 = 10;
console.log(age2);
console.log('Kiểu dữ liệu của age2 là:',typeof age2);
console.log(age2.toString());
console.log('Kiểu dữ liệu của age2 là:',typeof age2.toString());

//To fixed: làm tròn số
//Lưu ý:
//- với giá trị thập phân < 5 thì sẽ làm tròn xuống
//- với giá trị thập phân >= 5 thì sẽ làm tròn lên
var number3 = 3.4;
var number4 = 3.5;
console.log('number3:',number3);
console.log('number4:',number4);
console.log('Số number3 sau khi được làm tròn là:',number3.toFixed());
console.log('Số number4 sau khi được làm tròn là:',number4.toFixed());


var number5 = 123.123456789
console.log('Số sau khi được làm tròn là:',number5.toFixed(3));
//console.log(number5.toFixed(3)); là chỉ lấy 3 số sau phần thập phân

/*
Mảng trong JS (Array)
1. Tạo Mảng
  - Cách tạo
  - Sử dụng cách nào? Tại sao?
  - Kiểm tra data type (type of)
2. Truy xuất mảng
  - Độ dài mảng
  - Lấy phần tử theo index
*/
//1. Tạo Mảng
//- Cách tạo
// Cách 1: (khuyên dùng)
var languages1 = [
  'JS',
  'PHP',
  'RUPY',
  'DART',
  null,
  undefined,
  function(){

  },
  {},
  123,
];

console.log(languages1);
//Cách 2:
var languages2 = new Array(
  'JS',
  'PHP',
  'RUPY',
  'DART',
  null,
  undefined,
  function(){

  },
  {},
  123,
);

console.log(languages2);

//cách kiểm tra
console.log(Array.isArray(languages1));

//2. Truy xuất mảng
//- Độ dài mảng
console.log('Độ dài mảng languages1 là:',languages1.length);
//- Lấy phần tử theo index
console.log(languages1[3]);

/*
Làm việc với mảng

1. To string
2. Join
3. Pop
4. Push
5. Shift
6. Unshift
7. Splicing
8. Concat
9. Slicing
Keyword: Javascript array methods
*/


//1. To string
var languages3 = [
  'JS',
  'PHP',
  'RUPY',
  'DART',
];
console.log(languages3.toString());
console.log(typeof languages3.toString());
//2. Join
var languages4 = [
  'JS',
  'PHP',
  'RUPY',
  'DART',
];
console.log(languages4.join(', '));
//3. Pop: Xóa element cuối mảng và trả về phần tử đã xóa
var languages5 = [
  'JS',
  'PHP',
  'RUPY',
  'DART',
];
console.log('Phần tử đã xóa là:',languages5.pop());
console.log(languages5);
//4. Push: Thêm phần tử vào cuối mảng
var languages6 = [
  'JS',
  'PHP',
  'RUPY',
  'DART',
];
console.log(languages6.push('C++','C#'));
console.log(languages6);
//5. Shift: Xóa element đầu mảng và trả về phần tử đã xóa
var languages7 = [
  'JS',
  'PHP',
  'RUPY',
  'DART',
];
console.log('Phần tử đã xóa là:',languages7.shift());
console.log(languages7);
//6. Unshift: Thêm phần tử vào đầu mảng
var languages8 = [
  'JS',
  'PHP',
  'RUPY',
  'DART',
];
console.log(languages8.unshift('C++','C#'));
console.log(languages8);
//7. Splicing
//- Xóa
var languages9 = [
  'JS',
  'PHP',
  'RUPY',
  'DART',
];
languages9.splice(1, 2);
console.log(languages9);
//- Chèn
var languages10 = [
  'JS',
  'PHP',
  'RUPY',
  'DART',
];
languages10.splice(1, 0,'C++','C#' );
console.log(languages10);
//8. Concat: nối mảng
var languages11 = [
  'JS',
  'PHP',
  'RUPY',
  'DART',
];

var languages12 =[
  'C++',
  'C#',
];

console.log(languages11.concat(languages12));
console.log(languages12.concat(languages11));
//9. Slicing: Cắt toàn bộ hoặc 1 vài element
var languages13 = [
  'JS',
  'PHP',
  'RUPY',
  'DART',
  'C++',
  'C#',
];

console.log(languages13.slice(1, 2));

/*
Hàm (function) trong JS
1. Hàm là gì?
  - Một khối mã 
  - Làm 1 việc cụ thể

2. Các loại hàm 
  - Built-in
    + Alert
    + Console
    + Confirm
    + Prompt
    + setTimeout
    + setInterval
  - Tự định nghĩa

3. Tính chất
  - Không thực thi khi định nghĩa 
  - Sẽ thực thi khi được gọi
  - Có thể nhận tham số
  - Có thể trả về một giá trị

4. Tạo hàm đầu tiên
*/

//Tạo hàm đầu tiên
//Quy tắc đặt tên: có thể sử dụng a-z A-Z 0-9 _ $ 
//Lưu ý: không được đặt chữ số ngày đầu tiên

function showDialog(){
  alert('Xin Chào Các Bạn Đến Với JAVASCRIPT BASIC ')
}

showDialog();

/*
  Tham số hàm
1. Tham số?
  - Định nghĩa?
  - Kiểu dữ liệu?
  - Tính private?
  - 1 tham số 
  - Nhiều tham số

2. Truyền tham số 
  - Truyền 1 tham số
  - Truyền nhiều tham số

3. Arguments?
  - Đối tượng 
  - Giới thiệu vòng for of
*/ 

//Kiểu dữ liệu?
function showDialog1(name){
  console.log(name);
}

showDialog1('Cường');//

function showDialog2(number){
  console.log(number);
}
//Truyền 1 tham số 
showDialog2(123);

function showDialog3(array){
  console.log(array);
}

showDialog3(['A','B','C']);
//Truyền nhiều tham số
function showDialog4(array1, array2){
  console.log(array1);
  console.log(array2);
}

showDialog4(['A','B','C'],['D','E','F']);

//Arguments

function showDialog5(){
  console.log(arguments);
}

showDialog5(['A','B','C'],['D','E','F']);

//Vòng for of
function showDialog6(){
  var myString1 ='';
  for (var param1 of arguments){
      myString1 += `${param1}-`
  }
  console.log(myString1)
}

showDialog6(['A','B','C'],['D','E','F'],['G','K','L'], 1, 2, 3, 4);

//Return trong hàm 
var isConfirm = confirm('Hello?');
console.log('Kết Quả (true = ok, false = cancel): ',isConfirm);

function plus (a, b){
  return a + b;
}
var result4 = plus(8, 8);
console.log('Kết quả của phép cộng là: ',result4);

/*
Một số điều cần biết về function

1. Khi đặt cùng tên thì hàm định nghĩa sau được ưu tiên
2. Có thể khai báo biến trong hàm 
3. Định nghĩa hàm trong hàm
*/

//1. Khi đặt cùng tên thì hàm định nghĩa sau được ưu tiên
function showDialog7(){
  console.log('Số được in ra là: 1');
}

function showDialog7(){
  console.log('Số được in ra là: 2');
}

function showDialog7(){
  console.log('Số được in ra là: 3');
}

showDialog7();

//2. Có thể khai báo biến trong hàm 
function showDialog8(){
  var myString2 ='Cường Lê';
  console.log(myString2)
}

showDialog8();

//3. Định nghĩa hàm trong hàm

function showDialog9(){
  function showDialog10(){
    console.log('Lê Quốc Cường');
    function showDialog11(){
      console.log('Lê Quốc Cường1');
    }
    showDialog11();
  }
  showDialog10();
}
showDialog9();

/*Các loại function
1. Declaration
2. Expression
3. Arrow 
*/

//1. Declaration

function showDialog12(){
  var myString2 ='Cường Lê';
  console.log(myString2)
}

showDialog12();

//2. Expression

var showDialog13 = function testName(){

}

setTimeout(function testName(){

});

var myObject1 = {
  myFunction1: function testName(){

  }
}

/*
Polyfill
*/

if (!Array.prototype.includes) {
  Array.prototype.includes = function (search, start) {
    'use strict';
    if(search instanceof RegExp){
      throw TypeError('first argument must not be a RegExp')
    }
    if (start === undefined){ start = 0;}
    return this.indexOf(search, start) !== -1
  };
}

if (!String.prototype.includes) {
  String.prototype.includes = function includes(searchElement) {
    return this.indexOf(searchElement) !== -1
  }
}

//object
var heigthKey = 'heigth';

var myInfo = {
    name: 'Quoc Cuong',
    age3: 25,
    address: 'Vinh-Nghe An',
    [heigthKey]:'160cm'//thêm phần tử khi sử dụng 1 biến 
};

var myKey = 'address'
myInfo.email = 'lequocc31@gmail.com';//thêm key mới
myInfo['my-email'] = 'lequoccuong1234aa@gmail.com';//thêm key mới nhưng chứa ký tự lỗi
delete myInfo.age3;//delete

console.log(myInfo)
console.log('Tên: ',myInfo.name);//lấy tên
console.log('Tuổi: ',myInfo.age3);
console.log('Địa chỉ: ',myInfo[myKey]);


var heigthKey1 = 'heigth';

var myInfo1 = {
  name1: 'Le Quoc Cuong',
  age4: 25,
  address1: 'Vinh-Nghe An',
  [heigthKey1]:'160cm', //thêm phần tử khi sử dụng 1 biến 
  getName: function(){
    return this.name1;
  }
};

//Function ==> Phương thức / method
//Others ==> Thuộc tính / property

console.log(myInfo1.getName());

//Lưu ý: nếu muốn hợp lý hóa key vi phạm quy tắc đặt tên hàm tên biến thì chúng ta phải biến key thành chuỗi 

//Object constructor 

function User(firstName1, lastName1, avatar) {
  this.firstName1 = firstName1;
  this.lastName1 = lastName1;
  this.avatar = avatar; 
  this.getName1 = function(){
    return`${this.firstName1} ${this.lastName1}`
  };
}

var author = new User('Sơn','Đặng', 'Avartar');
var user = new User('Sơn1','Đặng1', 'Avartar');

console.log(author.getName1());
console.log(user.getName1());

/*
Ovject prototybe
1. Prototype là gì?
2. Khi nào sử dụng ?
*/

function User1(firstName2, lastName2, avatar1) {
  this.firstName2 = firstName2;
  this.lastName2 = lastName2;
  this.avatar1 = avatar1; 
  
  this.getName2 = function(){
    return`${this.firstName2} ${this.lastName2}`
  };
}

User1.prototype.className = '12A1';// -tạo thêm thuộc tính className bằng cách dùng prototype và nó nằm trong phần __proto__
User1.prototype.getClassName = function(){
  return this.className
}

var user1 = new User1('Sơn2','Đặng2', 'Avartar');
var user2 = new User1('Sơn3','Đặng3', 'Avartar');

console.log(user1.className) ;
console.log(user2.getClassName()) ;

//Date giá trị thời gian 

var date = new Date();
console.log(date);

var year = date.getFullYear();
var month = date.getMonth() + 1;// vì khi trả về từ 0 - 11 nên chúng ta +1 
var day = date.getDate();

console.log (`${day}/${month}/${year}`);

// câu lệnh rẽ nhánh if - esle

var date1 = 3;

if (date1 === 2){
  console.log('Thứ 2');
}else if (date1 === 3){
  console.log('Thứ 3');
}else if (date1 === 4){
  console.log('Thứ 4');
}else if (date1 === 2){
  console.log('Thứ 5');
}else if (date1 === 2){
  console.log('Thứ 6');
}else if (date1 === 7){
  console.log('Thứ 7');
}else if (date1 === 8){
  console.log('Chủ Nhật');
}else {
  console.log('Không có thứ này!')
}

/*Lưu ý: Khi sử dụng if - esle có nhiều điều kiện 
nếu nó kiểm tra  từng điều kiện 
nếu điều kiện 1 đúng thì nó sẽ không kiểm tra nữa*/

//Câu lệnh rẽ nhánh Switch - case

var date2 = 2;

switch(date2){
  case 2: 
    console.log('Thứ 2');
    break;
  case 3: 
    console.log('Thứ 3');
    break; 
  case 4: 
    console.log('Thứ 4');
    break;
  case 5: 
    console.log('Thứ 5');
    break; 
  case 6: 
    console.log('Thứ 6');
    break; 
  case 7: 
    console.log('Thứ 7');
    break; 
  case 8: 
    console.log('Chủ Nhật');
    break;
  default:
    console.log('Không có thứ phù hợp!')      
}

//lưu ý : khi biết trước giá trị thì sử dụng switch - case (phải có ít nhất 3 case) 
// if -esle: < > !==

// toán tử 3 ngôi - Ternary operator

var course = {
  name: 'JAVASCRIPT',
  coin: 250,
};

/*if(course.coin > 0 ){
  console.log(`${course.coin} Coins`);
}else{
  console.log('Free');
}*/

var result5 = course.coin > 0 ? `${course.coin} Coins` : 'Free';
console.log('Giá:',result5);


/* Vòng lặp - loop
1. for - Lặp với điều kiện đúng
2. for/in - lặp qua key của đối tượng 
3. for/of - lặp qua value của đối tượng 
4. while - lặp khi điều kiện đúng
5. do/while - lặp 1 lần, sau đó lặp khi điều kiện đúng */

//1. for
for(var i = 0; i < 100 ; i++){
  console.log(i);
}


var myArray1 = [
  'java',
  'c++',
  'php',
  'js',
  'python',
  'ruby',
  'dart',
]

var arrayLength = myArray1.length;

for (var i = 0; i < arrayLength; i++ ){
  console.log(myArray1[i]);
}


//2. for/in


var myInfo2 = {
  name1: 'Le Quoc Cuong',
  age4: 25,
  address1: 'Vinh-Nghe An',
};

for( var key in myInfo2){
  console.log( key );
  console.log( myInfo2[key]);
}

var myArray2 = [
  'java',
  'c++',
  'php',
  'js',
  'python',
  'ruby',
  'dart',
];

for(var key in myArray2){
  console.log(myArray2[key])
}
