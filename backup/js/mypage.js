/*
    작성자:유규상
    최종수정일:23.02.05
    최종수정버전:rev.2
    수정내역:pageup_btn 관련내용추가
*/
$(function(){
	$("article section").hide();//다숨기기
	$($(".sidebar ul li a.selected").attr("href")).show();//선택한것만 보이기
	
	$('.sidebar ul li a').click(function(){
		$('.sidebar ul li a').removeClass('selected');
		$(this).addClass('selected');
		$("article section").hide();
		$($(".sidebar ul li a.selected").attr("href")).show();
	})
	// $(".pageup_btn").hide();//숨기고 있다가 스크롤하면 생성
	$(window).scroll(function () {
		$(".pageup_btn").show();
	})
})