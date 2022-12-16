//giai phuong trinh bac 1 ax+b=0
//buoc 1: nguoi dung nhap a va b 
//buoc 2: x = -b/a

var a = 0;
var b = 6;

function tinhphuongtrinhbacnhat(a1,b1) {
    var x;
    if(a1 === 0 && b1 === 0 ) {
        console.log('Phương trình vô nghiệm.');
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
var kq = tinhphuongtrinhbacnhat(a,b);
console.log(kq);
