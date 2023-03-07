$(function(){
    let swiper = new Swiper(".swiper", {
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },      
    on: {
        slideChangeTransitionStart: function () {
            // Slide captions
            let swiper = this;
            let slideTitle = $(swiper.slides[swiper.realIndex]).attr("data-title");
            let slideSubtitle = $(swiper.slides[swiper.realIndex]).attr("data-subtitle");
            $(".slide-captions").html(function() {
            return "<h2 class='current-title'>" + slideTitle + "</h2>" + "<h4 class='current-subtitle'>"+"<span class='step'>step"+(swiper.realIndex+1)+".&nbsp;</step>"+ slideSubtitle + "</h4>";
            });
            
            if(swiper.realIndex==4){
                $('.join_swiper').css('height','500px');
                $('.swiper .swiper-button-prev').css('top','460px');
                $('.swiper .swiper-button-next').css('top','460px');
            }else{
                $('.join_swiper').css('height','450px');
                $('.swiper .swiper-button-prev').css('top','410px');
                $('.swiper .swiper-button-next').css('top','410px');
                $('.swiper-button-next').text("다음");
                $('.checkmark').hide();
                $('.swiper-button-prev').show();

            }
            if(swiper.realIndex==5){
                $('.swiper-button-next').removeClass('swiper-button-disabled');
                $('.swiper-button-next').text("완료");
                $('.swiper-button-prev').hide();
                $('.checkmark').show();
                $('.swiper-button-next').on('click',function(){
                    location.href='/main.html';
                })
            }
        }
        }
    });
    
    // 슬라이드 제목,부제목
    let sizes1 = $(swiper.slides[swiper.realIndex]).attr("data-title");
    let sizes2 = $(swiper.slides[swiper.realIndex]).attr("data-subtitle");
    $(".slide-captions").html(function() {
        return "<h2 class='current-title'>" + sizes1 + "</h2>" + "<h4 class='current-subtitle'>"+"<span class='step'>step"+(swiper.realIndex+1)+".&nbsp;</step>"+ sizes2 + "</h4>";
    });

    

    
    // 글자길이 계산
    function getTextLength(str) {
        let len = 0;
        for (let i = 0; i < str.length; i++) {
            if (escape(str.charAt(i)).length == 6) {
                len++;
            }
            len++;
        }
        return len;
    }


    let today = new Date();
    let yyyy = today.getFullYear();
    //가입 최소연령 확인
    $('#birth_date').on('propertychange change keyup paste input',function(){
        //사용자가 입력하는 값
        let input = $(this).val();
        let inputlength = getTextLength(input);
        
        //입력한 값을 연월일로 분리
        if(inputlength==8){
            let inputYY = input.substr(0,4);//index 0번부터 4개까지
            let inputMM = input.substr(4,2);
            let inputDD = input.substr(6,2);
            if((yyyy-inputYY)<15){
                $('.birthCheck').addClass('alert');
                $('.birthCheck > .tip_icon > img').attr('src','img/alert-circle-outline.svg');
            }else{
                $('.birthCheck').removeClass('alert');
                $('.birthCheck > .tip_icon > img').attr('src','img/help-circle-outline.svg');
            }
        }else{
            $('.birthCheck').removeClass('alert');
            $('.birthCheck > .tip_icon > img').attr('src','img/help-circle-outline.svg');
        }
    })
    

    //입력된 값 유효성 체크
    let number=/[0-9]/;//숫자
    let blank_only = /^\s+|\s+$/g;//공백만 입력된 경우
    let blank_pattern = /[\s]/g;//문자열에 공백이 있는 경우
	let alphabet = /[a-zA-Z]/;// 문자
	let special_chars = /[~!@#$%^&*()_+|<li>?:{}]/;// 특수문자
    
    $('#user_name').on('propertychange change keyup paste input',function(){
        let userName=$(this).val();
        let inputlength = getTextLength(userName);
        if(userName!=""){
            if(inputlength==1){
            let slideSubtitle = $(swiper.slides[swiper.realIndex]).attr("data-subtitle");
            $(".slide-captions").html(function() {
            return "<h2 class='current-title'>" + slideTitle + "</h2>" + "<h4 class='current-subtitle'>"+"<span class='step'>step"+(swiper.realIndex+1)+".&nbsp;</step>"+ slideSubtitle + "</h4>";
            });
            }
        }
    })

    
    //slide-1
    //사용자 이메일 => RFC 5322형식을 이용한 유효성체크
    $('.emailCheck').hide();
    $('.sendEmail').on('click',function(){
        let userEmail=$('#user_email').val();
        let regex = /^[-0-9A-Za-z!#$%&'*+/=?^_`{|}~.]+@[-0-9A-Za-z!#$%&'*+/=?^_`{|}~]+[.]{1}[0-9A-Za-z]/;
        if(userEmail!=""){
            if(regex.test(userEmail)==false){
                $('.emailCheck').show();
                return false;
            }else{
                $('.emailCheck').show();
                $('.emailCheck').removeClass('alert').addClass('check');
                $('.emailCheck').find('img').attr('src','img/checked.svg');
                $('.emailCheck > .tip_text').text('인증키가 메일로 전송되었습니다!');
                return;
            } 
        }
    })
    

    //slide-2
    //사용자 이름
    $('#user_name').on('propertychange change keyup paste input',function(){
        let input = $(this).val();
        let inputlength = getTextLength(input);
        if(input!=""){
            if(inputlength < 4){//한글기준 2글자 미만인 경우
                $('.nameCheck').addClass('alert');
                $('.nameCheck > .tip_icon > img').attr('src','img/alert-circle-outline.svg');
            }else{
                $('.nameCheck').removeClass('alert');
                $('.nameCheck > .tip_icon > img').attr('src','img/help-circle-outline.svg');
            }
        }
    })
    // 약관동의
    $('.checker').on('click', '#checkAll', function () {
        let checked = $(this).is(':checked');
        if(checked){
            $(this).parents('.checker').find('input').prop('checked', true);
        }else{
            $(this).parents('.checker').find('input').prop('checked', false);
        }
    });
    $('.checker').on('click', '.normal', function () {
        let checkeditem = $(this).is(':checked');
        if(!checkeditem){
            $('#checkAll').prop('checked', false);
        }
    });
    $('.checker').on('click', '.normal', function() {
        let checkeditems = true;
        $('.checker .normal').each(function(){
            checkeditems = checkeditems && $(this).is(':checked');
        });
        $('#checkAll').prop('checked', checkeditems);
    });

    //slide-3
    //사용자 암호 동일한지 체크
    $('.pwdCheck2').hide();
    $('#password_check').on('propertychange change keyup paste input',function(){
        let pwdinput=$('#user_password').val();
        let pwdcheck=$(this).val();
        if(pwdcheck!=pwdinput){
            $('.pwdCheck2').hide();
            $('.pwdCheck2').show();
        }else{
            $('.pwdCheck2').hide();
        }
    }) 



    //slide-5
    // 선호장르 선택/선택해제
    $('.slide-5 .box').click(function(){
        $(this).toggleClass('clicked');
    })
})
