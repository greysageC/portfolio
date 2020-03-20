
function toggleAllMenu(){
	// $('html, body').toggleClass('scroll_lock');
  $('.allMenu_wrap').toggleClass('open');
}

$(document).ready(function(){
    $('.allMenu_con ul li > a').on('click',function(e){
        //e.preventDefault();
        if($(this).hasClass('active')){
          $(this).removeClass('active');
          $(this).next('.depth2').stop().slideUp();
        }else{
          $('.allMenu_con ul li>a').removeClass('active');
          $('.allMenu_con ul li .depth2').stop().slideUp();
          $(this).addClass('active');
          $(this).next('.depth2').slideDown();
        }
      })
    $('a[href="#"]').click(function(e) {
        e.preventDefault();
    });
    $('.gnbWarp .depth1').on('mouseenter focusin', function() {
        $('#header').addClass("all");
        $('.gnbWarp .depth2').stop().fadeIn();
        return false;
    });

    $('.gnbWarp .depth1').on('mouseleave ', function() {
        $('#header').removeClass("all");
        $('.gnbWarp .depth2').stop().fadeOut();
    });

    //footer 패밀리사이트 버튼
    $("#footer .btn_link a").on('click',function(){
        $("#footer .linkArea").slideToggle();
    })


  // 탭메뉴
  $('.tab_area').each(function(i) {
    var tab = $(this);
    var tabIndex = 0;
    
    tab.find('.tab li').eq(0).addClass('on');
    tab.find('.tab_content').eq(0).show();

    tab.find('.tab li a').click(function() {
      tabIndex = $(this).attr('data-num');
      tab.find('.tab li').removeClass('on');
      $(this).parent('li').addClass('on');
      tab.find('.tab_content').hide();
      tab.find('.tab_content' + tabIndex).show();

      return false;
    });
  });
})

$(window).scroll(function(e){
    e.preventDefault();
    var scrollTop = $(this).scrollTop();

    if(scrollTop !== 0){
        $('#header').addClass("on");
    }else{
        $('#header').removeClass("on");
    }
    
})


