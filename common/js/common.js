$(document).ready(function(){
    
})

$(window).scroll(function(e){
    e.preventDefault();
    var scrollTop = $(this).scrollTop();

    if(scrollTop !== 0){
        $('header').addClass("on");
    }else{
        $('header').removeClass("on");
    }
    
})


