$(document).ready(function(){
    
    // navWrap on
	$('.btn_nav').click(function(){
		$('#navWrap').toggleClass('on');
	}); 
    
    
    // risize
    $(window).resize(function(){
        var win_w = $(window).width()
        if( win_w >= 1300 ){
            $('#navWrap').removeClass('on');
        }
    }).resize()
    
    
    // visual - slide
    var swiper = new Swiper('.visual_inner .swiper-container', {
          // Optional parameters        
        direction:'vertical', // horizontal
        loop:true,
        speed:1000,
        autoplay: { delay:1500, },
        lazy: { loadOnTransitionStart: true, },        
		effect:'false',
		fadeEffect: { crossFade: false },
		parallax: true,
        pagination: {
            el: '.visual_inner .swiper-pagination',
            type: 'fraction',
            renderFraction: function (currentClass, totalClass) {
                return '<span class="' + currentClass + '"></span>' +
                    '<span class="swiper_progress_hidden_space"></span>' +
                    '<span class="' + totalClass + '"></span>';
            }
        },        
    });
    // visual - text
    $('.textBox div:gt(0)').hide();
        setInterval(function(){
            $('.textBox div:first-child').fadeOut()
            .next('div').fadeIn()
            .end().appendTo('.textBox');
        },2500);    
    
    
    // series - slide
    $('.series_inner').find('.slider_box').slick({
        infinite:true,
        autoplay:true,
        autoplaySpeed:1500,        
        dots:true,
        vertical:false,
        draggable:true,
        fade:true,
        arrows:false
    });
    
    
    // good - slide
    var swiper = new Swiper('.good_inner .swiper-container', {
          // Optional parameters
        direction:'horizontal',
        loop:true,
        speed:800,
        autoplay: { delay:1500, },
        lazy: { loadOnTransitionStart: true, },        
		effect:'false',
		fadeEffect: { crossFade: false },
		parallax: true,
        pagination: {
            el: '.good_inner .swiper-pagination',
            type: 'fraction',
            renderFraction: function (currentClass, totalClass) {
                return '<span class="' + currentClass + '"></span>' +
                    '<span class="swiper_progress_hidden_space"></span>' +
                    '<span class="' + totalClass + '"></span>';
            }
        },
    });
    // good - text
    $('.text_box div:gt(0)').hide();
        setInterval(function(){
            $('.text_box div:first-child').fadeOut()
            .next('div').fadeIn()
            .end().appendTo('.text_box');
        },2500);
    
    
    // svg vivus : main
	new Vivus('tlj_logo', {type:'delayed', duration:70,},function(){ $('.t_logo').addClass('fill') });
    var sv1 = new Vivus('svg1',{type:'oneByOne', duration:70 });
    var sv2 = new Vivus('svg2',{type:'oneByOne', duration:100 });
    var sv3 = new Vivus('svg3',{type:'oneByOne', duration:100 });
    
    $(window).on('scroll',function(){
        var wdt=$(this);
        scrollAni(wdt,'#svg1',sv1);
        scrollAni(wdt,'#svg2',sv2);
        scrollAni(wdt,'#svg3',sv3);
    });//vivus scroll
    
    function scrollAni(wd,wdt,vv){
        if( $(wd).scrollTop() > $(wdt).offset().top - wd.height() ){
            vv.play();
        }else{
            vv.reset();
        }
    }//scrollAni
    // end - svg vivus : main
    
    
    // parallax
    function active(sec,act,del){
        if( $(this).scrollTop() > $(sec).offset().top - ($(this).height()/1.3)){
            $(sec).find(act).addClass('active');
        }
        else{
            $(sec).find(act).removeClass('active');
        }
	};
    
    
    // scroll 
    $(window).scroll(function(){
        var win_top = $(window).scrollTop()
        var win_h = $(window).height()        
        
        $('.about_inner > div').each(function(){
            var about_box = $(this).offset().top            
            if(win_top >= about_box - 700 ){
                $(this).find('span, h3, strong, p, a').addClass('active')
            }
            else if(win_top < about_box - win_h ) {
                $(this).find('span, h3, strong, p, a').removeClass('active')
            }
        })     
        
        $('.h2_wrap').css('left', Math.max(900 - 0.55*window.scrollY)+ "px");
        
        active('.newDesign_inner','strong, p, b, span','1.5');
        active('.series_inner','h2, strong, p','1.5');
        active('.good_inner','b, p','1.5');
      
        
    });//scroll     
    
});