$(document).ready(function(){
    // 팝업레이어
    $('.works-list li').each(function(){
        var _this = $(this);

        _this.on('click',function(e){
            var idx = _this.index();
            $('.layer-bgBlack').show();
            $('.popup-area').find('div').show().animate({'top':'50%','opacity':'1'},150, 'linear');
            $('.popup-area').find('img').eq(idx).show();
            e.preventDefault();
        })
    });

    // 팝업 닫기
    $('.layer-bgBlack').click(function(){
        popUpClose();
    })

    
})

//팝업 닫기 function
function popUpClose(){
    $('.layer-bgBlack').hide();
    $('.popup-area div').animate({'top':'55%','opacity':'0'},150, 'linear').hide();
    $('.popup-area img').hide();
}

$(window).scroll(function(e){
    e.preventDefault();
    var scrollTop = $(this).scrollTop();

    if(scrollTop !== 0){
        $('header').addClass("on");
    }else{
        $('header').removeClass("on");
    }
    
})


