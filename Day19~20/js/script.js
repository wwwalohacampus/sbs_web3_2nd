
// 이미지 슬라이드 (slick)
$(function(){
    $('.visual .slide').slick({
        arrows: false,              //화살표 사용안함
        dots: true,                 //닷츠
        autoplay: true,             //자동재생
        fade: true,                 //페이드인 효과 
        autoplaySpeed:5000,         //재생시간 5초
        pauseOnHover:false,         //마우스 오버시 슬라이드 멈춤 해제
        pauseOnFocus:false          //포커스시 슬라이드 멈춤 해제
    });
});

// 스크롤 애니메이션 (scrolla)
$(function(){
    $('.animate').scrolla({
        mobile: true,
        once: false
    })
})


let scrollTop = 0
let containerHeight = 0
// 스크롤 감지
$(window).on('scroll resize', function() {
    // 스크롤 위치
    scrollTop = $(this).scrollTop()
    if( scrollTop > 200 ) {
        $('header').addClass('on')
    } else {
        $('header').removeClass('on')
    }

    // 전체 높이
    containerHeight = $('.container').height()
    // 브라우저 창의 높이
    let windowHeight = $(window).height()
    // 인디케이터 퍼센트
    let percent = 0

    if( scrollTop <= windowHeight ) {
        percent = (scrollTop / containerHeight) * 100
        // (100 / 3000) * 100 =  0.03 * 100 = 3%
    } else {
        percent = ((scrollTop + windowHeight) / containerHeight) * 100
    }

    $('.progress-bar').css({width: percent + "%"})


    console.log('scrollTop : ' + scrollTop);
    console.log('containerHeight : ' + containerHeight)
    console.log('windowHeight : ' + windowHeight)
    console.log('percent :' + percent)
})


/* 모바일 햄버거 버튼  */
$(function() {

    // 모바일 햄버거 버튼 클릭
    $('header .open').on('click', function() {

        $('header .bg').fadeIn()
        $('header nav').addClass('on')
        $('header nav').css({ 'width' : '300px'})
    })

    // 모바일 X 버튼 클릭
    $('header .close, header .bg').on('click', function() {

        $('header .bg').fadeOut()
        $('header nav').removeClass('on')
        $('header nav').css({ 'width' : '0'})
    })

})

