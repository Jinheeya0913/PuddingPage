
// 마이페이지 스크롤
var realclick = $("#banner"); 
var realclick_top = 155;  //애니매이션 이동 위치



$(document).ready(function(){
    //나중에 jsp 교체
    $("#headers").load("../views/ur_header.html");

    $("#footers").load("../views/ur_footer.html");
    
    $("#submenu").load("../views/um_submenu.html");

    realclick.animate( { "top": $(document).scrollTop() + realclick_top + "px" }, 0 );  

    // 마이페이지 베너 스크롤
    $(window).scroll(function(){
        
        realclick.stop();

        realclick.animate( { "top": $(document).scrollTop() + realclick_top + "px" }, 1000 );

       
    });

    //faq 질문 누르기
    FaqBox__init();

})



