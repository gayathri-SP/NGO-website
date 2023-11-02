$(jQuery).ready(function(){
    $('.menu-icon').click(function(){
        $('.menu').removeClass('active');

    });
    $('.close').click(function(){
        $('.menu').addClass('active');
    });
})