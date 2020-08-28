////// 전역변수구역 //////////////////
// 1. 각 스크롤 액션 실행여부(0실행전,1실행후)
var p1 = 0,
    p2 = 0,
    p3 = 0,
    p3_2 = 0,
    p4 = 0,
    p5 = 0;
// 2. 스크롤 액션 기준선 요소의 top값 셋팅변수
var p1pos, p2pos, p3pos, p3pos_2, p4pos, p5pos, p6pos;
// 3. 스크롤 액션 기준선차(보이는 화면 높이값의 70%)
const gap = $(window).height() * 0.5;

// 모바일코드
var mob_min = 0;
if ($(window).width() < 960) mob_min = 1;
var mob = 0;
if ($(window).width() < 1100) mob = 1;

var cTop;
var menu = $(".header_menu");

$(window).resize(function () {
    //    $(window).width() < 960 ? mob_min = 1 : mob_min = 0;
    //    $(window).width() < 1100 ? mob = 1 : mob = 0;

    window.location.reload();

});

/*////////////////////////////////////////
    함수명: initSet
    기능: 등장할 요소의 초기값 셋팅하기
*/ ////////////////////////////////////////
function initSet(idnm) { //idnm - 초기화할 id명

    /******************* con_1 초기화 SRART *******************/
    if (idnm === "#con_1") {

        $(idnm).find(".wwd_line1, .main_con_txt, .history_box").removeClass("effect");

    }
    /******************* con_2 초기화 SRART *******************/
    else if (idnm === "#con_2") {

        $(idnm).find(".line_box, .main_con_title.con2, .branding.media, .branding.digital, .branding.mcomm").removeClass("effect");

    }
    /******************* con_3 초기화 SRART *******************/
    else if (idnm === "#con_3") {

        $(idnm).removeClass("black");

        if (mob_min === 1) {

            $(idnm).find(".ba_wrap, .btn_more").removeClass("black");
            $(idnm).find(".ba_line_box, .bg_text_box > .main_con_title, .ba_s_title").addClass("black");

        } else {

            $(idnm).find(".ba_wrap, .ba_line_box, .bg_text_box > .main_con_title, .ba_s_title").removeClass("black");
            $(idnm).find(".btn_more").addClass("black");

        }
    }
    /******************* con_3 / 리스트 초기화 SRART *******************/
    else if (idnm === ".ba_list_wrap") {

        $(idnm).find(".ba_list > li").removeClass("effect");

    }
    /******************* con_4 초기화 SRART *******************/
    else if (idnm === "#con_4") {

        $(idnm).find(".cr_list > li, .main_con_title.con4").removeClass("effect");

    }
    /******************* con_5 초기화 SRART *******************/
    else {

        $(idnm).find(".line_box.con5, .main_con_title.con5").removeClass("effect");
        ysorFuncInit();
        $(".ysor_list").eq(ysorNum).find("li").removeClass("ysorAni");

    }


} ////// initSet 함수 /////////////////////
/////////////////////////////////////////
/////////////////////////////////////////


/*/////////////////////////////////////////
    함수명: scrollAction
    기능: 스크롤시 해당요소의 등장액션 주기    
*/ //////////////////////////////////////////

