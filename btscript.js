let chiahet = () => {
  let a = Number(document.getElementById("soa").value);
  let b = Number(document.getElementById("sob").value);
  let ketqua = a % b;
  if (ketqua == 0) {
    document.getElementById("p").innerHTML = "a chia het cho b";
  } else {
    document.getElementById("p").innerHTML = "a khong chia het cho b";
  }
};
const goituoi = () => {
  let a = Number(document.getElementById("tuoi").value);
  if (a >= 15) {
    document.getElementById("ketqua").innerHTML =
      " ban du dieu kien vao lop 10";
  } else if (a < 15) {
    document.getElementById("ketqua").innerHTML = "ban ko du dieu kien vao lop";
  } else {
    document.getElementById("ketqua").innerHTML = "Vui long nhap lai";
  }
};
const songuyen = () => {
  let a = Number(document.getElementById("Nguyen").value);
  if (a > 0) {
    document.getElementById("ktra").innerHTML = "so nguyen lon hon 0";
  } else if (a < 0) {
    document.getElementById("ktra").innerHTML = "so nguyen nho hon 0";
  } else {
    document.getElementById("ktra").innerHTML = "bang 0";
  }
};
const Bt4Venha = () => {
  let a = Number(document.getElementById("bt4").value);
  let b = Number(document.getElementById("bt04").value);
  let c = Number(document.getElementById("bt4_").value);

  if (a > b && a > c) {
    document.getElementById("bt4ktra").innerHTML = "so a la so nguyen lon nhat";
  } else if (b > c) {
    document.getElementById("bt4ktra").innerHTML = "so b la so nguyen lon nhat";
  } else {
    document.getElementById("bt4ktra").innerHTML = "so c la so nguyen lon nhat";
  }
};
const caNam = () => {
  let a = Number(document.getElementById("mieng").value);
  let b = Number(document.getElementById("giuaky").value);
  let c = Number(document.getElementById("cuoiky").value);
  let d = ((a + b * 2 + c * 3) / 6).toFixed(2);

  if (d > 8.0) {
    document.getElementById(
      "bt5ktra"
    ).innerHTML = `${d} chuc mung ban hoc qua gioi`;
  } else if (d > 6.5) {
    document.getElementById("bt5ktra").innerHTML = `${d} k`;
  } else if (d > 5.0) {
    document.getElementById("bt5ktra").innerHTML = `${d} tb`;
  } else {
    document.getElementById("bt5ktra").innerHTML = `${d} yeu`;
  }
};
