/*var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);*/

/*var nomeMittente = prompt("Come ti chiami?");
if (nomeMittente == "") {
	var data = new Date;
	data = data.getTime() / 1000;
	nomeMittente = "anonimo" + data.toString();
}*/

console.log(nomeMittente);

function htmlentities(str) {
    return String(str)
    	.replace(/&/g, '&amp;')
    	.replace(/"/g, '&quot;')
    	.replace(/'/g, '&#39;')
    	.replace(/</g, '&lt;')
    	.replace(/>/g, '&gt;');
    	/*.replace(/\n/g, '£qK@8t')
    	.replace(/\r/g, '£qK@8t');*/
}

function leggiMessaggi() {
	$.ajax({
		url: "http://localhost/ChatGruppo/php/leggi.php",
		crossDomain: true,
		dataType: 'JSON',

		success: function(data, stato) {
			//console.log("JSON PASSATO: " + data);
			var str = "";

			for (var i = 0; i < data.length; i++) {

				if (data[i].testo.includes(":sorriso:")) {
					data[i].testo = data[i].testo.replace(":sorriso:", "<img src='http://localhost/ChatGruppo/img/sorriso.png' class='emoji'>");
				}
				if (data[i].testo.includes(":triste:")) {
					data[i].testo = data[i].testo.replace(":triste:", "<img src='http://localhost/ChatGruppo/img/triste.png' class='emoji'>");
				}
				if (data[i].testo.includes(":paura:")) {
					data[i].testo = data[i].testo.replace(":paura:", "<img src='http://localhost/ChatGruppo/img/paura.png' class='emoji'>");
				}
				if (data[i].testo.includes(":pensieroso:")) {
					data[i].testo = data[i].testo.replace(":pensieroso:", "<img src='http://localhost/ChatGruppo/img/pensieroso.png' class='emoji'>");
				}
				if (data[i].testo.includes(":pianto:")) {
					data[i].testo = data[i].testo.replace(":pianto:", "<img src='http://localhost/ChatGruppo/img/pianto.png' class='emoji'>");
				}
				if (data[i].testo.includes(":nausea:")) {
					data[i].testo = data[i].testo.replace(":nausea:", "<img src='http://localhost/ChatGruppo/img/nausea.png' class='emoji'>");
				}
				if (data[i].testo.includes(":assonnato:")) {
					data[i].testo = data[i].testo.replace(":assonnato:", "<img src='http://localhost/ChatGruppo/img/assonnato.png' class='emoji'>");
				}
				if (data[i].testo.includes(":rabbia:")) {
					data[i].testo = data[i].testo.replace(":rabbia:", "<img src='http://localhost/ChatGruppo/img/rabbia.png' class='emoji'>");
				}

				if (data[i].mittente == nomeMittente) {
					str = str + "<div class='inviati'><span class='span-mittente'>" + data[i].mittente + ":</span><br><span class='span-testo'>" + data[i].testo + "</div><span class='clear'></span>";
				}
				else {
					if (data[i].testo.includes("@" + nomeMittente)) {
						str = str + "<div class='taggato'><span class='span-mittente'>" + data[i].mittente + ":</span><br><span class='span-testo'>" + data[i].testo + "</span></div><span class='clear'></span>";
					}
					else {
						str = str + "<div class='ricevuti'><span class='span-mittente'>" + data[i].mittente + ":</span><br><span class='span-testo'>" + data[i].testo + "</span></div><span class='clear'></span>";
					}
				}
			}

			$("#messaggi").html(str);
		},
		error: function(data, stato) {
			console.log(stato);
			console.log("SONO DENTRO FUNZIONE ERROR");
		}
	});
}

$(document).ready(function() {
	leggiMessaggi();
	setInterval(leggiMessaggi,500);

	$("#invia").click(function() {
		var testoMessaggio = document.getElementById('myMsg').value;

		if (testoMessaggio != "") {
			$.ajax({
			    type: 'POST',
			    url: "http://localhost/ChatGruppo/php/send.php",
			    data: {"mittente": nomeMittente, "testo": htmlentities(testoMessaggio)},
			    success: function(data){
			    	console.log("Dati inviati");
			    },

			    error: function(data) {
			    	console.log("Dati non inviati");
			    }
			});
		}
	});

	$("#emoji").click(function() {
		if (document.getElementById('contenitore-emoji').style.display == "block") {
			document.getElementById('contenitore-emoji').style.display = "none";
		}
		else document.getElementById('contenitore-emoji').style.display = "block";
	});

	$(".tasto-emoji").click(function(event) {
		document.getElementById("myMsg").value = document.getElementById("myMsg").value + " :" + event.target.id + ": ";
	});

	$("#esci").click(function() {
		nomeMittente = "";
		document.location = "http://localhost/ChatGruppo/php/logout.php";
	});
});