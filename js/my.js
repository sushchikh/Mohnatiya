$(document).ready(function(){



/*счетчик, как далека мы пролистали нашу страницу, записывает в перемунную wScroll попиксельно нашу промотку*/

// $(window).scroll(function(){
//
// 	var wScroll = $(this).scrollTop();
// 	console.log(wScroll);
//
// });

//
//
// $(window).scroll(function(){
//
// 	var wScroll = $(this).scrollTop();
//
//     if (wScroll > )
//
//
//
// });
//
//




// $(window).scroll(function(){

// 	var wScroll = $(this).scrollTop();

// 	if (wScroll > $('.arow').offset().top){
// 		$('.hidden_menu').addClass('fixed');
// 	}
//     else {
//         	$('.hidden_menu').removeClass('fixed');
//     }

//     if (wScroll > $('.arow').offset().top){
// 		$('.back_to_top').addClass('fixed');
// 	}
//     else {
//         	$('.back_to_top').removeClass('fixed');
//     };

//     if (wScroll > $('.arow').offset().top - 200){
// 		$('.title_arow_container').addClass('hide');
// 	}
//     else {
//         	$('.title_arow_container').removeClass('hide');
//     };




//     if (wScroll > $('.how_container_title').offset().top){
//         $('.number').each(function(i) {

//             setTimeout(function(){
//                 $('.number').eq(i).addClass('show');           
//             }, 100 * (i+1));
//         });
//     }

// });



            $('.go_to').click( function(){ // ловим клик по ссылке с классом go_to
        	var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
                if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
        	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1000); // анимируем скроолинг к элементу scroll_el
                }
        	    return false; // выключаем стандартное действие
            });








});