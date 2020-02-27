

let users = [];

function userAPI(url) {
	$('main').html(' ');
	fetch(url)
	  .then(response => response.json())
	  .then(users => renderUsers(users));
}
function renderUsers(users) {
	const usersHtml = users.map(user => {
		return `
			<div class="item">
				<h1>${user.name}</h1>
				<h3>${user.username}</h3>
				<p>${user.email}</p>
			</div>`
	});
	
	usersHtml.forEach(function(item, index, arr) {
		$('main').append(item);
	});

} 




