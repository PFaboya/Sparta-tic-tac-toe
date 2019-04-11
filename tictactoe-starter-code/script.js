$(function(event){

var turn = "X"

// $("table").on("click",function(){
//   $("td").each(function(index, grid){
//     $(grid).on("click", function(){
//     })
  // })
  // if(turn == "first"){
  //   $("td").each(function(index, grid){
  //   $(grid).on("click", function(){
  //   $(grid).html("X")
  //   console.log("first player clicked")
  //   turn = "second"
  // })
  // })
  // }
  // else {
  //   $("td").each(function(index, grid){
  //
  //   $(grid).on("click", function(){
  //   $(grid).html("O")
  //   console.log("second player clicked")
  //   turn = "first"
  // })
  // })
  // }
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
})







// })






// $(function(event){


  // As a user I expect the cross to appear in the square that I click when its my turn and be able to click it again
  // $("td").each(function(index, grid){
  //   $(grid).on("click", function(){
  //     $(grid).html(ticTac)
  //   })
  // })
  // // I expect the computer to put a Circle somewhere and be able to click again after computer turn
  // $("td").each(function(index, grid){
  //   if(grid == "" && grid[i] == "X"){
  //     $(grid).on("click", function(){
  //       $(grid).html("O")
  //     })
  //   }
  // })








// })
