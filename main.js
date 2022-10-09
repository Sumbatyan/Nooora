jQuery(document).ready(function(){
    console.log('ready');
})

jQuery('.select-area-wrapper .select').click(function(){
    console.log(1);
    jQuery('.select-popup').addClass('open')
})
