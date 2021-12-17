
// 문서 준비 이벤트
$(function() {

    // :gt(index)
    // - index 보다 큰 번호의 요소를 숨김
    // 첫 번째 사진 제외하고 숨김
    $('#slide > div:gt(0)').hide()


    setInterval( function() {

        // 슬라이드 박스의 첫 번째 자식요소                     //  1           2
        $('#slide > div:first').fadeOut(2000)                //  1번째 사진   2번째 사진
                               .next().fadeIn(2000)          //  2번째 사진   3번째 사진
                               .end().appendTo('#slide')     //  1번째 사진   2번째 사진

    }, 5000)

})


// .fadeOut(1000)       : 1000ms 동안 서서히 사라지게 하는 메서드
// .next()              : 선택한 요소의 다음 요소를 선택하는 메서드
// .fadeIn(1000)        : 1000ms 동안 서서히 나타나게 하는 메서드
// .end()               : 현재 선택한 요소의 이전 요소를 선택하는 메서드
// A.appendTo(B)        : A 를 부모요소(B)의 마지막 자식 요소로 추가하는 메서드