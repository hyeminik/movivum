$(function(){
    $(".blocks_item_link").click(function(){
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
});