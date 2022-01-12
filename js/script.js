$(document).ready(function(){
	$('.m-menu-btn').on('click', function () {
			$('body').addClass('active-popup');
	});

	$('.close-icon-popup').on('click', function () {
			$('body').removeClass('active-popup');
	});

	$('.link-tag-show-hide').on('click', function () {
	if ($(this).text() == 'Смотреть все варианты') {
		$(this).text('Cвернуть');
	}
	else {
		$(this).text('Смотреть все варианты');
	}
		$(this).siblings('.wrap-list-tag__group').toggleClass('active');
	});
	

	$('.link-tag-show-hide-num2').on('click', function () {
	if ($(this).text() == 'Смотреть все') {
		$(this).text('Cвернуть');
	}
	else {
		$(this).text('Смотреть все');
	}
		$(this).siblings('.box-links-main-bottom__group-links').toggleClass('active');
	});
				
					
	
	$('.close-filter-btn').on('click', function() {
		$('.left-box-map').slideUp(300);
		$('.right-box-map').show();
		$('.header').show();
		$('.box-control-map').show();
	});
	
	$('.filter-btn--on-map').on('click', function() {
		$('.left-box-map').slideDown(300);
		$('.big-map').slideUp(300);
	});
	
	$('.btn-filter-show').on('click', function() {
		$('.left-box-map').slideDown(300);
		$('.right-box-map').hide();
		$('.header').hide();
		$('.box-control-map').hide();
	});

	$('.btn-map-show').on('click', function() {
		$('.big-map').slideDown(300);
		$('.right-box-map').hide();
		$('.header').hide();
		$('.box-control-map').hide();
	});
	
	$('.filter-btn--close-map').on('click', function() {
		$('.big-map').hide(300);
		$('.right-box-map').show();
		$('.header').show();
		$('.box-control-map').show();
	});
	
	$('.vis-map').on('click', function() {
		$('.big-map').slideDown(300);
		$('.right-box-map').hide();
		$('.header').hide();
		$('.box-control-map').hide();		
	});
	
	
  $('.m-menu').on('click', function() {
       $('.header-line__menu').slideToggle(300);
  });  
	
	$('.view-map').on('click', function() {
      $(this).next('.object-map').slideToggle(200);
			$(this).toggleClass('active');
  });
	
	 $('.num-short').on('click', function() {
			$(this).find('strong').hide();
			$(this).find('.num-all').css('display', 'inline-block');
	 });	 
	 $('.phone').mask('(999) 999-99-99');
});

function tabs(){
	var
	$links = $('.tabs-links li'),
	$blocks = $('.tabs-content-item'),
	$this,
	index;

	$links.on('click', function(){
	if ($(this).hasClass('active')) {
	return false;
	}

	$this = $(this);
	$links.removeClass('active');
	$blocks.removeClass('active');
	$this.addClass('active');
	index = $links.index($this);

	$($blocks[index]).addClass('active');
	});
}

$(document).ready(function() {
$('.praongallery').each(function(a) { $(this).find('.praon28 img').attr({'src': $(this).find('.praon30:eq(0) img').attr('src'), "datahomesliders": '0'});});
$('.praongallery .praon39next').click(function() { var nowimg = parseInt($(this).closest('.praongallery').find('.praon28 img').attr('datahomesliders')) + 1; if(!$(this).closest('.praongallery').find('.praon30:eq(' + nowimg + ')').length > 0) {nowimg = 0; }
$(this).closest('.praongallery').find('.praon28 img').attr({'src': $(this).closest('.praongallery').find('.praon30:eq(' + nowimg + ')').find('img').attr('src'), "datahomesliders": nowimg}); });
$('.praongallery .praon38prev').click(function() { var nowimg = parseInt($(this).closest('.praongallery').find('.praon28 img').attr('datahomesliders')) - 1; if(nowimg < 0) {nowimg = parseInt($(this).closest('.praongallery').find('.praon30').length) - 1; } $(this).closest('.praongallery').find('.praon28 img').attr({'src': $(this).closest('.praongallery').find('.praon30:eq(' + nowimg + ')').find('img').attr('src'), "datahomesliders": nowimg}); });
$('.praongallery .praon30').click(function() { $(this).closest('.praongallery').find('.praon28 img').attr({'src': $(this).find('img').attr('src'), "datahomesliders": $(this).index()});});
});
