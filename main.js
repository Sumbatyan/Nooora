document.querySelector('.select-area-wrapper .select').click(function(){
    document.querySelector('.select-popup').classList.add('open')
})

document.querySelector('.select-popup .close, .select-popup .check-option').click(function(){
    document.querySelector('.select-popup').classList.remove('open')
})

document.querySelector('.select-area-wrapper .go').click(function(){
    document.querySelector('.second').classList.add('active')
})

document.querySelector('.back').click(function(){
    document.querySelector(this).closest('.container').parent().classList.remove('active');
    document.querySelector('.swipe').classList.remove('active')
})

document.querySelector('.swipe').click(function(){
    document.querySelector(this).classList.add('active')
    setTimeout(function(){
        document.querySelector('.third').classList.add('active')
    }, 300)
})

document.querySelector('.submit').click(function(){
    document.querySelector('.fourth').classList.add('active')
})

document.querySelector('.proceed').click(function(){
    document.querySelector('.fifth').classList.add('active')
})
