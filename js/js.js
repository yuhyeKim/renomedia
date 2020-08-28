window.addEventListener("DOMContentLoaded", function () {});

var num = 0;
var random;
var list_num = [];

var ysorFunc = function (seq) { // 리스트ul순번
    //var ysor_animation = setInterval(function () {

    random = ranNum(); //겹치지 않게 랜덤 발생

    // 중복이라면 다시 랜덤숫자 뽑기
    while (random == "again") {
        random = ranNum();
    }
    list_num[num] = random;

    console.log("list_num 출력 : " + list_num);

    $(".ysor_list").eq(seq)
        .find("li").eq(random).addClass("ysorAni");

    setTimeout(function () {
        num++;
        if (num < 12) {
            ysorFunc(seq); // 재귀호출!
        } /// if문 ////
        else {
            ysorFuncInit();
        } /// else //////

    }, 100);

}; ///// ysorFunc 함수 //////////////////

function ysorFuncInit() {

    num = 0;
    random = undefined;
    list_num = [];

}


var sprot = false; // 슬라이드 작동 지킴이 변수 / false-작동안함, true-작동중
var topValue = 0;
var ysorNum = 0;

function listTop() {

    //// 광클금지!!! /////////////////
    // 잠금시에 돌아가!
    if (sprot === true) return false;
    //잠금설정!
    sprot = true;
    //일정시간후 잠금해제
    setTimeout(function () {
        sprot = false; //해제!
    }, 2000); // 2초후 //
    /////////////////////////////////

    topValue -= 100;
    if (topValue === -400) topValue = 0;
    $(".ysor_list_area").animate({
        top: topValue + "%"
    }, function () {
        $(".ysor_list").eq(ysorNum).find("li").removeClass("ysorAni");
        ysorNum++;
        if (ysorNum == 4) ysorNum = 0;
        ysorFunc(ysorNum);
    });
} ///////////////////////////// listTop 함수 ///////////////////////

function listBottom() {

    //// 광클금지!!! /////////////////
    // 잠금시에 돌아가!
    if (sprot === true) return false;
    //잠금설정!
    sprot = true;
    //일정시간후 잠금해제
    setTimeout(function () {
        sprot = false; //해제!
    }, 2000); // 2초후 //
    /////////////////////////////////

    topValue += 100;
    console.log(topValue);
    if (topValue === 100) topValue = -300;
    console.log(topValue);
    $(".ysor_list_area").animate({
        top: topValue + "%"
    }, function () {
        $(".ysor_list").eq(ysorNum).find("li").removeClass("ysorAni");
        ysorNum--;
        if (ysorNum == -1) ysorNum = 3;
        ysorFunc(ysorNum);
    });
} ///////////////////////////// listBottom 함수 ///////////////////////




////////// 랜덤 함수 호출 구역 ////////////////////////
function ranNum() {
    var newno = Math.round(Math.random() * 11);
    var psts = false; //중복체크 변수

    for (var i = 0; i < list_num.length; i++) {

        if (list_num[i] == newno) {
            psts = true; //중복상태
            break;
        }
    }

    if (psts == true) { //중복이라면 again리턴
        return "again";
    } else { //중복아니면 랜덤숫자 리턴
        return newno;
    }

}
