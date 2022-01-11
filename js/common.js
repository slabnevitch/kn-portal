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

   // object map toggle
   var lastInit = 0;
   	$('.map-toggle').on('click', function() {
   		$('.object-map--big').slideToggle(function() {
   			if(lastInit) return;
   			lastInit++
   			ymaps.ready(init);
   		});
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
								centerPadding: '24px',
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

