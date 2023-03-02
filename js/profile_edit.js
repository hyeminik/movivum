/*
    작성자:유규상
    최종수정일:23.02.13
    최종수정버전:rev.1
    수정내역:닉네임,비밀번호,비밀번호체크
*/

$(function () {
    var required_nickname = false;
    var required_password = false;
    var required_passcheck = false;

    $(this).keyup(function () {
        //닉네임 체크
        $("#nick").keyup(function () {
            required_nickname = false;
            if ($("#nick").val() == "") {
                $("#error_text_nickname").html("필수 입력사항이에요");
            } else if (($("#nick").val().length) < 2 || ($("#nick").val().length) > 21) {
                $("#error_text_nickname").html("닉네임은 최소 2자, 최대 20자까지 입력이 가능해요");
            } else {
                //ajax 중복체크 필요(구현필요)
                $("#error_text_nickname").html("사용가능한 닉네임이에요");
                required_nickname = true;
            }
            if (required_nickname == false){
                $("#error_text_nickname").css("color","red");
            }else
            $("#error_text_nickname").css("color","green");
        })
        //비밀번호 체크
        $("#user_password").keyup(function () {
            required_password = false;
            if ($("#user_password").val() == "") {
                $("#error_text_password").html("필수 입력사항이에요");
            } else {
                $("#error_text_password").html("사용가능한 비밀번호에요");
                required_password = true;
            }
            if (required_password == false){
                $("#error_text_password").css("color","red");
            }else
            $("#error_text_password").css("color","green");
        })

        //비밀번호 확인
        $("#password_check").keyup(function () {
            required_passcheck = false;
            if ($("#password_check").val() == "") {
                $("#error_text_passcheck").html("필수 입력사항이에요");
                required_passcheck = false
            }
            else if ($("#password_check").val() !== "" && $("#password_check").val() == $("#user_password").val()) {
                $("#error_text_passcheck").html("비밀번호가 일치해요");
                required_passcheck = true;
            }
            if (required_password == false){
                $("#error_text_passcheck").css("color","red");
            }else
            $("#error_text_passcheck").css("color","green");
        })
        
        //비밀번호를 도중에 바꿀 수 있으므로 비밀번호 확인 재 필요
        if ($("#password_check").val() !== "" && $("#password_check").val() == $("#user_password").val()) {
            $("#error_text_passcheck").html("비밀번호가 일치해요");
            required_passcheck = true;
        }else{
            $("#error_text_passcheck").html("비밀번호가 같은지 확인해보세요");
            required_passcheck = false;
        }
        if (required_passcheck == false){
            $("#error_text_passcheck").css("color","red");
        }else
        $("#error_text_passcheck").css("color","green");


        //사용가능하면 제출가능
        if (required_nickname == true && required_password == true && required_passcheck == true) {
            $("#submit_btn").attr("disabled", false);
        } else {
            $("#submit_btn").attr("disabled", true);
        }
    })
})