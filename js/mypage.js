/*
    작성자:유규상
    최종수정일:23.03.01
    최종수정버전:rev.3
    수정내역:마이리뷰에서 height수정된거 재수정
*/
$(function () {
	$(".load_article").load("myhome.html");
	$('.sidebar ul li a').click(function () {
		$('.sidebar ul li a').removeClass('selected');
		$(this).addClass('selected');
		$(".pageup_btn").hide();//페이지 업 버튼 기본숨김
		$("article>section").css("height","auto")//마이리뷰에서 늘어난 높이 재수정
		// $("article section").hide();
		// $($(".sidebar ul li a.selected").attr("href")).show();

		if ($(this).attr("href") == "#tab1") {
			$(".load_article").load("myhome.html");
		}
		if ($(this).attr("href") == "#tab3") {
			$(".load_article").load("myreview.html");
		}
		if ($(this).attr("href") == "#tab4") {
			$(".load_article").load("achivement.html");
		}
		if ($(this).attr("href") == "#tab7") {
			$(".load_article").load("profile_edit_admin.html");
		}
		event.preventDefault(); //스크롤 막기용
	})

	//숨기고 있다가 스크롤하면 생성
	$(".pageup_btn").hide();
	$(window).scroll(function () {
		if ($('.sidebar ul li a[class="selected"]').attr("href") == "#tab3" || $('.sidebar ul li a[class="selected"]').attr("href") == "#tab4") {
			$(".pageup_btn").show();
		}
	})
})