/*var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);*/

$(document).ready(function() {
	$("#accedi").click(function() {
		var username = document.getElementById("username-login").value;
		var password = document.getElementById("password-login").value;

		$.ajax({
			url: "http://localhost/ChatGruppo/php/login.php",
			type: 'POST',
			crossDomain: true,
			data: {"username": username, "password": password},

			success: function(data, stato) {
				console.log("FUNZIONE VERIFICATA")
				if (data == "verificato") {
					window.location.href = "http://localhost/ChatGruppo/chat.php";
				}
				else {
					document.getElementById("username-login").setAttribute("class", "login-errato");
					document.getElementById("username-login").value = "";
					document.getElementById("username-login").setAttribute("placeholder", "Username o password errati!");
					document.getElementById("password-login").setAttribute("class", "login-errato");
					document.getElementById("password-login").value = "";
					document.getElementById("password-login").setAttribute("placeholder", "Username o password errati!");
				}
			},
			error: function(data, stato) {
				console.log(stato);
				console.log("SONO DENTRO FUNZIONE ERROR");
			}
		});
	});

	$("#registrati").click(function() {
		var username = document.getElementById("username-regist").value;
		var password = document.getElementById("password-regist").value;

		console.log(username);

		$.ajax({
			url: "http://localhost/ChatGruppo/php/regist.php",
			type: 'POST',
			crossDomain: true,
			data: {"username": username, "password": password},

			success: function(data, stato) {
				console.log("FUNZIONE SUCCESSO")
				if (data == "verificato") {
					window.location.href = "http://localhost/ChatGruppo/chat.php";
				}
				else {
					console.log(data);
					document.getElementById("username-regist").setAttribute("class", "login-errato");
					document.getElementById("username-regist").value = "";
					document.getElementById("username-regist").setAttribute("placeholder", "Username non disponibile!");
				}
			},
			error: function(data, stato) {
				console.log(data);
				console.log("SONO DENTRO FUNZIONE ERROR");
			}
		});
	});
});