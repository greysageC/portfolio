$(document).ready(function(){
	// mainVisual slide
	var mainSwiper = new Swiper('#mainSlide', {
		slidesPerView: 1,
		autoplay: {
			delay: 5000,
		},
		speed: 1000,
		loop: true,
		pagination: {
			el: '.slide-area .swiper-pagination',
			clickable: 'true',
		},
	    paginationClickable: true,
		navigation: {
		  nextEl: '.slide-area .swiper-button-next',
		  prevEl: '.slide-area .swiper-button-prev',
		},
		on: {
			init: function () {
				$('.slide-area .swiper-button-pause').on('click',function(){
					if($(this).hasClass('stop')){
						mainSwiper.autoplay.start();
						$(this).removeClass('stop');
						$(this).css({'background-image':'url(./images/main/main-ico-pause.png)'});
					}else{
						$(this).addClass('stop');
						mainSwiper.autoplay.stop();
						$(this).css({'background-image':'url(./images/main/main-ico-play.png)'});
					}
				})
			},
		},
	});

	//조회타입 선택
	$('#inqSelect').change(function(){
		var optIdx = $(this).val();
		if(optIdx == 'num'){
			$('div.line').hide();
			$('div.num').show();
			$('#searchDate').css({'width':'332px'});
		}else{
			$('div.num').hide();
			$('div.line').show();
			$('#searchDate').css({'width':'215px'});
		}
	})

	//이벤트 카드 호버
	$('.event-card').mouseenter(function(){
		$(this).find('.evt-info').stop().animate({'height':'100%'}, 400, 'easeOutCubic')
		$(this).addClass('open');
	}).mouseleave(function(){
		$(this).find('.evt-info').stop().animate({'height':'60px'}, 400, 'easeOutCubic')
		$(this).removeClass('open');
	})

	//부가서비스
	$('.service-box > a').mouseenter(function(){
		$(this).find('dd').stop().animate({'bottom':'0'}, 300)
	}).mouseleave(function(){
		$(this).find('dd').stop().animate({'bottom':'-100%'}, 300)
	})
})

var main = {
	init: function(){
		specialSlide();
	}
}

//예약영역 시작 (수정 중)
var areaAirportDatas = ['한국','동북아','동남아'];
var cityAirportData = [['서울/인천(ICN)','서울/김포(GMP)','부산(PUS)'],['도쿄/나리타(NRT)','상하이/푸동(PVG)','홍콩(HKG)'],['방콕(BKK)','푸껫(HKT)','세부(CEB)','클락(CRK)']];

// 공항선택 레이어 오픈
var showAirportLayer = function (object, type){
	layerAllClose();
    //var targetLayer = "";
    // if(type == 'R'){
    //     targetLayer = $('div[name="allAirportR"]')
    // }
    setAreaAirportLayer();
    //targetLayer.show();
}

// 공항 레이어 데이터 세팅
var setAreaAirportLayer = function setAreaAirportLayer() {
	var $intDiv	= $('.national'),
		intNationHtml = [], 
		intAirportHtml= [],
        i = 0,
		j = 0,
		k = 0,
		iIdx = 0; 
        while(i < areaAirportDatas.length) {
            if(i == 0){
				intNationHtml[i]    = '<div class="list-nation">' + '<ul>' + '<li class="active">'+ '<a href="#none" onclick="javascript:clickArea(this);">' + areaAirportDatas[i] + '</a>' + '</li>';
				
            }
            else{
                intNationHtml[i] = '<li>'+ '<a href="#none" onclick="javascript:clickArea(this);">' + areaAirportDatas[i] + '</a>' + '</li>';

                if(i == (areaAirportDatas.length)){
                    intNationHtml[i] = '<li>'+ '<a href="#none" onclick="javascript:clickArea(this);">' + areaAirportDatas[i] + '</a>' + '</li>' + '</ul>' + '</div>'
                    
                }
			}
			
			while(j < cityAirportData.length ){
				if(j == 0){
					intAirportHtml[iIdx] = '<div class="list-airport active">' + '<ul>'

					for(k = 0; k < cityAirportData[j].length; k++){
						tempIntAirportHtml = '<li>' + 
						'<a href="#none" onclick="javascript:setAirportData(this);">' + cityAirportData[j][k] + '</a>' +
						'</li>';
						intAirportHtml[iIdx] += tempIntAirportHtml;

					}

					intAirportHtml[iIdx] += '</ul>' + '</div>'
				}else{
					intAirportHtml[iIdx] = '<div class="list-airport">' + '<ul>'

					for(k = 0; k < cityAirportData[j].length; k++){
						tempIntAirportHtml = '<li>' + 
						'<a href="#none" onclick="javascript:setAirportData(this);">' + cityAirportData[j][k] + '</a>' +
						'</li>';
						intAirportHtml[iIdx] += tempIntAirportHtml;

					}
					intAirportHtml[iIdx] += '</ul>' + '</div>'
				}	
				j++;
				iIdx++;
			}
            i++;
		}
		
		$intDiv.html('');
        $intDiv.append(intNationHtml.join(''));
        $intDiv.append(intAirportHtml.join(''));
        
}