function scrollAction(idnm) { //idnm-명

    /******************* con_1 애니메이션 SRART *******************/
    if (idnm === "#con_1") {

        $(idnm).find(".wwd_line1").addClass("effect");
        setTimeout(function () {
            $(idnm).find(".main_con_txt").addClass("effect");
        }, 200);
        setTimeout(function () {
            $(idnm).find(".history_box").addClass("effect");
        }, 400);


    }
    /******************* con_2 애니메이션 SRART *******************/
    else if (idnm === "#con_2") {

        $(idnm).find(".line_box").addClass("effect");
        setTimeout(function () {
            $(idnm).find(".main_con_title.con2").addClass("effect");
        }, 200);
        setTimeout(function () {
            $(idnm).find(".branding.media").addClass("effect");
        }, 400);
        setTimeout(function () {
            $(idnm).find(".branding.digital").addClass("effect");
        }, 600);
        setTimeout(function () {
            $(idnm).find(".branding.mcomm").addClass("effect");
        }, 800);

    }
    /******************* con_3 애니메이션 SRART *******************/
    else if (idnm === "#con_3") {

        $(idnm).addClass("black");
        $(idnm).find(".ba_wrap, .ba_line_box, .bg_text_box > .main_con_title, .ba_s_title").addClass("black");
        $(idnm).find(".btn_more").removeClass("black");

    }
    /******************* con_3 / 리스트 애니메이션 SRART *******************/
    else if (idnm === ".ba_list_wrap") {

        $(idnm).find(".ba_list > li:nth-child(1)").addClass("effect");
        setTimeout(function () {
            $(idnm).find(".ba_list > li:nth-child(2)").addClass("effect");
        }, 100);
        setTimeout(function () {
            $(idnm).find(".ba_list > li:nth-child(3)").addClass("effect");
        }, 200);
        setTimeout(function () {
            $(idnm).find(".ba_list > li:nth-child(4)").addClass("effect");
        }, 300);
        setTimeout(function () {
            $(idnm).find(".ba_list > li:nth-child(5)").addClass("effect");
        }, 400);
        setTimeout(function () {
            $(idnm).find(".ba_list > li:nth-child(6)").addClass("effect");
        }, 500);
        setTimeout(function () {
            $(idnm).find(".ba_list > li:nth-child(7)").addClass("effect");
        }, 600);
        setTimeout(function () {
            $(idnm).find(".ba_list > li:nth-child(8)").addClass("effect");
        }, 700);

    }
    /******************* con_4 애니메이션 SRART *******************/
    else if (idnm === "#con_4") {

        $(idnm).find(".line_box.con4").addClass("effect");
        setTimeout(function () {
            $(idnm).find(".main_con_title.con4").addClass("effect");
        }, 200);
        setTimeout(function () {
            $(idnm).find(".cr_list > li:nth-child(1)").addClass("effect");
        }, 400);
        setTimeout(function () {
            $(idnm).find(".cr_list > li:nth-child(2)").addClass("effect");
        }, 600);
        setTimeout(function () {
            $(idnm).find(".cr_list > li:nth-child(3)").addClass("effect");
        }, 800);


    }
    /******************* con_5 애니메이션 SRART *******************/
    else {
        $(idnm).find(".line_box.con5").addClass("effect");
        setTimeout(function () {
            $(idnm).find(".main_con_title.con5").addClass("effect");
        }, 200);
        ysorFunc(0);
    }


} //////// scrollAction함수 //////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////


