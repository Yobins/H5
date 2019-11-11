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

function checkPhone() {
    var phone = $(".phone").val();
    if (phone != "") {
        if (!(/^1[3456789]\d{9}$/.test(phone))) {
            $(".phone_text").html("电话号码格式不正确！");
            return false;
        } else {
            $(".phone_text").html("");
            return true;
        }
    } else {
        $(".phone_text").html("电话号码不能为空！");
        return false;
    }
}

function checkEmail() {
    var email = $(".email").val();
    if (email != "") {
        if (!(/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(email))) {
            $(".email_text").html("邮箱格式不正确！");
            return false;
        } else {
            $(".email_text").html("");
            return true;
        }
    } else {
        $(".email_text").html("邮箱格式不能为空！");
        return false;
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

$(document).ready(function () {
    $("#register").click(function () {
        if (checkEmail() && checkPhone() && checkUsername() && checkPassword()) {
            $("#info").submit();
        } else {
            checkEmail();
            checkPhone();
            checkUsername();
            checkPassword();
        }
    });
    $(document).keyup(function (event) {
        if (event.keyCode == 13) {
            if (checkEmail() && checkPhone() && checkUsername() && checkPassword()) {
                $("#info").submit();
            } else {
                checkEmail();
                checkPhone();
                checkUsername();
                checkPassword();
            }
        }
    })
})

