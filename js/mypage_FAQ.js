$(function(){
    $('.answerbtn').on('click',function(){
        $(this).toggleClass('seebtn_angle',function(){
            $('.faq_answer_list_answer').toggleClass('seebtn');
        });
    })
})

$(function(){
    $('.answerbtn').on('click',function(){
            $(this).toggleClass('seebtn_angle');
    })
})