"use strict";
let time = 10;
function initTimer() {
	$('#timer').html(time);
	console.log(time);
	--time;
	if (time < 0) {
		clearInterval(intervalID);
		alert('Не успел !');
	}
}
let intervalID = setInterval(initTimer, 1000);

$('body').on('mousemove', function() {
	time = 10;
})
