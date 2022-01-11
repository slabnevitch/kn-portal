$(document).ready(function () {
  // $(".close-filter-btn").on("click", function () {
  //   $(".left-box-map").slideUp(300);
  //   $(".right-box-map").show();
  //   $(".header").show();
  //   $(".box-control-map").show();
  // });

  // $(".filter-btn--on-map").on("click", function () {
  //   $(".left-box-map").slideDown(300);
  //   $(".big-map").slideUp(300);
  // });

  // $(".btn-filter-show").on("click", function () {
  //   $(".left-box-map").slideDown(300);
  //   $(".right-box-map").hide();
  //   $(".header").hide();
  //   $(".box-control-map").hide();
  // });

  // $(".btn-map-show").on("click", function () {
  //   $(".big-map").slideDown(300);
  //   $(".right-box-map").hide();
  //   $(".header").hide();
  //   $(".box-control-map").hide();
  // });

  // $(".filter-btn--close-map").on("click", function () {
  //   $(".big-map").hide(300);
  //   $(".right-box-map").show();
  //   $(".header").show();
  //   $(".box-control-map").show();
  // });

  // $(".vis-map").on("click", function () {
  //   $(".big-map").slideDown(300);
  //   $(".right-box-map").hide();
  //   $(".header").hide();
  //   $(".box-control-map").hide();
  // });

  $(".m-menu").on("click", function () {
    $(".header-line__menu").slideToggle(300);
  });

  // $(".view-map").on("click", function () {
  //   $(this).next(".object-map").slideToggle(200);
  //   $(this).toggleClass("active");
  // });

  // $(".num-short").on("click", function () {
  //   $(this).find("strong").hide();
  //   $(this).find(".num-all").css("display", "inline-block");
  // });
  //  $('.phone').mask('(999) 999-99-99');

});

function tabs() {
  var $links = $(".tabs-links li"),
    $blocks = $(".tabs-content-item"),
    $this,
    index;

  $links.on("click", function () {
    if ($(this).hasClass("active")) {
      return false;
    }

    $this = $(this);
    $links.removeClass("active");
    $blocks.removeClass("active");
    $this.addClass("active");
    index = $links.index($this);

    $($blocks[index]).addClass("active");
  });
}



function login(nextUrl){
	$('#loginForm').attr('data-next-url', nextUrl)
	$.fancybox.open({
		src  : '#hidden-content',
	});
}

$(document).ready(function () {
	const loginForm = $('#loginForm') 
	loginForm.on('submit', function (e){
		$.ajax({                                                                                                                           
			type: "POST",                                                                                                                    
			url: loginForm.attr('action'),
			data: loginForm.serialize(),                                                                                  
			success: function(response){ 
				console.log('response = ',response);
				if (response.result === 'ok'){
					let instance = $.fancybox.getInstance()
					if (instance) instance.close()
          let nextUrl = loginForm.attr('data-next-url')
          $('.name-account').text(response.user_name)
					if (nextUrl)
						window.location.href = nextUrl
					else {
						$('#loginBtn').hide()
						$('#logoutBtn').show()
						$('#accountBtn').show()						
					}					
				}
				else{					
					$('#loginErrorMsg').text(response.error) 
				}
			}                                                                                                                             
		});
		e.preventDefault()
		return false;
	})
})

function showContactForm(){
  $('#contactFormMsg').text('')
  $.fancybox.open({src: '#send-message'})
}

$(document).ready(function () {
	const contactForm = $('#contactForm') 
	contactForm.on('submit', function (e){
		$.ajax({                                                                                                                           
			type: "POST",                                                                                                                    
			url: contactForm.attr('action'),
			data: contactForm.serialize(),                                                                                  
			success: function(response){ 
				if (response.result === 'ok'){
          let instance = $.fancybox.getInstance()
					if (instance) instance.close()
          $.fancybox.open('<div class="message"><p><h2>РЎРѕРѕР±С‰РµРЅРёРµ СѓСЃРїРµС€РЅРѕ РѕС‚РїСЂР°РІР»РµРЅРѕ!</h2></p><p>РњС‹ СЃРІСЏР¶РµРјСЃСЏ СЃ Р’Р°РјРё РІ Р±Р»РёР¶Р°Р№С€РµРµ РІСЂРµРјСЏ.</p></div>')
				}
				else{					
					$('#contactFormMsg').text(response.error)
				}
			}                                                                                                                             
		});
		e.preventDefault()
		return false;
	})
})