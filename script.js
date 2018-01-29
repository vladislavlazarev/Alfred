$(document).ready(function() {

	var heroSpeech = 'QQ';


	$('.js-showHide').click(function() {
		$('.hero').toggleClass('-invisible');
	});
	
	$('.js-hello').click(function() {
		$('.bubble').text(heroSpeech)
	});
	/*$('.js-hide').click(function() {
		$('.hero').addClass('-invisible');
	});
	$('.js-show').click(function() {
		$('.hero').removeClass('-invisible');
	});*/

});