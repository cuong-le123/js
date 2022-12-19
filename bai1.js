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


function tinhphuongtrinhbacnhat(a1,b1) {
    var x;
    if(a1 === 0 && b1 === 0 ) {
        console.log('Phương trình vô số nghiệm.');
    }else if (a1 !== 0 && b1 === 0) {
        x = -b1/a1;
        console.log('Phương trình có nghiệm:',x);
    }else if (a1 === 0 && b1 !== 0){
        console.log('Phương trình vô nghiệm.');
    }else if(a1 !== 0 && b1 !== 0) {
        x = -b1/a1;
        console.log('Phương trình có nghiệm:',x);
    }
    return x;
}
