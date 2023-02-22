/*
    작성자:유규상
    최종수정일:23.02.05
    최종수정버전:rev.2
    수정내역:pageup_btn 관련내용추가
*/
$(function(){
	$("#tab1").load("myhome.html");
	$('.sidebar ul li a').click(function(){
		$('.sidebar ul li a').removeClass('selected');
		$(this).addClass('selected');
		// $("article section").hide();
		// $($(".sidebar ul li a.selected").attr("href")).show();
		
		if ($(this).attr("href")=="#tab1"){
			$("#tab1").load("myhome.html");
		}
		if ($(this).attr("href")=="#tab3"){
			$("#tab1").load("myreview.html");
		}
		if ($(this).attr("href")=="#tab4"){
			$("#tab1").load("achivement.html");
		}
		if ($(this).attr("href")=="#tab7"){
			$("#tab1").load("profile_edit_user.html");
		}
		event.preventDefault();//스크롤 막기용
	})
	$(".pageup_btn").hide();//숨기고 있다가 스크롤하면 생성
	$(window).scroll(function () {
		$(".pageup_btn").show();
	})
})