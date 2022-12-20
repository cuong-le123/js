//giai thừa 
//nếu a<0 => không có giai thừa
//nếu a=0 hoặc a=1 => giai thừa = 1
//nếu a>0 và a!=1 => giai thừa = a*(a-1)

function factorialize(){
    var a = document.dataform.a.value;//parseFloat: biến kiểu string -> number
    var ketqua = "Giai thừa của " + a +" là: "; 
    if (a < 0){
       ketqua += "Không có giai thừa ";
    }else if(a === 0||a === 1){
        ketqua += "Giai thừa của "+ a + " là: 1" ;
    }else{
        for(var i; i<=a; i++){
            ketqua += "Giai thừa của "+ a + " là:" + (i * (i-1));
        }
    }
    document.getElementsByClassName("ketqua")[0].innerHTML = ketqua ;
}