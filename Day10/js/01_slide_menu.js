
// 문서 준비 이벤트$(function() {
// jQuery   - $(function() {})
// js       - document.addEventListener('DOMContentLoaded', () => {})

$(function() {

    // 메인 메뉴 - 마우스 클릭 이벤트
    $('nav > ul > li').on('click', function() {
        // 현재 선택한 메인 메뉴 아래 서브 메뉴만 슬라이드
        // $(this).children('.submenu').stop().slideToggle(1000)

        // 모든 서브 메뉴 슬라이드
        $('.submenu').stop().slideToggle(1000)
    })

    // 햄버거 메뉴 클릭 이벤트
    let slideOn = 'off'
    $('.slide-open').on('click', () => {

        if( slideOn == 'off' ) {
            // $('.slide').animate({right: 0}, 1000)
            $('.slide').animate({left: 0}, 1500)

            // 햄버거 버튼 애니메이션 
            $('.slide-open').children('span').addClass('on')

            $('.bg').css('display', 'block')

            slideOn = 'on'
        } else {
            // $('.slide').animate({right: '-100%'}, 1000)
            $('.slide').animate({left: '-100%'}, 1500)

            // 햄버거 버튼 애니메이션
            $('.slide-open').children('span').removeClass('on')

            $('.bg').css('display', 'none')

            slideOn = 'off'
        }
    })

    //
    $('.bg').on('click', () => {
        $('.slide').animate({left: '-100%'}, 1500)

        // 햄버거 버튼 애니메이션
        $('.slide-open').children('span').removeClass('on')

        $('.bg').css('display', 'none')

        slideOn = 'off'
    })
    


})