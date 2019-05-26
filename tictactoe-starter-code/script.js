$(function(event){


  var turn = "X"



  function addClickListeners(){
    $("td").each(function(index, grid){
      $(grid).on("click", function(){
        if (turn == "X"){
          $(this).html("X")
          turn = "O"
          $(".playerTurn").html("It is O's turn")
        } else {
          $(this).html("O")
          turn = "X"
          $(".playerTurn").html("It is X's turn")
        }
      })
    })
  }
  addClickListeners()

  // function AIMove(){
  //
  // }

  function gameComplete(){
    console.log($("td").attr("data-num","0")[1].innerHTML);
    if ($("td").attr("data-num","0")[0].innerHTML == "X" && $("td").attr("data-num","0")[1].innerHTML == "X" && $("td").attr("data-num","0")[2].innerHTML == "X"){
      console.log("it works")
    }
  }
  gameComplete()

  $("#reset").on("click", function(){
    turn = "X"
    $("td").html("");
    $(".playerTurn").html("It is X's turn")
  })
})
