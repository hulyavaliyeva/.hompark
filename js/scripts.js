
	// HAMBURGER
		$('.hamburger').on('click', function(e) {
			$(this).toggleClass('open');
			$('body').toggleClass('overflow');
			$('.side-navigation').toggleClass('active');
		});