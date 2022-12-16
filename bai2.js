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

var a = 2, b = 10, c = 3;
function phuongtrinhbac2(a,b,c){
    if(a === 0){
       var  x = -c/b;
       console.log('phuong trinh co nghiem x:',x)
    }
    else{
        var delta = b*b-4*a*c;
        if(delta < 0){
            console.log('Phuong trinh vo nghiem');
        }
        if(delta === 0){
            var x1 = -b/(2*a);
            console.log('phuong trinh co nghiem kep:',x);
        }
        if(delta > 0){
            var x2 = -(b + Math.sqrt(delta)) / (2*a);
            var x3 = -(b - Math.sqrt(delta)) / (2*a);
            console.log('phuong trinh co 2 nghiem phan biet: ',x1, x2)
    }
    return x,x1,x2,x3;
    }  
}
phuongtrinhbac2(a,b,c);  