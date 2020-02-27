
function enterName() {
	event.preventDefault();
	$('#name').attr('disabled', 'disabled');
}
function sendMessage() {
	event.preventDefault();
	const author = $('#y-name').val();
	const message = $('#y-text').val();
	const name = $('#name').val();

	let type = null;
	
	author === name ? type = 'right' : type = 'left';
	
	setTimeout(() => {setText(type, author, message)}, 900);
	

	const sendData = {
		author,
		message
	}
	console.log (JSON.stringify(sendData))
}

function setText(type, author, message) {
		$('#messages').append(`<div style="border-bottom: 1px solid black" class="${type}">
				<h3>
					<b>Author: ${author}</b>
				</h3>
				<p>Message: ${message}</p>
				<p><small>${new Date()}</small></p>
				<button onClick="deleteMessege()">X</button>
			</div>`);
	}

function deleteMessege(){
	const button = event.target;
	$(button).closest('div').hide();
}