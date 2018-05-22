//*******Check off specific Todos by clicking**********
// $("li").click(function(){
//    $(this).css("color", "gray");
//    $(this).css("text-decoration", "line-through");
// })
//could also write this shorter like this:

$("ul").on("click", "li", function(){  //when an li is clicked inside of the UL     .on adding events to current and future elements
    $(this).toggleClass("completed");
});

//*************Click on X to delete */
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){       
        $(this).remove();
    });
    event.stopPropagation(); //keeps the function from bubbling up to parent elements 
})

//********** handling the text input*/
$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        //grabbing new todo text from input
       var todoText = $(this).val();
       //clear the input box
       $(this).val("");
       //create a new li and add to ul
       $("ul").append("<li><span><i class='fa fa-trash'></i> </span>" + todoText + "</li>");   //takes a string of html and appends those elements to whatever we selected
    }
})


//***fades text box in and out by clicking icon */
$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle()
})