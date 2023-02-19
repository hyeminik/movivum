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
                $('.join_swiper').css('height','550px');
                $('.swiper .swiper-button-prev').css('top','520px');
                $('.swiper .swiper-button-next').css('top','520px');
                $('.swiper-button-next').text("완료");
            }else if((swiper.realIndex!=3)){
                $('.swiper-button-next').text("다음");
                $('.join_swiper').css('height','450px');
                $('.swiper .swiper-button-prev').css('top','420px');
                $('.swiper .swiper-button-next').css('top','420px');

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
})