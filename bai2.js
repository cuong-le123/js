//giai phuong trinh bac 2 ax^2 + bx + c=0
//buoc 1: nguoi dung nhap a va b va c
//buoc 2: kiem tra
// neu a = 0 => x = -c/b
// neu a!=0 
// delta = b*b - 4*a*c
// kiem tra delta 
// neu delta < 0 => phuong trinh vo nghiem
// neu delta = 0 => phuong trinh co nghiem kep x = -b / 2a
// neu delta > 0 => x1 = -(b + Math.sqrt(delta)) / 2*a , x2 = -(b - Math.sqrt(delta)) / 2*a

var a = 4, b = 2, c = 0;
function tinhphuongtrinhbac2(a,b,c) {
    var ketqua = { x1, x2 };
    if(a === 0){
       var  x = -c/b;
       ketqua.x1 = x;
       ketqua.x2 = x;
       console.log('Phương trình có nghiệm x:',x)
    }
    else{
        var delta = b*b-4*a*c;
        if(delta < 0){
            console.log('Phương trình vô nghiệm.');
        }
        if(delta === 0){
            var x1 = -b/(2*a);
            ketqua.x1 = x1;
            ketqua.x2 = x1;
            console.log('Phương trình có nghiệm kép x:',x);
        }
        if(delta > 0){
            var x2 = -(b + Math.sqrt(delta)) / (2*a);
            var x3 = -(b - Math.sqrt(delta)) / (2*a);
            ketqua.x1 = x2;
            ketqua.x2 = x3;
            console.log('Phương trình có 2 nghiệm phân biệt','x1:',x2,'x2:', x3)
        }
    }
    return ketqua;
}
var kq = tinhphuongtrinhbac2(a,b,c);
console.log(kq);