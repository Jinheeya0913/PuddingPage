
//상세 페이지 좋아요 버튼 클릭 이벤트
$("#product_like1").on("click",function(){
    $("#product_like1").hide();
    $("#product_like2").show();
})

$("#product_like2").on("click",function(){
    $("#product_like2").hide();
    $("#product_like1").show();
})

