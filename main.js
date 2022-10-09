$('.select-area-wrapper .select').click(function(){
    $('.select-popup').addClass('open')
})

$('.select-popup .close, .select-popup .check-option').click(function(){
    $('.select-popup').removeClass('open')
})

$('.select-area-wrapper .go').click(function(){
    $('.second').addClass('active')
})

$('.back').click(function(){
    $(this).closest('.container').parent().removeClass('active');
    $('.swipe').removeClass('active')
})

$('.swipe').click(function(){
    $(this).addClass('active')
    setTimeout(function(){
        $('.third').addClass('active')
    }, 300)
})

$('.submit').click(function(){
    $('.fourth').addClass('active')
})

$('.proceed').click(function(){
    $('.fifth').addClass('active')
})
