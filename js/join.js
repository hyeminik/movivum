$(function(){
    var swiper = new Swiper(".swiper", {
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
            var swiper = this;
            var slideTitle = $(swiper.slides[swiper.realIndex]).attr("data-title");
            var slideSubtitle = $(swiper.slides[swiper.realIndex]).attr("data-subtitle");
            $(".slide-captions").html(function() {
            return "<h2 class='current-title'>" + slideTitle + "</h2>" + "<h4 class='current-subtitle'>"+"<span class='step'>step"+(swiper.realIndex+1)+".&nbsp;</step>"+ slideSubtitle + "</h4>";
            });
            
            if(swiper.realIndex==3){
                $('.join_swiper').css('height','500px');
                $('.swiper .swiper-button-prev').css('top','470px');
                $('.swiper .swiper-button-next').css('top','470px');
            }else if((swiper.realIndex!=3)){
                $('.join_swiper').css('height','460px');
                $('.swiper .swiper-button-prev').css('top','430px');
                $('.swiper .swiper-button-next').css('top','430px');

            }
            if(swiper.realIndex==4){
                $('.swiper-button-next').removeClass('swiper-button-disabled');
                $('.swiper-button-next').text("완료");
                $('.checkmark').show();
                $('.swiper-button-next').on('click',function(){
                    alert("hello");
                    location.href='/main.html';
                })
            }else if((swiper.realIndex!=4)){
                $('.swiper-button-next').text("다음");
                $('.checkmark').hide();
            }
        }
        }
    });
    
    // Slide captions on load
    var sizes1 = $(swiper.slides[swiper.realIndex]).attr("data-title");
    var sizes2 = $(swiper.slides[swiper.realIndex]).attr("data-subtitle");
    $(".slide-captions").html(function() {
        return "<h2 class='current-title'>" + sizes1 + "</h2>" + "<h4 class='current-subtitle'>"+"<span class='step'>step"+(swiper.realIndex+1)+".&nbsp;</step>"+ sizes2 + "</h4>";
    });

    // 선호장르 선택/선택해제
    $('.slide-4 .box').click(function(){
        $(this).toggleClass('clicked');
    })

    // 약관동의
    $('.checker').on('click', '#checkAll', function () {
        var checked = $(this).is(':checked');
        if(checked){
            $(this).parents('.checker').find('input').prop('checked', true);
        }else{
            $(this).parents('.checker').find('input').prop('checked', false);
        }
    });
    $('.checker').on('click', '.normal', function () {
        var checkeditem = $(this).is(':checked');
        if(!checkeditem){
            $('#checkAll').prop('checked', false);
        }
    });
    $('.checker').on('click', '.normal', function() {
        var checkeditems = true;
        $('.checker .normal').each(function(){
            checkeditems = checkeditems && $(this).is(':checked');
        });
        $('#checkAll').prop('checked', checkeditems);
    });
    

    

    //글자길이 계산
    function getTextLength(str) {
        var len = 0;
        for (var i = 0; i < str.length; i++) {
            if (escape(str.charAt(i)).length == 6) {
                len++;
            }
            len++;
        }
        return len;
    }
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    //가입 최소연령 확인
    $('#birth_date').on('propertychange change keyup paste input',function(){
        //사용자가 입력하는 값
        var input = $(this).val();
        var inputlength = getTextLength(input);
        
        //입력한 값을 연월일로 분리
        if(inputlength==8){
            var inputYY = input.substr(0,4);//index 0번부터 4개까지
            var inputMM = input.substr(4,2);
            var inputDD = input.substr(6,2);
            if((yyyy-inputYY)<15){
                $('#Age').css('opacity','1');
            }else{
                $('#Age').css('opacity','0');
            }
        }else{
            $('#Age').css('opacity','0');
        }
    })
    

    $('#password_check').on('propertychange change keyup paste input',function(){
        var pwdinput=$('#user_password').val();
        var pwdcheck=$(this).val();
        if(pwdcheck!=pwdinput){
            $('#pwdCheck').css('opacity','1');
        }else{
            $('#pwdCheck').css('opacity','0');
        }
    })  

    
})
