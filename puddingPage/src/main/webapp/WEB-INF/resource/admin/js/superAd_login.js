
function adminLoginCheck() {
  var id = document.getElementById('adId');
  var password = document.getElementById("adPw").value;
  console.log(password);

 테스트 비밀번호
  if (id == "admin" && password == "1234") {
      location.href = "superAd_main.html"
  } else {
      alert("비밀번호가 일치하지 않습니다");
      $("#password").val("");
  }
}


/*
const adId = document.getElementById('adminId');
const adPw = document.getElementById('adminPw');
const adBt = document.getElementById('adminBt');


function adiminLoginCheck(){
	var adId = document.getElementById("adminId").value;
	var adPw = document.getElementById("adminPw").value;


	if(adId==admin && adPw=="1111"){
		console.log("Login Success");
		location.replace()

	}else{
		console.log("Login Fail");
		alert("아이디 혹은 비밀번호가 맞지 않습니다.");
	}
}
*/


/*document.querySelector("#btn").addEventListener("click", () => {
    const id = "admin";
    const password = "1234";
 
    if(id == document.querySelector("#id").value) {
        if(password == document.querySelector("#password").value) {
         
        }else{

        }
*/
