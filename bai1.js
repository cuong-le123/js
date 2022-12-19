//giai phuong trinh bac 1 ax+b=0
//buoc 1: nguoi dung nhap a va b 
//buoc 2: x = -b/a

function giaipt(){
    var a = parseFloat(document.dataform.a.value);//parseFloat: biến kiểu string -> number 
    var b = parseFloat(document.dataform.b.value);
    var ketqua = "Phương Trình "+ a +"x +"+ b +"= 0 <br>";
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
