$(function(event){

var turn = "first"

$("table").on("click",function(){
  $("td").each(function(index, grid){
    $(grid).on("click", function(){
    })
  })
  if(turn == "first"){
    $("td").each(function(index, grid){
    console.log("first player clicked")
    turn = "second"
    $(grid).html("X")
  })
  }
  else {
    $("td").each(function(index, grid){

    console.log("second player clicked")
    turn = "first"
    $(grid).html("O")
  })
  }
  if(turn == "second"){
  }
})







})






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
