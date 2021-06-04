/*let input_ly;
let input_hoa;
let input_sinh;
input_ly =   prompt("nhập điểm lý");
input_hoa =  prompt("nhập điểm hoá");
input_sinh = prompt("nhập điểm sinh");
let ly =   parseInt(input_ly);
let hoa =  parseInt(input_hoa);
let sinh = parseInt(input_sinh);
let diem_trung_binh = (ly + hoa + sinh) / 3;
document.write("điểm trung bình: " + diem_trung_binh);

let input_doC;
input_doC = prompt("nhập vào độ C");
doC = parseInt(input_doC);
let do_F = (32 + 9 * doC) / 5;
document.write("độ F là: " + do_F);

let input_r = prompt("nhập vào bán kính");
let pi = 3.14;
let ban_kinh = parseInt(input_r);
let dien_tich = pi * (ban_kinh) ^ 2;
let chu_vi = 2 * pi * ban_kinh;
document.write("diện tích là: " + dien_tich + ", " + "chu vi là: " + chu_vi);*/

/*let name = prompt("nhập tên vào đây");
let password = prompt("password?","");
if (name == "admin"){
    alert("hi " + name );
}else if(name == null) {
    alert("không có tên");
}else{
    alert("không phải bạn");
}

if (password == "123123"){
    alert("wellcom");
}else if(password == null){
    alert("bạn chưa nhập pass");
}else{
    alert("bạn nhập sai");
}*/

/*let a = parseInt(prompt("nhập só a"));
let b = parseInt(prompt("nhập số b"));
let c = a + b;
c < 4 ? "Below" : "Over";*/

//tính số BMI (BODY MASS INDEX)
let weight= parseInt(prompt("nhập số chiều cao: "));
let hight = parseInt(prompt("nhập số cân nặng: "));
let bmi = weight / (hight ** 2);
if ( bmi < 18.5 ){
 document.write("Underweight");
}else if ( bmi >= 18.5 || bmi < 25 ){
    document.write("Nomarl");
}else if ( bim >= 25 || bmi < 30 ){
    document.write("Overweight");
}else{
    document.write("Obese");
}

