

function Queue(){
    this.data = [];
    
    this.enqueue = function (element){
        this.data.push(element);
    };
    this.dequeue =function(){
      var result = this.data[0]  
      this.data.splice(0,1);

      return result;
      
    };
};

function Library(){
    this.books = new Queue()
    this.actualBook = null;
   
    this.addbook = function(book){
        
        this.books.enqueue(book);  
    };
     
    this.nextBook = function(){
       this.actualBook = this.books.dequeue();
       this.actualBook.render();
    };
    this.like = function(){
        this.actualBook.likes++;
        this.nextBook();
    }
     this.dislike = function(){
        this.actualBook.dislikes++;
        this.nextBook();

        
    }

};

function Book(title,descricao,imagem,linkgoogle,linklisboa){
    this.title =title;
    this.descricao = descricao;
    this.imagem = imagem;
    this.linkgoogle =linkgoogle;
    this.linklisboa =linklisboa;
    this.likes = 0;
    this.dislikes = 0;
    this.render = function(){
        $("#title").html(this.title);
        $("#descricao").html(this.descricao);
        $("#imagem").attr("src",this.imagem);
        $("#linkgoogle").attr("href",this.linkgoogle);
        $("#linklisboa").attr("href",this.linklisboa);

    };
};  

var library= new Library();

var book1 = new Book ("JONAS","teste","jonas.jpg","http://www.google.com","http://www.cm-lisboa.pt");  
var book2 = new Book ("Bas Dost","teste","dost2.jpg","http://www.google.com","http://www.cm-lisboa.pt");  
var book3 = new Book ("Cassillas","teste","cassillas.jpg","http://www.google.com","http://www.cm-lisboa.pt");  
  
library.addbook(book1);
library.addbook(book2);
library.addbook(book3);

library.nextBook(); 


$('#buttonlike').click(function(){
     library.like();
 });

$('#buttondislike').click(function(){
  library.dislike();
});





   function counterLikes(){
    var counterlikes=0;
    var counterDislike=0;
    $.each(library.books.data,function(index, book){
        if(book.likes==1){
            counterlikes++;
        } else {
            counterDislike++;
        }
    });

    $("#contador1").text(counterlikes);
    $("#contador2").text(counterDislike);
}; 
     

 
    



    /*$currentBook = $('.book.active');
    $nextBook = $currentBook.next('.book');

var index = $('.book').index($currentBook);
    library[index].opinion = $(this).attr('data-Opinion');

        if($nextBook.length > 0){
        $currentBook.removeClass('active');
        $nextBook.addClass('active'); 
        }
        else{
        $('#mainPage').hide();
        $('#endPage').show(); 
        completetag();
        counterLikes();
        } */ 
         







/*function complete(){
var HTML =`
    <div class="book col-md-4  col-md-offset-4 col-sm-8 col-sm-offset-2">
    <img src ="" class="aa">
    <h1></h1>
    <p></p> 
                    
    <br />
    <a href= "" class="google">google</a>
    <br />
    <a href = "" class="lisboa">lisboa</a>
    </div> `;

$.each(function(library){
$('#bookContainer').append(HTML);
$lastInserted = $('.book:last-child');

    $('h1',$lastInserted).text(book.title);
    $('p',$lastInserted).text(book.descricao);
    $('img',$lastInserted).attr('src',book.imagem);
    $('a.google',$lastInserted).attr('href',book.linkgoogle);
    $('a.lisboa',$lastInserted).attr('href',book.linklisboa);


});
    $('.book:first-child').addClass('active');
}
*/



// function completetag() {

//     $.each(library.books,function(index,book){

//     var html =` 
//     <tr>
//     <td>`+ book.title + `
//     </td>
//     <td>`+ book.likes + `
//     </td>
//     <td>`+ book.dislikes + `
//     </td>
//     </tr>`;

//     $('#tableresult tbody').append(html);

// });
// }        

/*
var clicks = 0;
    function onClick() {
        clicks +=1;
        var html =`<td>
                   </td>`;
        $('#tableresult tbody').append(html);           
    };
 
 
*/


//var likes = 0;

 
/*$(".gosto").click(function(){

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


var counter= 0 ;
function countUntil10(){
    if (++ counter < 10) {
        (countUntil10(number);
    }
        else{
     return counter:

    }
    }
}

});*/
   


/*$opinion= [ ];

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
    });*/
    

// var book1 = { 
//     title:"Torre de belem",
//     descricao:"teste",
//     imagem:"torrebelem.jpg",
//     linkgoogle:"http://www.google.com",
//     linklisboa:"http://www.cm-lisboa.pt",

// };

// var book2 = { 
//     title:"mercado",
//     descricao:"teste",
//     imagem:"mercado.jpg",
//     linkgoogle:"http://www.google.com",
//     linklisboa:"http://www.cm-lisboa.pt",    
// };

// var book3 = { 
//     title:"rua",
//     descricao:"teste",
//     imagem:"rua.jpeg",
//     linkgoogle:"http://www.google.com",
//     linklisboa:"http://www.cm-lisboa.pt",    
// };