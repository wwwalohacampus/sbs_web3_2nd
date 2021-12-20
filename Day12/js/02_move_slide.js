

// 자동 재생 멈춤 여부
let pause = false

// 문서 준비 이벤트
$(function() {

    // 이미지 슬라이드
    let list = $('.slide-list')     // <ul> :   이미지 슬라이드 박스
    let item = $('.slide-item')     // <li> :   각 슬라이드 태그를 노드 리스트로 가져옴

    // 현재 슬라이드 위치/인덱스
    let currentNo = 1
    let currentIndex = 0
    let currentPosition = 0         // 왼쪽으로부터 떨어진 위치 (left)

    // <li> 태그들의 가로/세로/개수
    let slideWidth = item.width()       // 슬라이드 가로크기
    let slideHeight = item.height()
    let slideCount = item.length        // 슬라이드 개수

    // <ul> 이미 슬라이드 박스 크기를 계산한다.
    // 400 x 5 = 2000px
    let totalSlideWidth = slideWidth * slideCount

    // 슬라이드 박스 가로 크기 지정
    // 슬라이드 크기 : 각 슬라이드 가로 크기 X 슬라이드 개수
    list.css( { width : totalSlideWidth + 50 })

    // 이전 이미지 세팅
    // 슬라이드를 절반으로 나누어서 앞으로 가져올 슬라이드 개수
    // 5 / 2 = 2.5, parseInt(2.5) --(정수만)-->  2
    let initNum = parseInt( slideCount / 2 )

    for (let i = 0; i < initNum; i++) {
        // A.prependTo(B)       : A 를 부모요소(B)의 가장 첫 번째 자식요소로 추가한다.
        $('.slide-item:last-child').prependTo(list)
    }

    // 슬라이드 위치 조정
    currentPosition -= slideWidth * initNum
    list.css( { left : currentPosition} )


    // 페이지 네비게이션
    for (let i = 0; i < slideCount; i++) {
        let dot = "<a href='#' class='dot'></a>"
        $('.dots-box').append(dot)
    }

    // 첫 번째 점을 active
    $('.dot:first-child').addClass('active')


    // 3. 페이드 인/아웃
    $('.slide-item').stop().animate({ opacity: 0.2 }, 1000)
    $('.slide-item:nth-child(' + (initNum+1) + ')' ).stop().animate({ opacity : 1 }, 1000)


    // 이전 버튼 (←) 클릭 이벤트
    $('.prev').on('click', () => {

        // 1. 맨 오른쪽 슬라이드가 맨 왼쪽으로 이동한다.
        currentPosition -= slideWidth
        list.css( { left : currentPosition } )
        $('.slide-item:last-child').prependTo(list)

        // 2. 슬라이드 전체가 오른쪽으로 이동한다.
        currentPosition += slideWidth
        list.stop().animate({ left : currentPosition }, 1000)

        // 3. 페이드 인/아웃
        $('.slide-item').stop().animate({ opacity: 0.2 }, 1000)
        $('.slide-item:nth-child(' + (initNum+1) + ')' ).stop().animate({ opacity : 1 }, 1000)

        // 슬라이드 위치
        // 맨 처음 슬라이드이면, 맨 마지막으로 돌아온다.
        if( currentNo == 1 )
            currentNo = slideCount
        else
            currentNo--

        // 페이지 네비게이션 이전으로 이동
        $('.dot').removeClass('active')
        $('.dot:nth-child(' + currentNo + ')').addClass('active')

        currentIndex = currentNo - 1

    }) 
    

    // 다음 버튼 (→) 클릭 이벤트
    $('.next').on('click', () => {

        // 1. 맨 왼쪽 슬라이드가 맨 오른쪽 끝으로 이동한다.
        currentPosition += slideWidth
        list.css( { left : currentPosition } )
        $('.slide-item:first-child').appendTo(list)

        // 2. 슬라이드 전체가 왼쪽으로 이동한다.
        currentPosition -= slideWidth
        list.animate({ left : currentPosition }, 1000)

        // 3. 페이드 인/아웃
        $('.slide-item').stop().animate({ opacity: 0.2 }, 1000)
        $('.slide-item:nth-child(' + (initNum+1) + ')' ).stop().animate({ opacity : 1 }, 1000)

        // 슬라이드 위치
        // 맨 마지막 슬라이드이면, 맨 처음으로 돌아온다.
        if( currentNo == slideCount )
            currentNo = 1
        else
            currentNo++

        // 페이지 네비게이션 다음으로 이동
        $('.dot').removeClass('active')
        $('.dot:nth-child(' + currentNo + ')').addClass('active')

        currentIndex = currentNo - 1

    }) 


    // 페이지 네비게이션 클릭 이벤트
    $('.dot').on('click', function() {

        // 현재 선택한 네비게이션 인덱스
        let index = $(this).index()
        // 클릭한 위치와 현재 위치의 차이
        // 3 - 1 = 2
        // 1 - 3 = -2
        let gap = index - currentIndex
        // gap 절댓값
        let absGap = Math.abs(gap)

        // 현재 위치보다 작은 위치로 이동
        if( gap < 0 ) {
            
            currentPosition -= (slideWidth*absGap)
            list.css( { left : currentPosition } )

            for (let i = 0; i < absGap; i++) {
                $('.slide-item:last-child').prependTo(list)
            }

            currentPosition += (slideWidth*absGap)
            list.animate({ left : currentPosition }, 1000)
            
        }

        // 현재 위치보다 큰 위치로 이동
        if( gap > 0 ) {
            
            currentPosition += (slideWidth*absGap)
            list.css( { left : currentPosition } )

            for (let i = 0; i < absGap; i++) {
                $('.slide-item:first-child').appendTo(list)
            }

            currentPosition -= (slideWidth*absGap)
            list.animate({ left : currentPosition }, 1000)
            
        }

        currentIndex = index
        currentNo = currentIndex + 1

        // 3. 페이드 인/아웃
        $('.slide-item').stop().animate({ opacity: 0.2 }, 1000)
        $('.slide-item:nth-child(' + (initNum+1) + ')' ).stop().animate({ opacity : 1 }, 1000)

        $('.dot').removeClass('active')
        $('.dot:nth-child(' + currentNo + ')').addClass('active')

    })


    // 자동 재생
    let timer = setInterval( () => {
        // trigger(이벤트타입) 
        // 이벤트 강제 발생 메서드 
        if( !pause) {
            $('.next').trigger('click')
        }

    }, 3000)

    // 슬라이드 위에 마우스 올렸을 때
    $('.slide-list, .btn-box, .dots-box').on('mouseover', function() {
        pause = true
    })

    // 슬라이드 위에서 마우스 벗어났을 때
    $('.slide-list, .btn-box, .dots-box').on('mouseout', function() {
        pause = false
    })


})