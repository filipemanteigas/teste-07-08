var likes = 0;

 
$(".gosto").click(function(){

$primeiro = $(this).parents('.livro');
$primeiro.removeClass("active");
$proximo = $primeiro.next();
$proximo.addClass("active");






if (likes >=10){
    likes=10;}
else{
        likes++}

    
jQuery('#teste').text(likes)


});


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


});




$opinion= [ ];

$(".primeiro").on('click','.inicio',function(){
 showNext($(this));
});

$(".row").on('click','.gosto',function(){
 $opinion.push("like");
 showNext($(this));
});

$(".row").on('click','.naogosto',function(){
 $opinion.push("dislike");
 showNext($(this));
});

function showNext($button){
$book = $button.parents(".primeiro");
$book.removeClass("primeiro");
$nextBook = $book.next();
$nextBook.addClass("primeiro")};


    $("#qq").click(function(){
        $("button.inicio").hide();
    });
    

        var book1 = { 
            title:"Torre de belem",
            descricao:"teste",
            imagem:"torrebelem.jpg",
            linkgoogle:"http://www.google.com",
            linklisboa:"http://www.cm-lisboa.pt",

        }
       

      

        var book2 = { 
            title:"mercado",
            descricao:"teste",
            imagem:"torrebelem.jpg",
            linkgoogle:"http://www.google.com",
            linklisboa:"http://www.cm-lisboa.pt",    
        }

         var book3 = { 
            title:"rua",
            descricao:"teste",
            imagem:"rua.jpeg",
            link:"http://www.google.com",
            link:"http://www.cm-lisboa.pt",    
        }
           var library = [book1,book2,book3];

       function complete(){
           var HTML = `
                <div class="livro col-md-4  col-md-offset-4 col-sm-8 col-sm-offset-2">
                    <img src="rua.jpeg" class="img-thumbnail" alt="rua">
                    <h1>Rua amilcar jorge</h1>
                    <p>teste</p> 
                    <button class="btn btn-danger btn btn-primary btn-lg gosto">Gosto</button>
                    <button class="btn btn-warning btn btn-primary btn-lg naogosto">Nao Gosto</button>                            
                    <br />
                    <a class=google</a>
                    <br />
                    <a class="lisboa"</a>
                    </div> `;

              $.each(library,function(index,book){
                $('#bookContainer').append(HTMLtoInsert);
                $lastInserted = $('.book:last-child');

                    $('h1',$lastInserted).text(book.title);
                    $('p',$lastInserted).text(book.descricao);
                    $('img',$lastInserted).attr('src',book.imagem);
                    $('a'.google,$lastInserted).attr('href',book.link.google);
                    $('a'.lisboa,$lastInserted).attr('href',book.link.lisboa);

                
                })
                    $('.book:first-child').addClass('active');
                }

complete();