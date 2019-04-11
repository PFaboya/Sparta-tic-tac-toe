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

  $("#reset").on("click", function(){
    turn = "X"
    $("td").html("");
    $(".playerTurn").html("It is X's turn")
  })
})
