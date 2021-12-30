
$(function() {

    /* 
        스크롤의 방향 감지
        - 이전 스크롤 위치
        - 현재 스크롤 위치
        - 이동 크기
        - 최소 지점(left)
        - 최대 지점(left)
    */
    let prev = $(this).scrollTop()          // 이전 스크롤 위치
    let move = 80
    let leftMin = -1200
    let leftMax = 1200

    // 스크롤 이벤트
    $(window).on('scroll', function() {
        let now = $(this).scrollTop()       // 현재 스크롤 위치
        let titleOffset = $('.scroll-title').offset()
        
        // scroll-title 인터렉션
        if( now > prev && titleOffset.left > leftMin && now > 0 && now < 1000 ){
            console.log('아래');
            // $('.scroll-title').css('left', titleOffset.left-=move)
            $('.scroll-title').animate({'left' : titleOffset.left-=move}, 5)
        } else if( now < prev && titleOffset.left < leftMax && now < 1000 ) {
            console.log('위');
            // $('.scroll-title').css('left', titleOffset.left+=move)
            $('.scroll-title').animate({'left' : titleOffset.left+=move}, 5)
        }

        // 스크롤 방향에 따른 헤더 슬라이드
        if( now > prev ) {
            // 아래로 스크롤
            $('header').slideUp()
        } else if( now < prev ) {
            // 위로 스크롤
            $('header').slideDown()
        }

        console.log('now : ' + now);
        // 따라 다니는 플로팅 버튼
        $('.floating').stop().animate({'bottom': -now+15}, 300)

        prev = now
    })

    // 플로팅 버튼 클릭 이벤트
    $('.floating').on('click', function() {

        // 스크롤 맨 위로 이동
        $('html').animate({'scroll-top' : 0}, 1000)
        
    })



})