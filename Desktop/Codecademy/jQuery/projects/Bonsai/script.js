var main = function() {
    $('#top-text').keyup(function(){
    var inputTop = $(this).val();
    $(".top-caption").text(inputTop);
  });
  	$('#bottom-text').keyup(function(){
    var bottomInput = $(this).val();
    $(".bottom-caption").text(bottomInput);
    });
  	$('#image-url').keyup(function(){
    var imageURL = $(this).val();
    $('.thumbnail img').attr("src", imageURL);
    });
};
 
$(document).ready(main);
