
$(function() {

    $(window).scroll(function(event) {
        // 스크롤의 위치
        let scrollTop = $(document).scrollTop()

        // console.log("스크롤 위치 : " + scrollTop);

        let titleLeft = $('.scroll-title').css('left')
        let titleOffset = $('.scroll-title').offset()
        // 타이틀의 left 속성의 값을 가져온다.
        

        
        
        // $('.scroll-title').css('left', titleOffset.left-=scrollTop*0.3)

    })

    // 스크롤 마우스 휠 방향 감지
    $(window).bind('mousewheel', function(event) {
        // 스크롤의 위치
        // let scrollTop = $(document).scrollTop()
        // let titleOffset = $('.scroll-title').offset()

        // console.log("스크롤 위치 : " + scrollTop);
        
        // // 스크롤의 방향 (↑/↓)
        // if( event.originalEvent.wheelDelta > 0 ){
        //     console.log('위');
        //     console.log("left " + titleOffset.left);

        //     if( titleOffset.left < 0 ) {
        //         $('.scroll-title').css('left', 0)
        //     }
        //     $('.scroll-title').css('left', titleOffset.left+=scrollTop*0.6)
            
        // } else {
        //     console.log('아래');
        //     console.log(titleOffset.left);
        //     if( titleOffset.left > -600 )
        //         $('.scroll-title').css('left', titleOffset.left-=scrollTop*0.6)
        // }

    })


    // 스크롤의 방향 감지
    let prev = 0        // 이전 스크롤 위치
    let move = 80
    let leftMin = -1400
    let leftMax = 1400
    $(window).on('scroll', function() {
        let now = $(this).scrollTop()       // 현재 스크롤 위치
        
        let titleOffset = $('.scroll-title').offset()
        console.log(now);
        
        if( now > prev && titleOffset.left > leftMin && now > 0 && now < 1000 ){
            console.log('아래');
            // $('.scroll-title').css('left', titleOffset.left-=move)
            $('.scroll-title').animate({'left' : titleOffset.left-=move}, 5)
        } else if( now < prev && titleOffset.left < leftMax && now < 1000 ) {
            console.log('위');
            // $('.scroll-title').css('left', titleOffset.left+=move)
            $('.scroll-title').animate({'left' : titleOffset.left+=move}, 5)
        }

        prev = now

    })

})