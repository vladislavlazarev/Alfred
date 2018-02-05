$(document).ready(function() {


	$('.js-plus').click(function() {
			showBubble(Number(getFirstWord()) + Number(getSecondWord()));
	});
	$('.js-minus').click(function() {
			showBubble(Number(getFirstWord()) - Number(getSecondWord()));
	});
	$('.js-multiply').click(function() {
		showBubble(Number(getFirstWord()) * Number(getSecondWord()));
	});
	$('.js-divide').click(function() {
		if (checkInputData().isNumber) {
		showBubble(Number(getFirstWord()) / Number(getSecondWord()));	
		} else {
			if (checkInputData().isEmpty) {
				showBubble('Пустоши');

			} else showBubble(getFirstWord() + ' ' + getSecondWord());
		}
		
	});

	// ==========================================
	// ==========================================

	function checkInputData () {
		// проверить число ли это
		// не ничего 
		// не равно 0

		if ($.isNumeric(getFirstWord()) && $.isNumeric(getSecondWord())) {
			return {
				isNumber: true
			};
		} else if (getFirstWord() === '' && getSecondWord() === '') {
			return {
				isNumber: false,
				isEmpty: true
			};

		}else {
			return {
				isNumber: false,
				isEmpty: false
			}
		}
	};

	function getFirstWord () {
		return $('.js-text1').val();
	}
	function getSecondWord () {
		return $('.js-text2').val();
	}

	function showBubble(text) {
		$('.bubble').text(text);
		$('.bubble').addClass('-visible');

		setTimeout(function() {				
			$('.bubble').removeClass('-visible');
		}, 2000);
	}
});