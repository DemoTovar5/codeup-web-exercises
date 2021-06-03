$(document).ready(function() {
    alert ("Dom has finished loading!")
});

// $(".Header").css("color", "blue");
//
// $(' p ').css('font-size', '10px');
//
// $(".LeastFav").css("color", "red");
//
// $(".FavSports").css("color", "Green");

// $(".Codeup").css("border", "solid", "blue");
//
// $(" li ").css("font-size", "20px");
//
// var contents = $(' h1 ').html();
// alert(contents);


//
$('#Hello').click(function(){
$(this).css('background-color' , 'blue');
});
$('#Hello').dblclick(function(){
   $(this).css('background-color' , '');
});

// $('#Hello').off('click').on('click',function(){
//     $(this).css('background-color' , 'blue');
// });

$(' p ').dblclick(function() {
 $(this) .css('font-size' , '18px');
});

$(' li ').hover(
    function() {
        $(this).css('color', 'blue');
    },
    function() {
        $(this).css('color', 'black');
    }
);

