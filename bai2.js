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

function giaipt() {
    var a = parseFloat(document.dataform.a.value);//parseFloat: biến kiểu string -> number nếu string là chuỗi thì nó trả về là NaN
    var b = parseFloat(document.dataform.b.value);
    var c = parseFloat(document.dataform.c.value);
    var ketqua = "Phương Trình "+ a +"x^2 +"+ b +"x "+ c + "= 0 <br>";
    if (a === 0 && b === 0 && c === 0){
        ketqua += "phương trình có vô số nghiệm";
    }
    
    if(a === 0 && b === 0 && c !== 0){
        ketqua += "phương trình vô nghiệm";
    }
    
    if(a === 0 && b !==0 && c === 0){
        ketqua += " phương trình có nghiệm là 0";
    }

    if(a !==0 && b === 0 && c === 0){
        ketqua += "phương trình có nghiệm là 0";
    }

    if(a === 0 && b !==0 && c !==0 ){
        ketqua += "phương trình có nghiệm x là:" + (-c/b);
    }

    if(a !==0 && b !== 0 && c !==0){
        var delta = (b*b)-(4*a*c);
        if (delta < 0){
            ketqua += "phương trình vô nghiệm";
        }
        if (delta = 0){
            ketqua += "phương trình có nghiệm kép" + -b/(2*a);
        }
        if(delta > 0){
            ketqua += "phương trình có 2 nghiệm phân biệt" + (-b + Math.sqrt(delta)/(2*a)) (-b - Math.sqrt(delta)/(2*a)) 
        }
    }
    document.getElementsByClassName("ketqua")[1].innerHTML = ketqua ;
}