$(document).ready(function () {

    $(".main_wrap").smoothWheel(); // 부드러운 스크롤 플러그인 적용

    // 스크롤액션 기준요소 top값 셋팅!
    // offset().top 각요소의 top값을 구해주는 메서드,속성
    p1pos = $("#con_1").offset().top;
    p2pos = $("#con_2").offset().top;
    p3pos = $("#con_3").offset().top;
    p3pos_2 = $(".ba_list_wrap").offset().top;
    p4pos = $("#con_4").offset().top;
    p5pos = $("#con_5").offset().top;
    p6pos = $(".footer_wrap").offset().top;

    // 등장할 요소 초기화함수 호출!
    initSet("#con_1");
    initSet("#con_2");
    initSet("#con_3");
    initSet(".ba_list_wrap");
    initSet("#con_4");
    initSet("#con_5");


    //////// 스크롤 이벤트 설정하기 //////////
    $(".main_wrap").scroll(function () {

        cTop = $(this).scrollTop(); //현재 window의 스크롤바 위치(세로 스크롤)

        /// 각 위치별 등장요소 액션주기
        /******************* con_1 SRART *******************/
        if (cTop > p1pos - gap && cTop < p2pos - gap && p1 === 0) {
            // 현재 스크롤 위치가 p1pos(#con_1) 위치값에서 gap(윈도우높이에서 50%를 뺀값) 값을 뺀 값보다 크면서 p2pos(#con_2)위치값에서 gap값을 뺀 값보다 작으면서 p1 이 0일때  
            p1 = 1; //한번만실행!
            scrollAction("#con_1");
        } else if ((cTop < p1pos - gap || cTop > p2pos - gap) && p1 === 1) {
            // 현재 스크롤 위치가 p1pos(#con_1) 위치값에서 gap(윈도우높이에서 50%를 뺀값) 값을 뺀 값보다 작거나 p2pos(#con_2)위치값에서 gap값을 뺀 값보다 큼과 동시에 p1 이 1일때  
            p1 = 0; //복귀
            initSet("#con_1");
        }

        /****************** con_2 SRART *******************/
        else if (cTop > p2pos - gap && cTop < p3pos - gap && p2 === 0) {
            p2 = 1; //한번만실행!
            scrollAction("#con_2");
        } else if ((cTop < p2pos - gap || cTop > p3pos - gap) && p2 === 1) {
            p2 = 0; //복귀
            initSet("#con_2");
        }

        /******************* con_3 SRART *******************/
        else if (cTop > p3pos - gap && cTop < p3pos_2 - gap && p3 === 0) {
            p3 = 1; //한번만실행!
            scrollAction("#con_3");
        } else if ((cTop < p3pos - gap || cTop > p3pos_2 - gap) && p3 === 1) {
            p3 = 0; //복귀
            initSet("#con_3");
        }

        /******************* con_3 / 리스트 SRART *******************/
        else if (cTop > p3pos_2 - gap && cTop < p4pos - gap && p3_2 === 0) {
            p3_2 = 1; //한번만실행!
            scrollAction(".ba_list_wrap");
        } else if ((cTop < p3pos_2 - gap || cTop > p4pos - gap) && p3_2 === 1) {
            p3_2 = 0; //복귀
            initSet(".ba_list_wrap");
        }

        /****************** con_4 SRART *******************/
        else if (cTop > p4pos - gap && cTop < p5pos - gap && p4 === 0) {
            p4 = 1; //한번만실행!
            scrollAction("#con_4");
        } else if ((cTop < p4pos - gap || cTop > p5pos - gap) && p4 === 1) {
            p4 = 0; //복귀
            initSet("#con_4");
        }
        /****************** con_5 SRART *******************/
        else if (cTop > p5pos - gap && p5 === 0) {
            p5 = 1; //한번만실행!
            scrollAction("#con_5");
        } else if (cTop < p5pos - gap && p5 === 1) {
            p5 = 0; //복귀
            initSet("#con_5");
        }

        /* 메뉴 스크롤 이벤트*/
        if (cTop > 0 && cTop < p1pos) {
            menu.css({
                color: "#fff"
            }).find(".menu_icon > span").css({
                backgroundColor: "#fff"
            });
        } else if (cTop > p1pos && cTop < p3pos) {
            menu.css({
                color: "#000"
            }).find(".menu_icon > span").css({
                backgroundColor: "#000"
            });
        } else if (cTop > p3pos && cTop < p4pos) {
            menu.css({
                color: "#fff"
            }).find(".menu_icon > span").css({
                backgroundColor: "#fff"
            });
        } else if (cTop > p4pos && cTop < p6pos) {
            menu.css({
                color: "#000"
            }).find(".menu_icon > span").css({
                backgroundColor: "#000"
            });
        } else {
            menu.css({
                color: "#fff"
            }).find(".menu_icon > span").css({
                backgroundColor: "#fff"
            });
        }

    }); //////// scroll 이벤트 함수 ////////////////
    ///////////////////////////////////////////////
    ///////////////////////////////////////////////


    $(".main_wrap").scrollStopped(function () {
        console.log("스크롤끝확인!");
        // 부드러운 스크롤 세로 스크롤값에 현재 스크롤위치값 넣기!
        // 부호는 반대임!
        currentY = -$(this).scrollTop();
    });


    $(".header_menu").click(function () {
        $(".modal_menu_wrap").fadeIn(400);
        $(".modal_menu_area").addClass("effect");
        setTimeout(function () {
            $(".menu_list > li:nth-child(1) a").addClass("effect");
        }, 500);
        setTimeout(function () {
            $(".menu_list > li:nth-child(2) a").addClass("effect");
        }, 600);
        setTimeout(function () {
            $(".menu_list > li:nth-child(3) a").addClass("effect");
        }, 700);
        setTimeout(function () {
            $(".menu_list > li:nth-child(4) a").addClass("effect");
        }, 800);
        setTimeout(function () {
            $(".menu_list > li:nth-child(5) a").addClass("effect");
        }, 900);
        setTimeout(function () {
            $(".menu_list > li:nth-child(6) a").addClass("effect");
        }, 1000);
    });

    $(".btn_menu_close").click(function () {
        $(".modal_menu_wrap").fadeOut(400);
        $(".modal_menu_area").removeClass("effect");
        $(".menu_list a").removeClass("effect");
    });


});


