//js

//jq
$(document ).ready (function(){

$('.counter').counterUp({
    delay: 10,
    time: 1000
});

$('.counter2').counterUp({
    delay: 10,
    time: 1000
});
 

});

//Aos
AOS.init({
     offset: 100,
     delay: 50, 
    duration: 500,
     easing: 'linear'
});
