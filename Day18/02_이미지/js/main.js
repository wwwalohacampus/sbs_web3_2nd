$(function() {

    // 애니메이션 재생시간
    let duaration = 300

    // 이미지들
    let $images = $('#images p')

    // 첫번째 이미지
    $images.filter(':nth-child(1)').on('mouseover', function() {
        $(this).find('strong, span').stop().animate({opacity : 1}, duaration)
    })



})