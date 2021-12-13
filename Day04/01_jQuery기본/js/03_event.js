
$(function() {

    // 클릭 이벤트
    $('#item1').on('click', function() {
        $('#item1').css('color', 'hotpink')
    })

    $('#item2').on('click', function() {
        // this : 현재 선택한 요소
        $(this).css('color', 'hotpink')
    })

    $('#item3').on('mouseover', function() {
        $('#item3').css('color', 'hotpink')
        $('#item3').css('background-color', 'royalblue')
    })

    $('#item3').on('mouseout', function() {
        $('#item3').css('color', 'white')
        $('#item3').css('background-color', '#3498db')
    })

    // 메서드 체인
    $('#item4')
        .on('mouseover', function() {
            $('#item4').css('color', 'hotpink')
            $('#item4').css('background-color', 'royalblue')
        })
        .on('mouseout', function() {
            $('#item4').css('color', 'white')
            $('#item4').css('background-color', '#3498db')
        })

    $('#item5')
        .on('mouseover', function() {
            $(this).css('color', 'hotpink')
            $(this).css('background-color', 'royalblue')
        })
        .on('mouseout', function() {
            $(this).css('color', 'white')
            $(this).css('background-color', '#3498db')
        })
        .on('click', function() {
            $(this).css('color', 'purple')
            $(this).css('background-color', 'cornflowerblue')
        })
        .on('dblclick', function() {
            $(this).css('color', 'red')
            $(this).css('background-color', 'black')
        })

})