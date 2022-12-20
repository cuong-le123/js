
function tong() {
    var a = document.dataform.a.value;
    var s = 0
    for(var i = 1 ; i <= a; i++){
        s = s + i;
        document.getElementById("ketqua").innerHTML= s;
    }
}   