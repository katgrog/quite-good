
// header__content: jumping content animation and icon stroke colour change

$(document).on('scroll', function(){

	var pixelsFromTop = $(document).scrollTop();

	var headerContentScroll = 'header__content--scroll'
	var headerIconsScroll = 'header__icons--scroll'

	if (pixelsFromTop > 0) {
		$('.header__content').addClass(headerContentScroll)
		$('.header__social-icons').addClass(headerIconsScroll);
		$('.header__shop-icon').addClass(headerIconsScroll);
		$('.instagram__stroke, .twitter__stroke, .cart__stroke').css({"fill": "#ECC583"});
	} else {
		$('.header__content').removeClass(headerContentScroll);
		$('.header__social-icons').removeClass(headerIconsScroll);
		$('.header__shop-icon').removeClass(headerIconsScroll);
		$('.instagram__stroke, .twitter__stroke, .cart__stroke').css({"fill": "#A0AF96"});
	}

});



// main__navigation: scroll-to functioanlity


$('.main__navigation a').on('click', function(){

	var href= $(this).attr('href');

	var distanceFromTop = $(href).offset().top;

	$('html, body').animate({
		scrollTop: distanceFromTop

	}, 800);

	return false

});


// mailing__join-text: colour change once clicked on

$('.mailing__join-text').on('click', function(){

	$('.mailing__join-text').toggleClass('mailing__join-text--clicked');

});




// mailing__form: once join message clicked, reveal mailing form

$('.mailing__join-message').on('click', function(){

	$('.mailing__form').fadeToggle(500);

});



// mailing__form: once hit submit, recieve email confirmation message


$('.mailing__form--submit').on('click', function(){

	var email= $('input[type="email"]').val();

	var message = '<div class="mailing__success-message">Thanks for signing up! We\'ll send an email to ' + email + '.</div>';

	$('form').replaceWith(message);

	return false;

});



// about__content: dynamically change about content to reveal info for whatever link is clicked

// set aboutOptions to true here, change this to false in next function to stop this function from running
var aboutOptions = true

$('.about__link').on('click', function(){

		var aboutData = $(this).data();

		if (aboutOptions === true) {

			$('.about__heading--dynamic').hide();
			$('.about__text').hide();

			$('.about__heading--dynamic').text(aboutData.name).fadeIn(400);
			$('.about__text').text(aboutData.text).fadeIn(400);
	}

});


// about__content: initially hide about back button, then, once any of the other links are clicked, reveal it

// hide back button
$('.about__link--back').hide();

// reveal back button
$('.about__link').on('click', function(){

	$('.about__link--back').fadeIn(100);

});



// about__content: once back button is clicked, return the original about info and get rid of back button

$('.about__link--back').on('click', function(){

	aboutData = $(this).data();

	aboutOptions = false;

	$('.about__heading--dynamic').text(aboutData.name).fadeOut(400);
	$('.about__text').text(aboutData.text).fadeOut(400);

	aboutOptions = true;


	return false;

});




// contact__email: add swing animation and stroke change to email icon whilst hovering on email address

$('.contact__email--link').on('mouseover', function(){

	$('.contact__email--image').attr('class', 'contact__email--image contact__email--image-hover');
	$('.contact__email--fill').attr('class', 'contact__email--fill contact__email--fill-hover');

});

$('.contact__email--link').on('mouseout', function(){

	$('.contact__email--image-hover').attr('class', 'contact__email--image');
	$('.contact__email--fill-hover').attr('class', 'contact__email--fill');

});




// accessories__navigation: change colour of selected link

$('.accessories__navigation a').on('click', function(){

	$('.accessories__navigation a').removeClass('selected');

	$(this).toggleClass('selected');

	return false

});