/// 스크롤 동작이 멈출때 이벤트 플러그인 함수만들기 ////
// 기본이벤트엔 스크롤 멈춤이 없음. 따라서 별도로 제작해야함!
$.fn.scrollStopped = function (callback) {
    var _this = this,
        $this = $(_this);
    $this.scroll(function (event) {
        clearTimeout($this.data('scrollTimeout'));
        $this.data('scrollTimeout', setTimeout(callback.bind(_this), 250, event));
    });
}; //////////// 스크롤멈춤 이벤트 함수 ////////////////////



/*************************************************** MAIN VISUAL START ***********************************************************************/

// 1.슬라이드작동 지킴이 변수
var sprot = 0; //0-작동안함, 1-작동중

var slide = $("#main_v_slide");
var scnt = slide.children().length; // 슬라이드 카운트
var snum = 1; //슬라이드 이동배수

$(".main_visual_wrap").css({
    height: $(window).height()
}); // 메인비주얼 height 100% 설정하기


function back() {

    //// 광클금지!!! /////////////////
    // 잠금시에 돌아가!
    if (sprot === true) return false;
    //잠금설정!
    sprot = true;
    //일정시간후 잠금해제
    setTimeout(function () {
        sprot = false; //해제!
    }, 2500); // 2초후 //
    /////////////////////////////////



    // 마지막 li가 들어올 대상 ※.last를 쓸경우 ul(#main_v_slide)의가상클래스 after가 잡히므로 쓰면안됨.
    var seq = Number(slide.find("li").eq(3).attr("data-seq")) + 1;
    console.log("순번:" + seq);

    // 배너 넘버변경
    $("#main_v_paging_num").text("0" + seq);

    slide.prepend(slide.find("li").eq(3))
        .css({
            left: "-100%"
        })
        .animate({
            left: '0%'
        }, 400);
    /*
        animate({CSS설정},시간,이징,함수)
        - 트랜지션을 주지 않고 css설정 변경만으로 애니메이션이 되게 하는 
        제이쿼리 대표 메서드~!!!!
        1. 중괄호안에 CSS설정 {속성:값,속성:값,...}
        2. 시간: 1/1000초 애니메이션 되는 시간
        3. 이징: 가속도
        4. 콜백함수: 애니메이션 수행 후 실행코드 구역
    */

    //  class넣기
    slide.find("li").eq(0)
        .find(".main_v_logo, .main_v_txt, .main_v_tit, .main_v_text_box > .btn_more").addClass("effect")
        .parents(".main_v_slide_bg")
        .siblings()
        .find(".main_v_logo, .main_v_txt, .main_v_tit, .main_v_text_box > .btn_more").removeClass("effect");

}

function next() {

    //// 광클금지!!! /////////////////
    // 잠금시에 돌아가!
    if (sprot === true) return false;
    //잠금설정!
    sprot = true;
    //일정시간후 잠금해제
    setTimeout(function () {
        sprot = false; //해제!
    }, 2500); // 2초후 //
    /////////////////////////////////

    // 두번째 li가 들어올 대상
    var seq = Number(slide.find("li").eq(1).attr("data-seq")) + 1;
    console.log("순번:" + seq);

    // 배너 넘버변경
    $("#main_v_paging_num").text("0" + seq);

    slide.animate({
        left: "-100%"
    }, 400, function () {
        //맨앞 li 잘라서 맨뒤로 보내기
        $(this).append($("li", this).first())
            .css({
                left: "0"
            });
    });

    slide.find("li").eq(1)
        .find(".main_v_logo, .main_v_txt, .main_v_tit, .main_v_text_box > .btn_more").addClass("effect")
        .parents(".main_v_slide_bg")
        .siblings() //.main_v_slide_bg를 뺀 나머지 선택
        .find(".main_v_logo, .main_v_txt, .main_v_tit, .main_v_text_box > .btn_more").removeClass("effect");
}


/*************************************************** CONTENTS 04 : CREATIVE PROJECT ***********************************************************************/

// 1.슬라이드작동 지킴이 변수
var cr_sprot = 0; //0-작동안함, 1-작동중

var cr_slide;
var cr_scnt; // 슬라이드 카운트
var cr_snum = 1; //슬라이드 이동배수

var cr_f_effect_li;
var cr_sprot = false; // 슬라이드 작동 지킴이 변수 / false-작동안함, true-작동중


var crBackIng = false;

