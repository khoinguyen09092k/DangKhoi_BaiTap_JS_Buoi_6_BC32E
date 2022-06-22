// bài 1
/*
Mô hình 3 khối:
đầu vào : tìm số tự nhiên nhỏ nhất
xử lí : tính tổng các số từ 1 - N sao cho tổng <10000
đầu ra: xuất ra màn hình số N

*/
document.getElementById('btnTimSo').onclick = function () {
    var Tong = 0;
    var N = 1;
    //  b1 : giá trị bắt đầu 
    //  b2 : thiết lập điều kiện lặp
    while (Tong < 10000) {
        // b3 khối lệnh xử lí
           Tong += N ;
        //   b4 :  thay đổi điều kiện lặp 
        N++;
    }
    // in out put ra giao diện 
    document.getElementById('ketQua_b1').innerHTML ="Số nguyên dương nhỏ nhất là: " + N;
}

// bài 2
/**
đầu vào  : Nhập vào 2 số X và N 
xử lí : Tạo biến tổng và biến đếm 
+ điều kiện lặp biến đếm <= N
Tổng = bình phương của X và biến đếm 
 và biến đếm + 1
+ đầu ra :xuất ra màn hình tính tổng  S(n)=x+x^2 +x^3+...+x^n 
 */
document.getElementById('btnTinhTong').onclick = function(){
    var X = Number(document.getElementById('nhapX').value);
    var N = Number(document.getElementById('nhapN').value);
    var tinhTong = 0;
    var dem  = 1 ;
    while(dem <= N){
        tinhTong += Math.pow(X,dem) ;
        dem++;
    }
    document.getElementById('ketQua_b2').innerHTML = tinhTong ; 
}
// bài tập 3 
/*
Mô hình 3 khối:
đầu vào : Nhập vào 1 số bất kì
xử lí : tạo vòng lặp với điều kiện lặp đếm < số nhập vào
     thỏa điều kiện thì giaithua = giaithua * dem;
     dem++
đầu ra : xuất ra màn hình số giai thừa
*/
document.getElementById('btnGiaiThua').onclick = function () {
    var iso = Number(document.getElementById('nhapSo').value);
    var giaiThua = 1;
    var soHang = 1
    // tạo điều kiện 
    while (soHang <= iso) {
        giaiThua = giaiThua * soHang;
        // thay đổi điều kiện lặp
        soHang++;
    }
    document.getElementById('ketQua_b3').innerHTML = iso + "! " + "= " + giaiThua;
}

// bài tập 4
/*
đầu vào : tạo 10 thẻ div và chia chẵn lẻ
xử lí :  khởi tạo vòng lặp với biến đếm = 1 và biến taothe dạng string rỗng
    điều kiện dem <= 10 
    và dùng if else chia điều kiện nếu biến đếm % 2 === 0 in ra thẻ div chẵn với màu xanh
    ngược lại in ra thẻ div lẻ với màu đỏ
*/
document.getElementById('btnTaoThe').onclick = function () {
    var taothe = '';
    var counter = 1;
    while(counter <= 10){
        if (counter % 2 === 0 ){
            taothe += "<div class='bg-danger text-white pl-2'>Div chẵn</div>";
        }
        else{
            taothe += "<div class='bg-primary text-white pl-2'>Div lẻ</div>";
        }
        counter++;
    }
    document.getElementById('ketQua_b4').innerHTML = taothe;
}

