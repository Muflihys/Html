function Penjumlahan() {
    var number1 = parseFloat(document.getElementById("number1").value);
    var number2 = parseFloat(document.getElementById("number2").value);

    if (!isNaN(number1) && !isNaN(number2)) {
        var sum = number1 + number2;
        alert("Hasil penjumlahan = " + sum);
    } else {
        alert("Masukan bilangan yang valid");
    }
}
function ulangi(){
    document.getElementById("perhitungan").reset();
}
