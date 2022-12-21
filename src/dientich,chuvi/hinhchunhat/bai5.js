function tinhdtcv(){
    var dai = parseFloat(document.dataform.dai.value);
    var rong = parseFloat(document.dataform.rong.value);
    var ketqua = "Chu Vi và Diện tích hình chữ nhật có chiều dài: "+dai+" m và chiều rộng: " +rong+ " m là:  <br>";
        ketqua += "Diện Tích (m2): " + dai*rong + "<br>";
        ketqua += "Chu Vi (m): " + 2*(dai+rong);
    document.getElementById("ketqua").innerHTML = ketqua ;
}