function checkUsername() {
    var username = $(".username").val();
    if (username == "") {
        $(".username_text").html("用户名不能为空！");
        return false;
    } else {
        $(".username_text").html("");
        return true;
    }
}

function checkPassword() {
    var password = $(".password1").val();
    if (password == "") {
        $(".password_text").html("密码不能为空！");
        return false;
    } else {
        $(".password_text").html("");
        return true;
    }
}

$(document).ready(function(){
    $("#login").click(function () {
        if (checkUsername() && checkPassword()) {
            $("#info").submit();
        } else {
            checkUsername();
            checkPassword();
        }
    });
    $(document).keyup(function (event) {
        if (event.keyCode == 13) {
            if (checkUsername() && checkPassword()) {
                $("#info").submit();
            } else {
                checkUsername();
                checkPassword();
            }
        }
    })
})