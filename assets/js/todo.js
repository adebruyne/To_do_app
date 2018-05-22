//*******Check off specific Todos by clicking**********
// $("li").click(function(){
//    $(this).css("color", "gray");
//    $(this).css("text-decoration", "line-through");
// })
//could also write this shorter like this:

$("li").click(function(){
    $(this).toggleClass("completed");
});

//*************Click on X to delete */
$("span").click(function(event){
    $(this).parent().fadeOut(500, function(){       
        $(this).remove();
    });
    event.stopPropagation(); //keeps the function from bubbling up to parent elements 
})