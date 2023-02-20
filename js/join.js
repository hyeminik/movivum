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
                $('.swiper-button-next').text("완료");
            }else if((swiper.realIndex!=3)){
                $('.swiper-button-next').text("다음");
                $('.join_swiper').css('height','460px');
                $('.swiper .swiper-button-prev').css('top','430px');
                $('.swiper .swiper-button-next').css('top','430px');

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

    // // 약관동의
    // $('#checkAll').click(function(){
    //     $('#checkService, #checkTerms').toggleClass('checked');
    // })
})