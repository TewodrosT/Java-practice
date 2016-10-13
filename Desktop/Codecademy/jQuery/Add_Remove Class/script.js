$(document).ready(function(){
    $('#text').click(function () {
        $('#text').addClass('highlighted');
    });    

});

//if we change the .addClass into .toggleClass, 
//then it will put and remove the highlight based on clicks.
//with the .addtoclass, 
//the highlight will get stuck on the class after one click