function crBack(crType) {
    //// 광클금지!!! /////////////////
    // 잠금시에 돌아가!
    if (cr_sprot === true) return false;
    //잠금설정!
    cr_sprot = true;
    crBackIng = true;
    //일정시간후 잠금해제
    setTimeout(function () {
        cr_sprot = false; //해제!
        crBackIng = false;
    }, 2000); // 2초후 //
    /////////////////////////////////

    cr_slide = $(".cr_pjv." + crType);
    cr_scnt = cr_slide.children().length;
    cr_f_effect_li.removeClass("f_effect");

    // 마지막 li가 들어올 대상 ※.last를 쓸경우 ul(#main_v_slide)의가상클래스 after가 잡히므로 쓰면안됨.
    var seq = Number(cr_slide.find("li").eq(2).attr("data-cr-" + crType + "-seq")) + 1;

    // 배너 넘버변경
    $(".cr_paging_num").text("0" + seq);

    cr_slide.prepend(cr_slide.find("li").eq(2))
        .css({
            left: "-100%"
        })
        .animate({
            left: '0%'
        }, 400);
    /*
        animate({CSS설정},시간,이징,함수)
        - 트랜지션을 주지 않고 css설정 변경만으로 애니메이션이 되게 하는 
        제이쿼리 대표 메서드~!!!!
        1. 중괄호안에 CSS설정 {속성:값,속성:값,...}
        2. 시간: 1/1000초 애니메이션 되는 시간
        3. 이징: 가속도
        4. 콜백함수: 애니메이션 수행 후 실행코드 구역
    */
    cr_slide.find("li").eq(0)
        .find(".cr_pjv_img, .cr_pjv_text_box").addClass("effect")
        .parents(".cr_pjv_bg")
        .siblings() //cr_pjv_bg를 뺀 나머지 선택
        .find(".cr_pjv_img, .cr_pjv_text_box").removeClass("effect");

}


var crNextIng = false;

function crNext(crType) {


    //// 광클금지!!! /////////////////
    // 잠금시에 돌아가!
    if (cr_sprot === true) return false;
    //잠금설정!
    cr_sprot = true;
    crNextIng = true;
    //일정시간후 잠금해제
    setTimeout(function () {
        cr_sprot = false; //해제!
        crNextIng = false;
    }, 2000); // 2초후 //
    /////////////////////////////////

    cr_slide = $(".cr_pjv." + crType);
    cr_scnt = cr_slide.children().length;
    cr_f_effect_li.removeClass("f_effect");

    // 두번째 li가 들어올 대상
    var seq = Number(cr_slide.find("li").eq(1).attr("data-cr-" + crType + "-seq")) + 1;
    console.log("순번:" + seq);

    // 배너 넘버변경
    $(".cr_paging_num").text("0" + seq);

    cr_slide.animate({
        left: "-100%"
    }, 400, function () {
        //맨앞 li 잘라서 맨뒤로 보내기
        $(this).append($("li", this).first()).css({
            left: "0"
        });
    });

    cr_slide.find("li").eq(1)
        .find(".cr_pjv_img, .cr_pjv_text_box").addClass("effect")
        .parents(".cr_pjv_bg")
        .siblings() //cr_pjv_bg를 뺀 나머지 선택
        .find(".cr_pjv_img, .cr_pjv_text_box").removeClass("effect");
}

$(".cr_list > li > a").click(function () {

    var prnt = $(this).parent();

    if (prnt.hasClass("cr_pc")) {
        pjvView("pc");
    } else if (prnt.hasClass("cr_app")) {
        pjvView("app");
    } else if (prnt.hasClass("cr_mkt")) {
        pjvView("mkt");
    }

});

var checkView = true;

$(".btn_close").click(function () {


    if (!checkView && !crNextIng && !crBackIng) {

        btnCloseClick();
    }

});



function pjvView(crType) {

    checkView = true;

    if (mob) {
        location.href = "sub/sub.html";
        return false;
    }
    $(".cr_pjv_wrap." + crType).addClass("effect");
    $(".cr_list").addClass("effect");

    cr_f_effect_li = $(".cr_pjv." + crType).find("li").eq(0).find(".cr_pjv_img, .cr_pjv_text_box");

    cr_f_effect_li.addClass("f_effect");

    setTimeout(function () {
        cr_f_effect_li.removeClass("f_effect");
        checkView = false;
    }, 3000);


}

function btnCloseClick() {
    $(".cr_pjv_wrap").removeClass("effect");
    $(".cr_list").removeClass("effect");
}
