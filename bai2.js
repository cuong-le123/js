//giai phuong trinh bac 2 ax^2 + bx + c=0
//buoc 1: nguoi dung nhap a va b va c
//buoc 2: kiem tra a != 0
// neu a = 0 => x = -c/b
// neu a!=0 
// tinh delta = b*b - 4*a*c
// kiem tra delta 
// neu delta < 0 => phuong trinh vo nghiem
// neu delta = 0 => x = -b / 2a
// neu delta >0 => x1 = -(b + Math.sqrt(delta)) / 2*a , x2 = -(b - Math.sqrt(delta)) / 2*a

var a1 = 2, b1 = 10, c = 3;
function phuongtrinhbac2(a1,b1,c){
    if(a1 = 0){
       var  x1 = -c/b1;
       console.log('phuong trinh co nghiem x:',x1)
    }
    else{
        var delta = b1*b1-4*a1*c;
        if(delta < 0){
            console.log('Phuong trinh vo nghiem');
        }
        if(delta = 0){
            var x2 = -b1/(2*a);
            console.log('phuong trinh co nghiem kep:',x2);
        }
        if(delta > 0){
            var x3 = -(b1 + Math.sqrt(delta)) / (2*a1);
            var x4 = -(b1 - Math.sqrt(delta)) / (2*a1);
            console.log('phuong trinh co 2 nghiem phan biet: ',x3, x4)
    }
    return x1,x2,x3,x4;
    }  
}
phuongtrinhbac2(a1,b1,c);  