$ (function()
{
    var mixer = mixitup ('.directions_list');
/* Повині переключатися кнопка на яку кликають*/

$ ('.directions_filter-btn').on('click', function (){
    $('.directions_filter-btn').removeClass('.directions_filter-btn--active')
    $(this).addClass('.directions_filter-btn--active')
})

/* Повині появитися Previous and next*/
$('.team_slider').slick({
arrows:false, /*стрілки відключені*/
slidesToShow: 4, /*одночасно 4 слайда показує*/
inFinite:true,
draggable:true,/*прокрутка слайда не працює*/
/*appendArrows: $('.team_slider-arrows'),*//*звернення до стрілки*/
waitForAnimate:false,/*швидко перелистувати слайди*/
})
$('.team_slider-prev').on('click', function (e){
    e.preventDefault()
    $('.team_slider').slick('slickPrev')
    
})
$('.team_slider-next').on('click', function (e){
    e.preventDefault()
    $('.team_slider').slick('slickNext')
})

    $('.testimonials_slider').slick({
    arrows:false,
    draggable:true,
    dots:true,
    appendDots:$('.testimonials_dots'),
})


$('.testimonials_prev').on('click', function (e){
    e.preventDefault()
    $('.testimonials_slide').slick('slickPrev')
    
})
$('.testimonials_next').on('click', function (e){
    e.preventDefault()
    $('.testimonials_slide').slick('slickNext')
})

/*+/-*/
$('.program_acc-link').on('click', function(e){
    e.preventDefault()
   $(this).toggleClass('program_acc-link--active')/*перевертає +/-*/
   $(this).children('.program_acc-text').slideToggle()/*розкриває/закриває*/})
/*Accordion*/
//$('.program_acc-link').on('click', function(e){
    //e.preventDefault()
   //if($(this).hasClass('program_acc-link--active')){
   // $(this).removeClass('program_acc-link--active')/*перевертає +/-*/
    //$(this).children('.program_acc-text').slideUp()
 //  } else{
   // $('.program_acc-link').removeClass('program_acc-link--active')
   // $('.program_acc-text').slideUp()
   // $(this).addClass('program_acc-link--active')
   // $(this).children('.program_acc-text').slideDown()/*розкриває/закриває*/
    
   //}
//})

/*плавний перехід */
$(".header_content-btn, .header_nav-list a, .header_top-btn, .haeder_user-nav, .footer_top-link, .footer_go-top, .about_content-btn").on("click", function (e){
    //відміняємо стандартною обработку нажаття по силці
    e.preventDefault()
    //забираємо індентифікатор бока з атрибутом href
    var id = $(this).attr('href'),
    //дізнаємося висоту від початку сторінки до блока на якому ссилаємо якорь
    top = $(id).offset().top 
    //інмуємо перехід на дистанції за 1500с
    $('body,html').animate({scrollTop: top}, 1500)
})
//щоб працював Бургер
if (window.screenTop()>0) {
    $('.burger').addClass('.burger--folow')
}else{
    $('.burger').removeClass('.burger--folow')
}
$('.burger').on('click', function (e) {
    e.preventDefault()
    $('.header_top').toggleClass('header_top--open')
})
})