function addRow() {
    // table element 찾기
    const table = document.getElementById('seq');
    
    // 새 행(Row) 추가
    const newRow = table.insertRow();
    
    // 새 행(Row)에 Cell 추가
    const newCell1 = newRow.insertCell(0);
    const newCell2 = newRow.insertCell(1);
    
    // Cell에 텍스트 추가
    newCell1.innerText = '111';
    newCell2.innerText = '222';
    newCell2.innerText = '333';
  }

 // selectbox에 따른 검색 기능 구현 

  $(document).ready(function() {
    $("#keyword").keyup(function() {

    })
})
  $(document).ready(function() {
  if(nameSearch).equals(nameValue)&(nick).equals(nameValue)
    $("#nameValue").keyup(function() {
        var k = $(this).val();
    })
})

$(document).ready(function() {
  $("#nameValue").keyup(function() {
      var k = $(this).val();
      $("#user-table > tbody > tr").hide();
  })
})


#tableBody{
  //눌렀을때 하단 메뉴바 셋팅
  //버튼 4개
}