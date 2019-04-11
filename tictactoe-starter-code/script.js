$(function(event){

  var turn = "X"


  function addClickListeners(){
    $("td").each(function(index, grid){
      $(grid).on("click", function(){
        if (turn == "X"){
          $(this).html("X")
          turn = "O"
        } else {
          $(this).html("O")
          turn = "X"
        }
      })
    })
  }
  addClickListeners()

  $("#reset").on("click", function(){
    $("td").html("");
  })
})
