jQuery(document).ready(function($) {  
     
    function burgerMenu(selector) { 
    let menu = $(selector);
    let button = menu.find('.burger-menu__button');
    let links = menu.find('.burger-menu__link');
    let overlay = menu.find('.burger-menu__overlay');
    
    button.on('click', (e) => {
      e.preventDefault();
      toggleMenu();
    });
    
    links.on('click',() => toggleMenu());
    overlay.on('click',() => toggleMenu());
    
    
     
    function toggleMenu(){
      menu.toggleClass('burger-menu_active');
      
    
      $(function(){
        if ( $(window).width() < 769 ) {
    
      
      if (menu.hasClass('burger-menu_active')) {
        $('body').css('overflow', 'hidden');
      } else {
        $('body').css('overflow', 'visible');
      }
    
    
    }
    });
        
    }
    
    }
       
    burgerMenu ('.burger-menu');

    function filterButtonClick(buttonClass) {
      $('.calendar-color-key').each(function() {
          $(this).addClass('disabled');
  
          if($(this).hasClass(buttonClass)) {
              $(this).removeClass('disabled');
          }
      });
  }
  
  $('.calendar-color-key').on('click', function() {
      var filterButtonClasses = this.classList;
      filterButtonClick(filterButtonClasses[0]);
  });
  


    });

   
    
  jQuery(document).ready(function($) {

		$(document).ready(function() {

			$('.rus').on('click', function() {
			   var r = $('.localization').each(function() {
				  var el = $(this);
				  var key = (el.attr('caption'));
				  el.text(rus[key]);
			   });
			});
		 
		 
			$('.eng').on('click', function() {
			   var r = $('.localization').each(function() {
				  var el = $(this);
				  var key = (el.attr('caption'));
				  el.text(eng[key]);
			   });
			});
		 
		 
		 
			var rus = {
        test: 'тест',
        name: 'имя',
        winter: 'Зима',
        spring: 'Весна',
        summer: 'Лето',
        autumn: 'Осень',
        skills: 'Навыки',
        portfolio: 'Портфолио',
        video: 'Видео',
        price: 'Цены',
        contacts: 'Контакты',
        hero_title: 'Алекса Райс',
        hero_text: 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
        hire: 'Пригласить',
        skill_title_1: 'Фотография',
        skill_text_1: 'Высококачественные фото в студии и на природе',
        skill_title_2: 'Видеосъемка',
        skill_text_: 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
        skill_title_3: 'Ретушь',
        skill_text_3: 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
        skill_title_4: 'Звук',
        skill_text_4: 'Профессиональная запись звука для видео, рекламы, портфолио',
        price_description_1_span_1: 'Одна локация',
        price_description_1_span_2: '120 цветных фото',
        price_description_1_span_3: '12 отретушированных фото',
        price_description_1_span_4: 'Готовность через 2-3 недели',
        price_description_1_span_5: 'Макияж, визаж',
        price_description_2_span_1: 'Одна-две локации',
        price_description_2_span_2: '200 цветных фото',
        price_description_2_span_3: '20 отретушированных фото',
        price_description_2_span_4: 'Готовность через 1-2 недели',
        price_description_2_span_5: 'Макияж, визаж',
        price_description_3_span_1: 'Три локации и больше',
        price_description_3_span_2: '300 цветных фото',
        price_description_3_span_3: '50 отретушированных фото',
        price_description_3_span_4: 'Готовность через 1 неделю',
        price_description_3_span_5: 'Макияж, визаж, прическа',
        order: 'Заказать съемку',
        contact_me: 'Свяжитесь со мной',
        send_message: 'Отправить'
			};

			var eng = {
        test: 'test',
        name: 'name',
        winter: 'Winter',
        spring: 'Spring', 
        summer: 'Summer',
        autumn: 'Autumn',
        skills: 'Skills',
        portfolio: 'Portfolio',
        video: 'Video',
        price: 'Price',
        contacts: 'Contacts',
        hero_title: 'Alexa Rise',
        hero_text: 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
        hire: 'Hire me',
        skill_title_1: 'Digital photography',
        skill_text_1: 'High-quality photos in the studio and on the nature',
        skill_title_2: 'Video shooting',
        skill_text_2: 'Capture your moments so that they always stay with you',
        skill_title_3: 'Retouch',
        skill_text_3: 'I strive to make photography surpass reality',
        skill_title_4: 'Audio',
        skill_text_4: 'Professional sounds recording for video, advertising, portfolio',
        price_description_1_span_1: 'One location',
        price_description_1_span_2: '120 photos in color',
        price_description_1_span_3: '12 photos in retouch',
        price_description_1_span_4: 'Readiness 2-3 weeks',
        price_description_1_span_5: 'Make up, visage',
        price_description_2_span_1: 'One or two locations',
        price_description_2_span_2: '200 photos in color',
        price_description_2_span_3: '20 photos in retouch',
        price_description_2_span_4: 'Readiness 1-2 weeks',
        price_description_2_span_5: 'Make up, visage',
        price_description_3_span_1: 'Three locations or more',
        price_description_3_span_2: '300 photos in color',
        price_description_3_span_3: '50 photos in retouch',
        price_description_3_span_4: 'Readiness 1 week',
        price_description_3_span_5: 'Make up, visage, hairstyle',
        order: 'Order shooting',
        contact_me: 'Contact me',
        send_message: 'Send message'
			};
		 
		 
		 
		 
		 
		 });
		 

	} 
)
