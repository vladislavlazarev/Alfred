$(document).ready(function() {


	let superhero = {
		name: 'killer',
		age: 44,
		job:'Clerc',

		params: {
			height: 200,
			weight: 13,
			gender: 'Male',
			race: 'Asian'
		},

		powers: {
			mainPower: 'fireball',
			sencondaryPower: 'run'
		}
	};


 $('.js-object').click(function() {
 	showBubbleWithBlock('<div class="bubble-test">Что бы это не значило, но суперсила героя - ' +
 	 superhero.powers.mainPower + '!</div>');
 });




 	let movies = ['apple', 'orange', 'banana', 'door'];

 	$('.js-array').click(function() {
 		movies.push(getSecondWord());
 		showBubble(movies);
 	})


 	for (let i = 0; i < movies.length; i++) {
 		$('.test-array').append('<div class="test-item">' + movies[i] + '</div>')
 	};








	$('.js-plus').click(function() {
			if (checkInputData().isNumber) {
		showBubble(Number(getFirstWord()) + Number(getSecondWord()));	
		} else {
			if (checkInputData().isEmpty) {
				showBubble('Пустоши');

			} else showBubble(getFirstWord() + ' ' + getSecondWord());
		}
		
	});
	$('.js-minus').click(function() {
			showBubble(Number(getFirstWord()) - Number(getSecondWord()));
	});
	$('.js-multiply').click(function() {
		showBubble(Number(getFirstWord()) * Number(getSecondWord()));
	});
	$('.js-divide').click(function() {
		if (checkInputData().isNumber) {
			if (getSecondWord() === '0') {
			showBubble('Так вымерли динозавры');
			} else {
				showBubble(Number(getFirstWord()) / Number(getSecondWord()));
			}
		} else {
			showStringData();
		}
		
	});

	// ==========================================
	// ==========================================

	function showStringData() {
		if (checkInputData().isNumber) {
		showBubble(Number(getFirstWord()) / Number(getSecondWord()));	
		} else {
			if (checkInputData().isEmpty) {
				showBubble('Пустоши');
			} else { 
				showBubble(getFirstWord() + ' ' + getSecondWord());
			}
		}
		
	};
	

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

	function showBubbleWithBlock(block) {
		$('.bubble').append(block);
		$('.bubble').addClass('-visible');

		setTimeout(function() {				
			$('.bubble').removeClass('-visible');
		}, 2000);
	}
});