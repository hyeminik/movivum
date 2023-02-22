/*
    작성자:유규상
    최종수정일:23.02.05
    최종수정버전:rev.1
    수정내역:섹션 show/hide, 사이드바 selected강조
*/
//테스트용 리뷰카드 생성함수
function test() {
    
    for (var i = 0; i < 5; i++){
        var card_num = $("article[class=review_card]").length+1; //현재 리뷰카드 갯수
        $(".wrap_review").append("<article class='review_card'>"+card_num+"</article>");
    }
    alert("카드갯수=  " + $("article[class=review_card]").length);
}
//무한스크롤(리뷰 카드 갯수 만큼 보여지는 범위 확장)
$(function () {
    //변수선언
    var row = 2;//현재 노출된 행
    var card_row = 3 //한행당 보여줄 카드 수
    var card_num = $("article[class=review_card]").length; //현재 리뷰카드 갯수
    var max_row = Math.ceil(card_num / card_row); //확장 가능한 최대 행
    $(window).scroll(function () {
        // alert("max_row"+max_row+" / row"+row)
        card_num = $("article[class=review_card]").length;
        max_row = Math.ceil(card_num / card_row); //올림 반드시 필요
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight -10 && row < max_row) {//(현재 화면높이+현재Y스크롤 값) > (최대 문서높이-여유값)
            row += 1;
            $(".wrap_review").css("height", 380 * (row)); //카드 높이 및 하단여백 만큼 확장
            //alert("row:"+row+"/max_row:"+max_row+" height:"+$(".wrap_review").css("height"));
        }
    })
})/*막상 해놓고 보니까 이러면 안될 것 같음 카드를 다 불러와 놓고 숨겨 놓는거라(css-overflow:hidden) 리뷰를 많이 하면 분명 최적화 똥망
    나중에 행의 수*한행 당 보여줄 카드 수 만큼만 서버에서 반복문으로 받고 break로 더 못 받게 처리해야할듯 */