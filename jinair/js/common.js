var CommonJs = (function(){

    function init(){
        eventListener();
        setLang();
        subPage();
    }
    function eventListener(){
        //tooptip
        $('.btn-tooltip').mouseenter(function(){
            $(this).find('.tooltipbox').show();
        }).mouseleave(function(){
            $(this).find('.tooltipbox').hide();
        })

        // language layer
        $(".btn-language").click(function(){
            $('#layerLanguage').toggle();
            $('#layerSearch').hide();
        })

        $(".layer-pop button,.btn-close").click(function(){
            $('.layer-pop').hide();
        })

        // search layer
        $(".btn-search").click(function(){
            $('#layerSearch').toggle();
            $('#layerLanguage').hide();

        })

        // gnb
        $('.gnb-area li').mouseenter(function(){
            var aaa = $(this).position().left;
            $('.gnb_line').show();
            $('.gnb_line').css({'left':aaa})

        })
        $('.gnb-area').mouseleave(function(){
            $('.gnb_line').hide();
        })

    }

    // header top-area 언어 선택
    function setLang(){
        $('#lang').append('<option value="Ko">한국어</option><option value="EN">English</option>');
        $('#nation').change(function(){
            if($(this).val() == "KR"){
                $('#lang').empty();
                $('#lang').append('<option value="Ko">한국어</option><option value="EN">English</option>');
            }else if($(this).val() == "DE"){
                $('#lang').empty();
                $('#lang').append('<option value="Ko">한국어</option><option value="EN">English</option><option value="DE">Deutsch</option>');
            }else if($(this).val() == "US"){
                $('#lang').empty();
                $('#lang').append('<option value="Ko">한국어</option><option value="EN">English</option><option value="ES">Español</option>');
            }else if($(this).val() == "UZ"){
                $('#lang').empty();
                $('#lang').append('<option value="Ko">한국어</option><option value="EN">English</option><option value="RU">Русский</option>');
            }else if($(this).val() == "CN"){
                $('#lang').empty();  
                $('#lang').append('<option value="Ko">한국어</option><option value="EN">English</option><option value="CH">中文(简体)</option>');
            }
        })
    }
   
    function subPage(){
        $('.location > li > a').on('click',function(){
            $('.location > li ul').stop().slideUp();
            $(this).next('ul').stop().slideToggle();

            if($(this).hasClass('open')){
                $(this).removeClass('open');
            }else{
                $('.location > li > a').removeClass('open');
                $(this).addClass('open');    
            }
        })

        //booking 페이지 faq
        $('.checkin-cont .ques-wrap').on('click',function(){
            $('.checkin-cont .answ-wrap').stop().slideUp();
            $(this).next('.answ-wrap').stop().slideToggle();

            if($(this).hasClass('on')){
               $(this).removeClass('on');
            }else{
                $('.checkin-cont .ques-wrap').removeClass('on');
                $(this).addClass('on');
            }
        })

        // travel 페이지 tab
        $('.tab-area').each(function(){
            var _this = $(this);
	        var tabs = _this.find('.tab > li');
            var tabsCont = _this.find('.tab-cont');
            
            tabs.on('click',function(){
                var idx = $(this).index();
               
                if(tabsCont.length < tabs.length){
                    tabsCont.eq(0).css({'display':'block'});
                }else{
                    tabs.removeClass('on');
                    $(this).addClass('on');
                    tabsCont.css({'display':'none'});
                    tabsCont.eq(idx).css({'display':'block'});
                }

                event.preventDefault();
            })
        })
    }


    init();
})();


