//*******Check off specific Todos by clicking**********
// $("li").click(function(){
//    $(this).css("color", "gray");
//    $(this).css("text-decoration", "line-through");
// })
//could also write this shorter like this:

$("li").click(function(){
    $(this).toggleClass("completed");
});