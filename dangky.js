function validateForm() {
    const username = document.getElementById('taikhoan').value;
    const password = document.getElementById('password').value;
    if (username === "" || password === "") {
        alert("Vui lòng nhập đầy đủ thông tin tài khoản và mật khẩu.");
        return false;
    } else {
        alert("Đăng nhập thành công!");
        return true;
    }
}