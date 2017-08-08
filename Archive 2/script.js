//var likes = 0;

 
//$(".gosto").click(function(){

//$primeiro = $(this).parents('.livro');
//$primeiro.removeClass("active");
//$proximo = $primeiro.next();
//$proximo.addClass("active");






//if (likes >=10){
    //likes=10;}
//else{
        //likes++}

    
//jQuery('#teste').text(likes)


//});


//$('.naogosto').click(function(){
//if (likes <=0){
  //  likes=0;}
//else{
        //likes--}

//jQuery('#teste').text(likes)
//});


//$('.reset').click(function(){
//likes=0
//jQuery('#teste').text(likes)


//});

$opinion= [ ];
$(".row").on('click','.gosto',function(){
 $opinion.push("like");
 showNext($(this));
});

$(".row").on('click','.naogosto',function(){
 $opinion.push("dislike");
 showNext($(this));
});

function showNext($button){
$book = $button.parents(".livro");
$book.removeClass("active");
$nextBook = $book.next();
$nextBook.addClass("active");
}