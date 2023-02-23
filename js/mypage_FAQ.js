$(function(){
    $(".blocks_item_link").on('click',function(){
        alert("dksdud");
        $(".blocks_item_link").removeClass("selected");
        $(this).addClass("selected");
        $(".faq_answer_blocks").hide();
        $($(this).attr("href")).show();
        console.log("hello");
    })
})

$(function(){
    $(".faq_answer_list>li").click(function(){
        const test = $(this).next("div").slideToggle(200);
        $(this).parent("ul").siblings("ul").children("div").slideUp(200);
    });

    $(".faq_answer_list>li:not").click(function(){
        alert("Hello");
        //$(this).parent("ul").siblings("ul").children("div").slideUp(200);
    })
});