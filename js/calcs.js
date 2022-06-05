$(document).ready(function(){
    $('.result-button').click(function(event){
        console.log(123);
        $('.results').addClass('active');
        let content = this.nextElementSibling;
        console.log(this.nextElementSibling);

            content.style.maxHeight = content.scrollHeight + 'px';
        
    });
});
$(document).ready(function(){
    $("body").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        
        //забираем идентификатор бока с атрибута href
       var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
       top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
       $('body,html').animate({scrollTop: top}, 500);
    });
   });


   