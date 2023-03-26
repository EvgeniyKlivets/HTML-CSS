$ (function(){
    var mixer = mixitup ('.directions_list');
/* Повині переключатися кнопка на яку кликають*/

$ ('.directions_filter-btn').on('click', function (e){
    $(this).addClass('.directions_filter-btn--active')
})
})