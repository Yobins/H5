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

function checkValidation(){
    var validation = $(".validation1").val();
    if(validation!=""){
        $(".validation_text").html("");
        return true;
    }else {
        $(".validation_text").html("验证码不能为空！");
        return false;
    }
}

function checkPassword(){
    var password = $(".password1").val();
    if(password!=""){
        $(".password_text").html("");
        return true;
    }else {
        $(".password_text").html("验证码不能为空！");
        return false;
    }
}

function checkRepassword() {
    var repassword = $(".repassword").val();
    if(repassword!=""){
        if(repassword!=$(".password1").val()){
            $(".repassword_text").html("密码不一致！");
            return false;
        }else {
            $(".repassword_text").html("");
            return true;
        }
    }else {
        $(".repassword_text").html("确认密码不能为空！");
        return false;
    }
}

$(document).ready(function(){
    $("#submit1").click(function () {
        if (checkPhone() && checkValidation()&&checkPassword()&&checkRepassword()) {
            $("#info").submit();
        } else {
            checkPhone();
            checkValidation();
            checkPassword();
            checkRepassword();
        }
    });
    $(document).keyup(function (event) {
        if (event.keyCode == 13) {
            if (checkPhone() && checkValidation() && checkPassword() && checkRepassword()) {
                $("#info").submit();
            } else {
                checkPhone();
                checkValidation();
                checkPassword();
                checkRepassword();
            }
        }
    })
})