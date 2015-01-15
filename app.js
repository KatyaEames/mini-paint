$(document).ready(function() {
	$('.box').on('click', function() {
		$('this').addClass('white');
	})
	$('box').on('click', function() {
		$(this).addClass('white');
	})
	$('.box').on('dblclick', function() {
		$('this').removeClass('white');
	})
})