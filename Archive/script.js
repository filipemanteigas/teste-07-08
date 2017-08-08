var likes = 0;


$('.gosto').click(function(){
if (likes >=10){
    likes=10;}
else{
        likes++}

    
jQuery('#teste').text(likes)


})


$('.naogosto').click(function(){
if (likes <=0){
    likes=0;}
else{
        likes--}

jQuery('#teste').text(likes)
});


$('.reset').click(function(){
likes=0
jQuery('#teste').text(likes)


})