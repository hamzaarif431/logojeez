var blurred = false, statsFlag = false, lsInitialized = false, processbg=false;

var getid;function gotoscroll(getid){jQuery('html,body').animate({scrollTop:jQuery(getid).offset().top},'slow');}

jQuery(document).ready(function($) {
	
	$(window).scroll(function(){
		var topPlusWindowSize = $(window).scrollTop()+ $( window ).height();
		if($('.service-stats')[0]){
			var serviceStats = $('.service-stats').offset().top
			if ( (topPlusWindowSize >= serviceStats+100) && !statsFlag ){
				statsFlag = true;
				$('.service-stats .line.inner').each(function(index, element) {
					var percentVal = $(this).text();
					$(this).animate({width: percentVal }, {
						duration: 2000,
						easing: 'easeInOutExpo',
						step: function( now, fx ) {
							$(this).html( '<span>'+Math.round( now )+'%</span>' )
						},
						after:function( now, fx ) {
							$(this).html( now )
						}
					});		
				});
			}
		}

		if($('section.feats')[0]){
			var feats = $('section.feats').offset().top;
			if ( (topPlusWindowSize >= feats ) ){
				$('section.feats .img').addClass("fadeIn");
			}
		}
		if($('.bgbox')[0] && !window.processbg){
			var procBox = $('.bgbox').offset().top-400;
			if ( (topPlusWindowSize >= procBox ) ){
				$('.bgbox').animate({'width': 0}, 9000, 'linear');
				var timeout = 1520;
				$('.proc-box').each(function(index, element) {
					setTimeout(function(){ 
						$( '.colored', element ).animate({'opacity': 0}, 300)
					}, timeout*(index+1));
                });
				window.processbg = true
			}
		}
		
		if(!lsInitialized){
			if(typeof $.fn.layerSlider == "undefined") {
				lsShowNotice('layerslider_23','jquery'); 
			} else { 
				$("#layerslider_23").layerSlider({
					autoStart: true,
					responsive: false, 
					responsiveUnder: 1170, 
					layersContainer: 1170, 
					skin: '', 
					globalBGColor: 'transparent', 
					hoverPrevNext: false, 
					autoPlayVideos: false, 
					yourLogoStyle: 'left: 10px; top: 10px;', 
					cbInit: function(element) { }, 
					cbStart: function(data) { }, 
					cbStop: function(data) { }, 
					cbPause: function(data) { }, 
					cbAnimStart: function(data) { }, 
					cbAnimStop: function(data) { }, 
					cbPrev: function(data) { }, 
					cbNext: function(data) { }, 
					thumbnailNavigation: 'hover'
				}) 
			} 
			window.lsInitialized = true
		}
		
		
		if( $('.floating-form-wrap')[0] && $('.side-bars')[0] ){
			var headerHeight = $( '.header-wrap' ).height()-140; 
			if ( ( $(window).scrollTop() >= headerHeight  ) ){
				$('.floating-form-wrap, .side-bars').fadeIn( 300 );
			}
			else {
				$('.floating-form-wrap, .side-bars').fadeOut( 300 );
			}
		}

	});//window scroll end
	
	if( $('body').outerWidth()>= 768){
	
		$('header .navbar-nav > li').hover(function(){
			$('.mdd', this).stop(1,1).fadeOut(0).delay(300).slideDown(400, 'easeInOutExpo');
		}, function(){
			$('.mdd', this).stop(1,1).slideUp(400, 'easeInOutExpo');
		});
	}
	else {
		$('header .navbar-nav > li .expand').on( 'click', function( e ){
			var thisParent = $(this).closest('li');
			if( $(this).text()=='+' ){
				$('header .navbar-nav > li').not(thisParent).slideUp();
				thisParent.find('.mdd').slideDown();
			}
			else{
				$('header .navbar-nav > li').slideDown();
				$('.mdd').slideUp();
			}
			return false;
		})
	}
	
	if(typeof $.fn.layerSlider == "undefined") {
		lsShowNotice('layerslider_23','jquery'); 
	} else { 
		$("#layerslider_cart").layerSlider({
			height : '632px',
			autoStart: true,
			responsive: false, 
			responsiveUnder: 1170, 
			layersContainer: 1170, 
			skin: '', 
			globalBGColor: 'transparent', 
			hoverPrevNext: false, 
			autoPlayVideos: false, 
			yourLogoStyle: 'left: 10px; top: 10px;', 
			cbInit: function(element) { }, 
			cbStart: function(data) { }, 
			cbStop: function(data) { }, 
			cbPause: function(data) { }, 
			cbAnimStart: function(data) { }, 
			cbAnimStop: function(data) { }, 
			cbPrev: function(data) { }, 
			cbNext: function(data) { }, 
			thumbnailNavigation: 'hover'
		}) 
	} 
	
	$('.inner-slider, .outer-slider, .case-study .cycle-slideshow').on( 'cycle-update-view', function( event, opts ) {
		$(window).scrollTop( $(window).scrollTop() + 1 ).scrollTop( $(window).scrollTop() - 1 );
	});
	
	$( '.outer-slider' ).on( 'cycle-before', function( event, opts ) {
			//$('.inner-slider').cycle('reinit');
	});
	
	$('section.services .nav-tabs > li').click(function(){
		setTimeout(function(){$(window).scrollTop( $(window).scrollTop() + 1 ).scrollTop( $(window).scrollTop() - 1 );},400);
		
	})
	
	$('.pkg-anchor').click(function(){
		$('.pkg-anchor').removeClass('active');
		$(this).addClass('active');
		setTimeout(function(){$(window).scrollTop( $(window).scrollTop() + 1 ).scrollTop( $(window).scrollTop() - 1 );},400);
	})
	
	$('.portfolio-sec .thumbnail').hover(function(){
			var elem = $(this)
			$('.title', elem).stop(1,1).animate({'left': '0px'}, 300, 'easeInOutSine', function(){
				$('.description', elem).stop(1,1).animate({'left': '0px'}, 300, 'easeInOutSine')
			})
			
		}, function(){
			$('.title, .description', this).stop(1,1).animate({'left': '-400px'});
	})

   $(".packagebtn-bg").click(function() {
		var aTag = $('#flform2');
		$(this).toggleClass("up-arrow", 1000);
		//$(window).scrollTop($('.offer-form').offset().top, 2000);
		 $('html,body').animate({scrollTop: aTag.offset().top},'slow');
	});
	

	
	$('.s-bar').hover(function(){
		$(this).stop(true,true).animate({right:'184px'}, 500, 'easeOutExpo');
		$('.side-bars').css('z-index','1004');
		}, function(){
			$(this).animate({right:'0px'}, 500, 'easeOutBounce');
			$('.side-bars').css('z-index','999');
	});
	
	$('.masthead-slider .slide1 button, .hire-btn, .portfoliopage .masthead .contact, .cta-red-pf button.hire, .custom-quote').click( function(){
		$('.popup-form').show(300).css({'overflow':'visible'});
		$('.cus-overlay').fadeIn(300);
	})
	
	$('.req-callback').click( function(){
		$('.callback-form').show(300).css({'overflow':'visible'});
		$('.cus-overlay').fadeIn(300);
	})
	
	$('.cus-overlay').click( function(){
		$('.popup-form, .callback-form').css({'overflow':'hidden'})
		$('.popup-form, .callback-form').hide(300);
		$(this).fadeOut(300);
		$('.floating-form-wrap').animate({'margin-right': '-584px'})
	})
	
	$('a.close').click( function(){
		$('.cus-overlay').trigger('click');
	})
	
	$('.tooltipped').tooltip();
	
	$('#cyear').text(new Date().getFullYear());
		
    function sendReq() {
	    $.ajax({
		    url: 'http://j.maxmind.com/app/geoip.js',
		    type: 'GET',
		    success: function(data) {
			    var ctrycode1=geoip_country_code(),tgtctry=$('.jform select.countrylist option[data-abbr="'+ctrycode1+'"]');tgtctry.attr('selected','selected');$('.jform input[name="code"]').val('+'+tgtctry.attr('value'));$('.jform input[name="ctry"]').val($('.jform select.countrylist option:selected').html());
			    $('.jform select.countrylist[name="ctry"]').each(
			    function(){
				    var cval=$(this).children('option:selected').attr('value');
				    $('form .pc span').attr('class','fg'+cval);
			    })
				    
		    },
		    error: function(e) {
			    console.log('Error:', e);
		    },
		    contentType: 'application/javascript; charset=ISO-8859-1',
		    dataType: 'script'
	    });
    }

    $('input').on('focus',function () {			
		if(window.blurred == false){
			window.blurred = true;
            sendReq();
		}
    });
	
	$('.cyclebanner .header-signup .btoggle-btn').click(function(){
		$('.header-signup .banner-form').slideToggle()
	})
	
	$('.floating-form-wrap .form-handle, #slideform').click( function(){
		if($('.floating-form-wrap').css('margin-right')=='-584px'){
			$('.floating-form-wrap').animate({'margin-right': '0px'})
			$('.cus-overlay').fadeIn(300);
		}
		else{
			$('.floating-form-wrap').animate({'margin-right': '-584px'})
			$('.cus-overlay').fadeOut(300);
		}
	})
	
	$('.header-btn.view-deals').click( function(){
		$("html,body").animate({scrollTop:$('section.packages').offset().top})
	})
	$('.portfoliopage .masthead .view-pf').click( function(){
		$("html,body").animate({scrollTop:$('.portfolio-sec').offset().top})
	})
	$('.thumbnails .pfitem').hover(function(){
		$('.caption', this).stop(1).slideDown();
	}, function(){
		$('.caption', this).stop(1).slideUp();	
	})
	
	if( jQuery().lazyload ){	
		$("img.lazy").lazyload({effect : "fadeIn", skip_invisible : false});
	}
	$(window).scroll(function(){
		$('body').addClass('scrolled');
	})
	
	$(window).load(function(){
	// Banform Select Flag
		$('.jform select.countrylist[name="pc"]').each(function(){
			var ctcd = $(this).val();
			$(this).prev('span').addClass('fg'+ctcd);
		});
	});
// Banform Select Flag
	$('.jform select.countrylist[name="pc"]').bind('change',function(){
		var cval=$(this).children('option:selected').attr('value');
		$(this).parent().children('span').attr('class','fg'+cval);
	});
	
	
	$(".typed").typed({
		strings: ["Global Leaders in Design and Development with Over a Decade of Excellence"],
		typeSpeed: 30,
		backspace: function(curString, curStrPos){
			setTimeout(function() {
				if (self.arrayPos == 1){
					self.stopNum = 3;
				}
				else{
					self.stopNum = 0;
				}
			}
		)}
	});
	
	$('.custom-pkg').click( function(){
		gotoscroll('.cartiframe')
	})
	$('.case-study .fancy-btn').fancybox({
			maxWidth:'560px',
			scrolling: 'none',
			padding: 0,	
			openEffect : 'elastic',
			closeEffect : 'elastic',
			openSpeed: 500,
			closeSpeed :500,
	});
	
	$('.portfolio-sec a.thumbnail').fancybox({
		prevEffect		: 'none',
		nextEffect		: 'none',
		closeBtn		: false,
		helpers		: {
			title	: { type : 'inside' },
			buttons	: {}
		}
	});
	
	$(".subpgpf").fancybox({
		openEffect : 'elastic',
		closeEffect : 'elastic',
		openSpeed: 500,
		closeSpeed :500,
		prevEffect		: 'fade',
		nextEffect		: 'fade',
	});
	
	$('.expand').click( function(){
		if( $(this).text() == '+' ){
			$('ul.subnav').slideUp({ duration: 400, easing: "easeInOutExpo" });
			$('.expand').text('+')
			$(this).closest('li').find('ul.subnav').slideDown({ duration: 400, easing: "easeInOutExpo" });
			$(this).text('â€“')
		}
		else {
			$(this).closest('li').find('ul.subnav').slideUp({ duration: 400, easing: "easeInOutExpo" });
			$(this).text('+')
		}
	}) 
	
});


WebFontConfig = {
	google: { families: [ 'Roboto:400,100,300,500,700,900:latin', 'Roboto+Condensed:700' ] }
	};
	(function() {
	var wf = document.createElement('script');
	wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
	  '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
	wf.type = 'text/javascript';
	wf.async = 'true';
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(wf, s);
})();




function setButtonURL(){
Tawk_API.toggle();

}