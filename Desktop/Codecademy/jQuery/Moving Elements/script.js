$(document).ready(function(){
    $('#one').after('<p>This is a tag before one.</p>') ;  
    var $move = $('p');
    $('#two').after($move);
});