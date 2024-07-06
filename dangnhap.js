document.getElementById('dangky').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var username = document.getElementById('taikhoan').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Mật khẩu không khớp. Vui lòng thử lại.');
        return;
    }

    // Lưu thông tin đăng ký (ví dụ: gửi thông tin tới server hoặc lưu vào local storage)
    localStorage.setItem('taikhoan', taikhoan);
    localStorage.setItem('password', password);

    // Chuyển hướng tới trang đăng nhập
    window.location.href = 'dangnhap.html';
});