// 공항 선택 시
var setAirportData = function setAirportData(object) {
	$a = $('.list-airport li > a');
	$a.parent('li').removeClass('on');
	$(object).parent('li').addClass('on');
	var area;
	$('.list-airport li').each(function() {
		var $this = $(this),
			$thisA = $this.find('a');
		if($this.hasClass('on')){
			area = $thisA.text();
		}
	});
	$('#txtDepartureAirportR').val(area);
	$('#labelDepartureAirportR').hide();
	var index = $(object).parents('.shadow-layer').index()
	
};

/* 공항선택 다음버튼 클릭 (수정 중)*/
// var clickNextStep = function clickNextStep (layerID, type) {
// 	var $layerID = $("[name='"+layerID+"']").attr('id');

// 		var area,
// 			mgtArea,
// 			airportName,
// 			airport,
// 			city,
// 			cityName,
// 			direct;
// 		$('.city_list > li').each(function() {
// 			var $this = $(this),
// 				$thisA = $this.find('a');
// 			if($this.hasClass('on')){
// 				area		= $thisA.text('area');
// 				// mgtArea		= $this.attr('mgtArea');
// 				// airportName	= $this.attr('airportName');
// 				// airport		= $this.attr('airport');
// 				// city		= $this.attr('city');
// 				// cityName	= $this.attr('cityName');
// 				// direct		= $this.attr('direct');
// 			}
// 		});

// 			if(typeof airport == 'undefined') {
// 				var depAirportId = 'departureAirport'+type;
// 				if($('#'+depAirportId).val() == ''){
// 					validation = false;
// 				}
// 				alert('공항을 선택해 주십시오.');
// 				return false;
// 			}
// 			$('#txtDepartureAirportR').val(area);
// };

var clickArea = function clickArea(object) {
	var $this = $(object),
		$li = $('.list-nation').find('li');
	$li.removeClass('active');
	//$li.find('a').attr('title', '');
	$this.parent().addClass('active');
	//$this.attr('title', jsJSON.J0022);
	var natIdx =$this.parent().index();
	$this.closest('.flights-list').find('.list-airport').removeClass('active');
	$this.closest('.flights-list').find('.list-airport').eq(natIdx).addClass('active');
};

//날짜 선택 수정중
    var owner = $('.datepicker');
    var _that = $(this);
    // $("#sCalendarR").datepicker({
    //     dateFormat: 'yy-mm-dd',
    //     showMonthAfterYear: true,
    //     yearSuffix: "년",
    //     monthNames: ['1월','2월','3월','4월','5월','6월', '7월','8월','9월','10월','11월','12월'],
    //     monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
    //     dayNamesMin: ['일','월','화','수','목','금','토'],
    //     dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'], 
    //     showButtonPanel	: false,
    //     autoclose: false,
    //     beforeShow: function(input) {
    //         setTimeout(function(){
    //            $("#ui-datepicker-div").css({"top":"741px","left":"50%","transform":"translateX(-50%)"});
    //         })
    //      },
	// });
	
	// 예약 영역 오픈
    function bookingAreaOpen(){
        $('.booking-area').animate({ 'top':'110px','margin-top':'0' }, 250, 
        'easeOutCubic');
        $('.layer-bgBlack').show();
	}

	// 예약 영역 닫기
	function quickAreaFold(){
		$('.booking-area').animate({ 'top':'0','margin-top':'530px' }, 250, 
        'easeOutCubic');
        $('.layer-bgBlack').hide();
	}

	// 레이어 모두 닫기
    var layerAllClose = function(){
        $('.shadow-layer').hide();
        //$('.calendar-layer').hide();
        $('.hdlayer-wrap').hide();
	};
	
	$('.layer-bgBlack,.layer-close').on('click', function(){
		layerAllClose();
		quickAreaFold();
	});

    // 예약 레이어 오픈
        var selectInput = $('.booking-area').find('.selectValue').find('input:text');
        var layers = $('.shadow-layer');
        $('.psng').on('click', function(){
            $(this).siblings('input').focus();
        });
        selectInput.on('focus', function(){
            layers.hide();
            $(this).parent('.selectValue').next(layers).show();
            bookingAreaOpen();

            /* 열려있는 레이어의 인풋에 on클래스 추가 */
            var vDiv = $('.shadow-layer:visible');
            selectInput.parent('div').removeClass('on');
            vDiv.prev('.selectValue').addClass('on');

            $(this).next('.shadow-layer').show();
			$(this).parent('.selectValue').addClass('on');
			setAreaAirportLayer();
			// if($(this).parent('.selectValue').hasClass('loct')){
			// 	showAirportLayer(this,'R');
			// }
            // if ($(this).parent('.selectValue').hasClass('psng') && $('#psng').attr('placeholder') != '' && $('#adultCount').val() != '0') {
            //     $('.psg_nums').show();
            //     $('#psng').attr('placeholder','');
            // }
		});


// special slide 
function specialSlide(){
	var specialSwiper = new Swiper('#specialSlide', {
		slidesPerView: 4,
		spaceBetween: 20,
		speed: 500,
		loop: true,
		navigation: {
			nextEl: '#specialSlide .swiper-button-next',
			prevEl: '#specialSlide .swiper-button-prev',
		},
	});
}

main.init();    

    




