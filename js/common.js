jQuery(function() {
	// ibg class
		if('objectFit' in document.documentElement.style === false){
		  Array.prototype.forEach.call(document.querySelectorAll('._fit'), function(el){

		    var image = el.querySelector('img');
		    el.style.backgroundImage = 'url("'+image.src+'")';
		    el.classList.add('ibg');
		    el.classList.remove('_fit');
 		 });
		}
	// End ibg class

	// mobile catalog filter handler
	if($('.mob-sort').length > 0){
		(function() {
			var $filter = $('#filter-bar'),
					$filterOpener = $('#mob-filters-open'),
					$filterCloser = $('#mob-filters-close'),
					$sortToggler = $('#mob-sort-open'),
					$html = $('html');

			init = function() {
				console.log('init!')
				events();
				mediaQuerry();
			}

			mediaQuerry = function() {
				var mediaQuery = window.matchMedia('(max-width: 740px)');//breakpoint for dl-menu activation

		    mediaQuery.addListener(mediaQueryChange);
		    mediaQueryChange(mediaQuery);
			}
	    mediaQueryChange = function(e) {
	      if (!e.matches) {
	      	filterClose();
	      }
	    }

			events = function() {
				$filterOpener.on('click', filterOpen);
				$filterCloser.on('click', filterClose);
				$sortToggler.on('click', sortToggle);
				$(document).on('click', docClick);
			}

			filterOpen = function() {
				$filter.addClass('active');
				$html.addClass('freeze');
			}

			filterClose = function() {
				$filter.removeClass('active');
				$html.removeClass('freeze');
			}

			docClick = function(e) {
				if(!e.target.closest('#mob-sort-open')){
					sortClose();
				}
			}

			sortToggle = function(e) {
				// e.stopPropagation();
				if(e.target.tagName !== 'SPAN'){
					$(e.target).closest('.mob-sort__button').toggleClass('active');
				}
			}

			sortClose = function() {
				$sortToggler.removeClass('active');
			}

			init();
		})();
	}
	// END mobile catalog filter handler
	
	function init(){     
       var myMap = new ymaps.Map("ymapsID_263", {
            center: [
           		 55.9705207,
           		 37.5108105
	            // document.getElementById('ymapsID_263').dataset.lon 
	            // document.getElementById('ymapsID_263').dataset.lat
            ],
            zoom: 17,
           	controls: ['zoomControl'], //оставляем только масштабирование
           	// behaviors: ['drag'] //оставляем только поведение drag
        });
   }

   // header-filter toggler
   	$('.header__filter-toggler').click(function() {
   		$('.header-filter').slideDown();
   		$(this).addClass('hidden');
   	})
   // END header-filter toggler
   
   // object map toggle
   var lastInit = 0;
   	$('.map-toggle').on('click', function() {
   		$(this).toggleClass('map-opened');
   		$('.object-map-box').slideToggle(function() {
   			if(lastInit) return;
   			lastInit++
   			ymaps.ready(init);
   		});
   	});

   	$('#big-map-close').click(function() {
   		$('.map-toggle').removeClass('map-opened');
   		$('.object-map-box').slideUp();
   	});
   // END object map toggle
				// console.log('ready')
		// Slick-slider
			if($('.praongallery__slider').length > 0){

				$('.praongallery__slider').on('init', function(slick){
				  // $('.slick-dots').addClass('praon29');
				  // console.log($('.slick-dots'));

				});
				var praongallery = $('.praongallery__slider').slick({
					slidesToScroll: 1,
					slidesToShow: 1,
					fade: true,
					dots: true,
					// accessibility: false,
			        draggable: false,
			        infinite: false,
			        swipe: false,
			        touchMove: false,
					customPaging : function(slider, i) {
			        	var thumb = $(slider.$slides[i]).attr('data-thumb');
				       	// console.log('sllides[i]' + slider.$slides[i]);
				      	// console.log(thumb);
			        	return '<a><img src="'+thumb+'"></a>';
			    	},
					responsive: [

						{
							breakpoint: 571,
							settings: {

								slidesToScroll: 1,
								slidesToShow: 1,
								centerMode: true,
								centerPadding: '20px',
								fade: false,
								dots: false,
								arrows: false,
								draggable: true,
						        infinite: true,
						        swipe: true,
						        touchMove: true,
							}	
						}
					]
				});

			}
			// END Slick-slider
	
	jQuery(document).on('ready', function() {
	});

});

