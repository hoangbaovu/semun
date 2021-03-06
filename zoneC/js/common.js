$(document).ready(function () {
	// gnb 버튼
	$(".btn_gnb").on("click", function () {
		if ($(this).hasClass("on")) {
			if ($(window).width() <= 1280) {
				$("body").css({
					// "height": "auto",
					// "overflow": "visible",
					"position": "static"
				});
				$(".gnb").removeClass("on");
				setTimeout(function () {
					$(".btn_gnb").removeClass("on");
					$("header").removeClass("menu");
				}, 310)
			}
		} else {
			if ($(window).width() <= 1280) {
				$("body").css({
					// "height": "100%",
					// "overflow": "hidden",
					"position": "fixed",
					"width": "100%",
					"left": 0,
					"top": 0
				});
				$("header").addClass("menu");
				$(".btn_gnb").addClass("on");
				$(".gnb").addClass("on");
			}
			
		}
	});

	// 비교견적 신청
	// 견적요청 단계
	$(".c2 .radio_list label").on("click", function () {
		$(".btn_next").addClass("on");
	});
	// 정보입력 단계
	// 팝업 띄우기
	$(".c2 .check_list label").on("click", function () {
		$("body").css({
			"height": "100%",
			"overflow": "hidden"
		});
		$(".c2_pop").show();
		$(".c2_pop .radio_list_pop").hide();
		$(".c2_pop h3").html($(this).find(".bt").text());

		if ($(this).attr("for") == "btn_address") { // 주소
			$(".c2_pop .radio_list_pop[id='pop_address1']").show();
		} else {
			var btn_id = $(this).attr("for").substring(3);
			$(".c2_pop .radio_list_pop[id='pop_i" + btn_id + "']").show();
		}
	});
	// 팝업값 받아 넣기 (주소제외 radio)
	$(".c2_pop .radio_list_pop[id^='pop_i'] label").on("click", function () {
		var pop_id = $(this).parent().parent().attr("id").substring(5);
		$("body").css({
			"height": "auto",
			"overflow": "visible"
		});
		$(".c2_pop").hide();
		$(".c2_pop .radio_list_pop[id^='pop_i'] label").removeClass("on");
		
		if ( !($(this).find("input").hasClass("none")) ) {
			$(this).addClass("on");
			$(".c2 .check_list input[id='p1_" + pop_id + "']").attr("checked", true);
			$(".c2 .check_list input[id='p1_" + pop_id + "']").siblings("label").find(".bd").html($(this).text());
		} else {
			$(".c2 .check_list input[id='p1_" + pop_id + "']").attr("checked", false);
			$(".c2 .check_list input[id='p1_" + pop_id + "']").siblings("label").find(".bd").html("");
		}

		if ($("input.required").length == $("input.required:checked").length) {
			$(".btn_next").addClass("on");
		}
	});
	// 팝업값 받아 넣기 (select)
	$(".c2_pop .radio_list_pop[id^='pop_i'] .btn_select").on("click", function () {
		var pop_id = $(this).parent().parent().attr("id").substring(5);
		$("body").css({
			"height": "auto",
			"overflow": "visible"
		});
		$(".c2_pop").hide();
		$(".c2_pop .radio_list_pop[id^='pop_i'] label").removeClass("on");

		var selectYear = $(this).parent().find(".dyear option:selected").val();
		var selectMonth = $(this).parent().find(".dmonth option:selected").val();
		var selectDate = $(this).parent().find(".ddate option:selected").val();

		var selectValue = selectYear + "-" + selectMonth + "-" + selectDate;
		$(".c2 .check_list input[id='p1_" + pop_id + "']").attr("checked", true);
		$(".c2 .check_list input[id='p1_" + pop_id + "']").siblings("label").find(".bd").html(selectValue);
	});

	// 팝업값 받아 넣기 (textarea)
	$(".c2_pop .radio_list_pop[id^='pop_i'] .btn_textarea").on("click", function () {
		var pop_id = $(this).parent().parent().attr("id").substring(5);
		$("body").css({
			"height": "auto",
			"overflow": "visible"
		});
		$(".c2_pop").hide();
		$(".c2_pop .radio_list_pop[id^='pop_i'] label").removeClass("on");

		var textValue = $(this).parent().find("textarea").val();
		$(".c2 .check_list input[id='p1_" + pop_id + "']").attr("checked", true);
		$(".c2 .check_list input[id='p1_" + pop_id + "']").siblings("label").find(".bd").html(textValue);
	});

	// 팝업값 받아 넣기 (상세주소)
	$(".c2_pop .radio_list_pop[id^='pop_i'] .btn_inputs").on("click", function () {
		var pop_id = $(this).parent().parent().attr("id").substring(5);
		$("body").css({
			"height": "auto",
			"overflow": "visible"
		});
		$(".c2_pop").hide();
		$(".c2_pop .radio_list_pop[id^='pop_i'] label").removeClass("on");

		var postcodeValue = $(this).parent().find("#postcode").val();
		var addressValue = $(this).parent().find("#address").val();
		var detailaddressValue = $(this).parent().find("#detailAddress").val();
		var extraaddressValue = $(this).parent().find("#extraAddress").val();

		var textValue = "[" + postcodeValue + "] " + addressValue + " " + detailaddressValue + " " + extraaddressValue;

		$(".c2 .check_list input[id='p1_" + pop_id + "']").attr("checked", true);
		$(".c2 .check_list input[id='p1_" + pop_id + "']").siblings("label").find(".bd").html(textValue);
	});

	// 간이주소 1단계
	$(".c2_pop .radio_list_pop[id='pop_address1'] label").on("click", function () {
		var address1_id = $(this).find("input").attr("id").substring(4);
		$(".c2_pop .radio_list_pop[id='pop_address1']").hide();
		$(".c2_pop .radio_list_pop[id='pop_address2_" + address1_id + "']").show();
		$(".c2_pop .radio_list_pop[id='pop_address1'] label").removeClass("on");
		$(this).addClass("on");
		$(".c2 .check_list input[id='btn_address']").siblings("label").find(".bd.a1").html($(this).text());
	});
	// 간이주소 2단계
	$(".c2_pop .radio_list_pop[id^='pop_address2'] label").on("click", function () {
		$("body").css({
			"height": "auto",
			"overflow": "visible"
		});
		$(".c2_pop").hide();
		$(".c2_pop .radio_list_pop[id^='pop_address2'] label").removeClass("on");
		$(this).addClass("on");
		$(".c2 .check_list input[id='btn_address']").attr("checked", true);
		$(".c2 .check_list input[id='btn_address']").siblings("label").find(".bd.a2").html($(this).text());

		if ($("input.required").length == $("input.required:checked").length) {
			$(".btn_next").addClass("on");
		}
	});
	// 기타
	// $(".c2_pop .radio_list_pop .etc_wrap button").on("click", function () {
	// 	var pop_id = $(this).parent().parent().attr("id").substring(5);
	// 	$("body").css({
	// 		"height": "auto",
	// 		"overflow": "visible"
	// 	});
	// 	$(".c2_pop").hide();
	// 	$(".c2 .btn_list button").eq(pop_id - 1).addClass("comp");
	// 	$(".c2 .btn_list button").eq(pop_id - 1).find(".bd").html($(this).siblings("textarea").val());
	// });

	// 특이사항 및 문의사항
	$(".add_question textarea").on("focus", function () {
		$(window).scrollTop($(document).height());
	});
	$(".add_question textarea").on("keyup", function (e) {
		var content = $(this).val();
		$(this).height(((content.split('\n').length + 1) * 1.5) + "em");
		$(".add_question .counter").html(content.length + "/300");

		if (content != 0) {
			$(this).parent().addClass("on");
		} else {
			$(this).parent().removeClass("on");
		}
	});
	$(".add_question textarea").keyup();

	// 팝업 닫기
	$(".c2_pop .btn_pop").on("click", function () {
		$("body").css({
			"height": "auto",
			"overflow": "visible"
		});
		$(".c2_pop").hide();
	});

	// 인증단계
	$(".c2 .text_list input").on("keyup", function () {
		if ($(".terms_list").length) {
			if (($("input[type='text'].required").val() != "") && ($("input[type='tel'].required").val() != "") && ($("input[type='checkbox'].required").is(":checked"))) {
				$(".btn_next").addClass("on");
			} else {
				$(".btn_next").removeClass("on");
			}
		} else {
			if (($("input[type='text'].required").val() != "") && ($("input[type='tel'].required").val() != "")) {
				$(".btn_next").addClass("on");
			} else {
				$(".btn_next").removeClass("on");
			}
		}
	});
	$(".c2 .terms_list input").on("click", function () {
		if ( ($("input[type='text'].required").val() != "") && ($("input[type='tel'].required").val() != "") && ($("input[type='checkbox'].required").is(":checked")) ) {
			$(".btn_next").addClass("on");
		} else {
			$(".btn_next").removeClass("on");
		}
		// 아래 삭제
		// var thisTop = $(this).siblings("label").position().top;
		// $(window).scrollTop(thisTop);
	});

	// 세무사 정보
	$(".box_list .btn_l").on("click", function () {
		$("body").css({
			"height": "100%",
			"overflow": "hidden"
		});
		$(".b2_pop").show();
		$(".b2_pop .btn_goto").show();
	});

	// 팝업 닫기
	$(".b2_pop .btn_pop").on("click", function () {
		$("body").css({
			"height": "auto",
			"overflow": "visible"
		});
		$(".b2_pop").hide();
	});

	// 자주 묻는 질문
	$(".n_list .pr3 dt button").on("click", function () {
		if ($(this).parent().parent(".pr3").hasClass("on")) {
			$(this).parent().parent(".pr3").removeClass("on");
		} else {
			$(".n_list .pr3").removeClass("on");
			$(this).parent().parent(".pr3").addClass("on");
		}
	});

	// 후기 작성
	$(".b2_pop .btn_goto").on("click", function () {
		// var replyTop = $(".b2_pop .pop_in .n_reply_pop").position().top;
		// var curTop = $(".b2_pop .pop_in").scrollTop();
		// $(".b2_pop .pop_in").scrollTop(curTop + replyTop);
		$(".b2_pop .pop_in").scrollTop($(document).height());
		$(this).hide();
	});

	$(".b2_pop .pop_in").scroll(function(){ 
		var replyTop = $(".b2_pop .pop_in .n_reply_pop").position().top;
		var curTop = $(".b2_pop .pop_in").scrollTop();

		if (curTop > replyTop) {
			$(".b2_pop .btn_goto").hide();
		} else {
			$(".b2_pop .btn_goto").show();
		}
	});

	$(".n_reply_pop .point button, .reply_modify .point button").on("click", function () {
		$(this).parent().children('button').removeClass('on');
		$(this).addClass('on').prevAll('button').addClass('on');
		return false;
	});

	// 190901
	$(".reply_read .btn_s .btn_modify").on("click", function () {
		$(this).parent().parent(".reply_read").hide();
		$(this).parent().parent().siblings(".reply_modify").show();
	});
	$(".reply_modify .btn_wrap .btn_cancel").on("click", function () {
		$(this).parent().parent(".reply_modify").hide();
		$(this).parent().parent().siblings(".reply_read").show();
	});

	$(".n_reply_pop .input_wrap textarea").on("focus", function () {
		$(".b2_pop .pop_in").scrollTop($(document).height());
	});

	// 팝업
	// $(".popup .btn_close").on("click", function () {
	// 	if ($(".check_today input").is(":checked")) {
	// 		console.log("not open today");
	// 	} else if ($(".check_allday input").is(":checked")) {
	// 		console.log("not open allday");
	// 	}
	// 	$(".popup").hide();
	// });

	// 약관 팝업
	$(".openPop").on("click", function () {
		var thisHref = $(this).attr("href").substring(1);
		var thisTxt = $(this).text();
		$("body").css({
			"height": "100%",
			"overflow": "hidden"
		});
		$(".terms_pop").show();
		$(".terms_pop .pop_in." + thisHref+"").show();
		$(".terms_pop h3").text(thisTxt);
	});
	// 팝업 닫기
	$(".terms_pop .btn_pop").on("click", function () {
		$("body").css({
			"height": "auto",
			"overflow": "visible"
		});
		$(".terms_pop .pop_in").hide();
		$(".terms_pop").hide();
	});

	// 이용안내
	$(".info .txt button").on("click", function () {
		var imgSrc = $(this).parent().siblings(".img").find("img").attr("src");
		$(".info > li").removeClass("on");
		$(this).parent().parent("li").addClass("on");
		$(this).parent().siblings(".img").find("img").attr("src", imgSrc + "?timestamp=" + new Date().getTime());

		if ($(window).width() <= 1024) {
			var thisTop = $(this).offset().top - 20;
			$(window).scrollTop(thisTop);
		}
	});

	// 기본조정료 191225_1
	$(".price button").on("click", function () {
		$(this).siblings("i").toggle();
	});
	$(".price i").on("click", function () {
		$(this).hide();
	});
 });

