
let pause = false

$(function() {

    let slide = $('#slide')
    let list = $('.slide-list')
    let item = $('.slide-item')
    let prevBtn = $('.prev')
    let nextBtn = $('.next')
    let currentNo = 1
    let currentIndex = 0
    let currentPosition = 0

    // <li> 태그들의 가로/세로/개수
    let slideHeight = item.height()
    let slideWidth = item.width()
    let slideCount = item.length

    // <ul> 태그 가로 사이즈
    let totalSlideWidth = slideWidth * slideCount
    list.css({
        width : totalSlideWidth + 50,
        // marginLeft : -slideWidth
    })

    // alert('세로/가로/개수 : ' + slideHeight + ',' + slideWidth + ',' + slideCount)

    // 이전 이미지 세팅
    let initNum = parseInt(slideCount / 2)

    for( let i = 0 ; i < initNum ; i++ )
        $('.slide-item:last-child').prependTo(list)
    list.css({left: currentPosition-=slideWidth*(initNum) })

    // 페이지 네비게이션
    for( let i = 0 ; i < slideCount ; i++ ) {
        let dot = "<a href='#' class='dot'></a>"
        $(".dots-box").append(dot)
    }
    $(".dot:first-child").addClass('active')

    
    $('.slide-item').css({ opacity: 0.3 })
    $('.slide-item:nth-child('+ (initNum+1) +')').css({ opacity: 1 })
        
    // 자동 재생
    let timer = setInterval( () => {
        if( !pause ) {
            $('.next').trigger('click');
        }
    }, 3000)

    // 슬라이드에 마우스 오버 시
    $('.slide-list, .btn-box').on('mouseover', function() {
        pause = true
    })

    $('.slide-list, .btn-box').on('mouseout', function() {
        pause = false
    })


    // 이전 버튼 클릭 이벤트
    $('.prev').on('click', () => {

            $('.slide-item:last-child').prependTo(list)
            list.css({left: currentPosition-=slideWidth })
            
            // list.animate( 스타일, 실행시간, 실행후 작업 )
            list.stop().animate( { left: currentPosition+=slideWidth }, 1000, function() {
                // 애니메이션 종료 후 작업
            })

            $('.slide-item').stop().animate({ opacity: 0.2 }, 1000)
            $('.slide-item:nth-child('+ (initNum+1) +')').stop().animate({ opacity: 1 }, 1000)

            if( currentNo == 1 )
                currentNo = slideCount
            else
                currentNo--

            $(".dot").removeClass('active')
            $(".dot:nth-child(" + currentNo + ")").addClass('active')

    })

    // 다음 버튼 클릭 이벤트
    $('.next').on('click', () => {
       
            list.css({ left: currentPosition+=slideWidth })           
            $('.slide-item:first-child').appendTo(list)
            // list.animate( 스타일, 실행시간, 실행후 작업 )
            list.stop().animate( { left: currentPosition-=slideWidth }, 1000, function() {
                // 애니메이션 종료 후 작업
            })

            $('.slide-item').stop().animate({ opacity: 0.2 }, 1000)
            $('.slide-item:nth-child('+ (initNum+1) +')').stop().animate({ opacity: 1 }, 1000)

            if( currentNo == slideCount)
                currentNo = 1
            else
                currentNo++

            $(".dot").removeClass('active')
            $(".dot:nth-child(" + currentNo + ")").addClass('active')
    })


    // 페이지 네비게이션 클릭 이벤트
    $(document).on('click', '.dot', function() {
        let index = $(this).index()
        let gap = index - currentIndex 
        let absGap = Math.abs(gap)

        if( gap < 0 ) {
            list.animate( { left: currentPosition+=slideWidth*absGap }, 1000, function() {
                // 애니메이션 종료 후 작업
                for( let i = 0 ; i < absGap ; i++ ) {
                    $('.slide-item:last-child').prependTo(list)
                    list.css({ left: currentPosition-=(slideWidth) })     
                }
                $('.slide-item').stop().animate({ opacity: 0.2 }, 1000)
                $('.slide-item:nth-child('+ (3) +')').stop().animate({ opacity: 1 }, 1000)
            })
        }
        
        if( gap > 0 ) {
            list.animate( { left: currentPosition-=slideWidth*absGap }, 1000, function() {
                // 애니메이션 종료 후 작업
                for( let i = 0 ; i < absGap ; i++ ) {
                    list.css({ left: currentPosition+=(slideWidth) })     
                    $('.slide-item:first-child').appendTo(list)
                }
                $('.slide-item').stop().animate({ opacity: 0.2 }, 1000)
                $('.slide-item:nth-child('+ (3) +')').stop().animate({ opacity: 1 }, 1000)
            })
        }

        currentIndex = index
        currentNo = currentIndex + 1

        $(".dot").removeClass('active')
        $(".dot:nth-child(" + currentNo + ")").addClass('active')

    })
})