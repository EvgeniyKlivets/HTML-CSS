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
    dots:false,
})

$('.testimonials_prev').on('click', function (e){
    e.preventDefault()
    $('.testimonials_slide').slick('slickPrev')
    
})
$('.testimonials_next').on('click', function (e){
    e.preventDefault()
    $('.testimonials_slide').slick('slickNext')
})
})