/* 팝업 // */
//쿠키설정	
function setCookie(name, value, expiredays) {
	var todayDate = new Date();
	todayDate.setDate(todayDate.getDate() + expiredays);
	document.cookie = name + '=' + escape(value) + '; path=/; expires=' + todayDate.toGMTString() + ';'
}
//쿠키 불러오기
function getCookie(name) {
	var obj = name + "=";
	var x = 0;
	while (x <= document.cookie.length) {
		var y = (x + obj.length);
		if (document.cookie.substring(x, y) == obj) {
			if ((endOfCookie = document.cookie.indexOf(";", y)) == -1)
				endOfCookie = document.cookie.length;
			return unescape(document.cookie.substring(y, endOfCookie));
		}
		x = document.cookie.indexOf(" ", x) + 1;
		if (x == 0)
			break;
	}
	return "";
}
//닫기 버튼 클릭시
function closeWin(key) {
	if ($(".check_today input").is(":checked")) {
		console.log("not open today");
		setCookie('popup' + key, 'Y', 1);
	} else if ($(".check_allday input").is(":checked")) {
		console.log("not open allday");
		setCookie('popup' + key, 'Y', 30);
	}
	$("#popup" + key + "").hide();
}
$(function () {
	if (getCookie("popup1") != "Y") {
		// $("#popup1").show();
	}
});
/* // 팝업 */