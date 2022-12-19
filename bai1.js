//giai phuong trinh bac 1 ax+b=0
//buoc 1: nguoi dung nhap a va b 
//buoc 2: x = -b/a

// var a =1;
// var b =2;
// function Validator(option){

//     //Hàm thực hiện validate
//     function validate(inputElement,rule){
//         var errorMessage = rule.test(inputElement.value);
//         var errorElement = inputElement.parentElement.querySelector('.form-message');       
//         if(errorMessage){
//             errorElement.innerText = errorMessage;
//             inputElement.parentElement.classList.add('invalid');
//         }else{
//             errorElement.innerText = '';
//             inputElement.parentElement.classList.remove('invalid');
//         }
//     }
//     //Lấy element của form cần validate
//     var formElement =document.querySelector(option.form);
//     if(formElement){
//         option.rules.forEach(function (rule){

//             var inputElement = formElement.querySelector(rule.selector);

//             if(inputElement){
//                 inputElement.onblur = function(){
//                     // lấy value người dùng nhập vào: inputElement.value
//                     // lấy test function: rule.test
//                     // rule.test();
//                     // console.log (rule);
//                     validate(inputElement,rule);
//                 }
//             }
//         });
//     }
// }
// // Định nghĩa rule:
// // Nguyên tắc của các rule:
// // 1. Khi có lỗi => trả ra thông báo lỗi 
// // 2. Khi hợp lệ => trả về Undefined
// Validator.isRequired = function(selector){
//     return {
//         selector: selector,
//         test: function(value){
//             return value.trim() ? undefined : 'Vui Lòng nhập số vào đây'
//         }
//     }
// }


function giaipt(){
    var a = parseFloat(document.dataform.a.value);//parseFloat: biến kiểu string -> number 
    var b = parseFloat(document.dataform.b.value);
    var ketqua = "Phương Trình "+ a +"x + "+ b +" = 0 <br>";
    if(a === 0 && b === 0 ) {
        ketqua += "vô số nghiệm"
    } 
    if (a !== 0 && b === 0) {
        ketqua += "có nghiệm:" + (-b/a);
    } 
    if (a === 0 && b !== 0){
        ketqua += "vô nghiệm" ;
    } 
    if(a !== 0 && b !== 0) {
        ketqua += "có nghiệm:" + (-b/a);
    }
    document.getElementsByClassName("ketqua")[0].innerHTML = ketqua ;
}
