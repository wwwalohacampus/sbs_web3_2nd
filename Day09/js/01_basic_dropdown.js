
// 문서 준비 이벤트$(function() {
// jQuery   - $(function() {})
// js       - document.addEventListener('DOMContentLoaded', () => {})

$(function() {

    // 메인 메뉴 - 마우스 올렸을 때 이벤트
    // $('nav > ul > li').on('mouseover', function() {
    //     $(this).children('.submenu').stop().slideDown(1000)
    // })

    // // 메인 메뉴 - 마우스가 벗어날 때 이벤트
    // $('nav > ul > li').on('mouseout', function() {
    //     $(this).children('.submenu').stop().slideUp(1000)
    // })

    // 메인 메뉴 - 마우스 클릭 이벤트
    $('nav > ul > li').on('click', function() {
        // 현재 선택한 메인 메뉴 아래 서브 메뉴만 슬라이드
        // $(this).children('.submenu').stop().slideToggle(1000)

        // 모든 서브 메뉴 슬라이드
        $('.submenu').stop().slideToggle(1000)
    })


})