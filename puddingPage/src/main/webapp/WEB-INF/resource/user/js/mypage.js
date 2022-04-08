
// ===================== ======내보관함 관련 =================================
$(document).ready(function(){
    $(".search_div").hide();
    $("select[name=selectBox1]").change(function(){
            callfunc();
        $("select[name=selectBox2").change(function(){
            callfunc();

        })
    })
    $(".search_select").change(function(){
       var ret = window.open("um_test.html","_blank","width=550, height=600 , resizeble=no");
    })

})

// ===================== 내보관함 셀렉트 박스 선택시 나타내기 =================
function callfunc() {

    var select1 = $("select[name=selectBox1]").val();
    var select2 = $("select[name=selectBox2]").val();
    

        for(var i=1; i<=10; i++) {        
            var optionAppend;
            optionAppend += "<option value="+i+" > EP : "+i+"</option>"
        }


    $(".search_div").show();
    
    $(".search_select").html("<option>"+ select1 + select2+"</option>");
    $(".search_select option:eq(0)").after(optionAppend);

        
    if(select1=="" || select2==""){
        $(".search_div").hide();
    }


}

// ======================== FAQ ============================ 

function FaqBox__init() {
    $('.faq-box > ul > li').click(function() {
      let $this = $(this);
      
      $this.siblings('.hover').find(' > .faq-box__answer').stop().slideUp(300); 
      $this.siblings('.hover').removeClass('hover');
      
      if ( $this.hasClass('hover') ) {
        $this.find(' > .faq-box__answer').stop().slideUp(300); 
        $this.removeClass('hover');
      }
      else {
        $this.find(' > .faq-box__answer').stop().slideDown(300); 
        $this.addClass('hover');
      }
    });
    
    $('.faq-box__answer').click(function() {
      return false;
    });
  }
  
  FaqBox__init();

  // =======================비밀번호 확인하기 ==========================

function check() {
  var password = document.getElementById("password").value;
  console.log(password);

  // 테스트 비밀번호
  if (password == "1234") {
      location.href = "um_newPassword.html"
  } else {
      alert("비밀번호가 일치하지 않습니다");
      $("#password").val("");
  }
}

// =======================비밀번호 변경하기 ==========================


function submit() {
  var p1 = document.getElementById('user_change_password').value;
  var p2 = document.getElementById('user_check_password').value;
  if (p1 != p2) {
      alert("비밀번호가 일치 하지 않습니다.");
      return false;
  } else if (p1 == null) {
      alert("비밀번호를 입력해주세요.");
      return false;
  } else if (p2 == null) {
      alert("비밀번호를 입력해주세요.");
      return false;
  } else {
      alert("비밀번호 변경이 완료되었습니다.");
      location.href = "um_chart.html"
      return true;
  }

}