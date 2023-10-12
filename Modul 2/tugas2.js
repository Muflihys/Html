function validateForm() {
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var alamat = document.getElementById("alamat").value;

    if (nama === "" || email === "" || alamat === "") {
        alert("Harap isi semua bidang yang diperlukan.");
        return false;
    }

    

    return true;
}
