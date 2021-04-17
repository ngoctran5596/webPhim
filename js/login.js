function check() {
    var user = frmLogin.txtUsername.value;
    var pass = frmLogin.txtPwd.value;
    if (user.trim() == " ") {
        alert("Không để trống tên. ");
        frmLogin.txtUsername.focus();
        return;
    }
    var regUser = /^[a-z]{1,15}$/;
    if (!regUser.test(user)) {
        alert("Tên đăn nhập không đúng định dạng ");
        frmLogin.txtUsername.focus();
        return;
    }


    if (pass.trim() == " ") {
        alert("Không để trống mật khẩu. ");
        frmLogin.txtPwd.focus();
        return;
    }
    var regPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!regPass.test(pass)) {
        alert("Mật khẩu không đúng định dạng. ");
        frmLogin.txtPwd.focus();
        return;
    }
}