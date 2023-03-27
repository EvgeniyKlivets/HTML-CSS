$ (function(){
    var mixer = mixitup ('.directions_list');
/* Повині переключатися кнопка на яку кликають*/

$ ('.directions_filter-btn').on('click', function (){
    $('.directions_filter-btn').removeClass('.directions_filter-btn--active')
    $(this).addClass('.directions_filter-btn--active')
})
})