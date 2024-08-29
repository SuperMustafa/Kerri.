$(window).scroll(function(){
    let scrollNumber=$(window).scrollTop();

    if(scrollNumber>$('#About').offset().top-$('.navbar').outerHeight(true)){
       $('.navbar').css('backgroundColor','teal') 
    }
    else{
       $('.navbar').css('backgroundColor','transparent') 

    }
})


$(function(){
    $('.loader').fadeOut(1000,function(){
        $('.loading').slideUp(1000,function(){
            $('body').css('overflow','auto')
            // $('.loading').remove();
        })
    })
})

$('a[href^="#"]').click(function(event){
    let anchorHref=event.target.getAttribute('href')
    let sectionOffset=$(anchorHref).offset().top;
    $('body,html').animate({scrollTop:sectionOffset},1000)
})


$('.gear i').click(function(){
    $('.site-colors').animate({width:'toggle'})
})

$('.color-list span ').click(function(event){
let currentColor=$(event.target).css('backgroundColor')
$('h1,h2, a').css('color',currentColor)
})