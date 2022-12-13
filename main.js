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
// Cách kiểm tra như thế nào là NaN
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
  - Kiểm tra data type
2. Truy xuất mảng
  - Độ dài mảng
  - Lấy phần tử theo index
*/
