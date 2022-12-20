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
  var a =document.dataform.a.value; 
  var b =document.dataform.b.value;
  var c =document.dataform.c.value;
  let x1, x2;
  var ketqua = "Phương Trình " + a + "x^2 +(" + b + ")x +(" + c + ")= 0 <br>";
  if (a === 0 && b === 0 && c === 0) {
    ketqua += "Phương trình có vô số nghiệm";
  }else if (a === 0 && b === 0 && c !== 0) {
    ketqua += "Phương trình vô nghiệm";
  }else if (a === 0 && b !== 0 && c === 0) {
    ketqua += " Phương trình có nghiệm là 0";
  }else if (a !== 0 && b === 0 && c === 0) {
    ketqua += "Phương trình có nghiệm là 0";
  }else if (a === 0 && b !== 0 && c !== 0) {
    ketqua += "Phương trình có nghiệm x là:" + -c / b;
  }else if (a !== 0 && b !== 0 && c !== 0) {
    const delta = b * b - 4 * a * c;
    if (delta < 0) {
      ketqua += "Phương trình vô nghiệm";
    }
    if (delta === 0) {
      ketqua += "Phương trình có nghiệm kép" + -b / (2 * a);
    }
    if (delta > 0) {
      ketqua += "có 2 nghiệm phân biệt x1 , x2" ;
      x1 = -b + Math.sqrt(delta) / (2 * a);
      x2 = -b - Math.sqrt(delta) / (2 * a);
      document.getElementById("x1").innerHTML = x1; 
      document.getElementById("x2").innerHTML = x2;
    }
  }
  document.getElementById("x").innerHTML = ketqua;
  // document.querySelector(".ketqua").innerHTML = ketqua;
  // document.querySelectorAll(".ketqua").innerHTML = ketqua;
  // document.querySelector("#nghiem-2").innerHTML = ketqua;
}

