<!DOCTYPE html>
<html>
<head>
	<title>Chat di gruppo</title>
	<link rel="shortcut icon" href="http://localhost/ChatGruppo/img/favicon.ico">
	<link rel="stylesheet" type="text/css" href="http://localhost/ChatGruppo/style/style.css">
	<meta charset="utf-8">

	<script type="text/javascript">
		var nomeMittente = '<?php session_start(); echo $_SESSION["username"];?>';
	</script>

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

	<script type="text/javascript" src="http://localhost/ChatGruppo/scripts/scripts_chat.js"></script>
</head>
<body>
	<div id='contenitore-messaggi'>
		<div id="messaggi"></div>
		<div id="contenitore-invio">
			<div id="invio-messaggi">
			  	<textarea id="myMsg" placeholder="Digita un messaggio" name="msg"></textarea><br>
			  	<button type="button" class="btn" id="emoji">Emoji</button>
				<button type="button" class="btn" id="invia">Invia</button>
				<button type="button" class="btn" id="esci">Logout</button>
			</div>
		</div>
	</div>

	<div id="contenitore-emoji">
		<input type="image" src="http://localhost/ChatGruppo/img/sorriso.png" class="tasto-emoji" id="sorriso"><input type="image" src="http://localhost/ChatGruppo/img/triste.png" id="triste" class="tasto-emoji"><input type="image" src="http://localhost/ChatGruppo/img/rabbia.png" id="rabbia" class="tasto-emoji"><input type="image" src="http://localhost/ChatGruppo/img/assonnato.png" id="assonnato" class="tasto-emoji">
		<br>
		<input type="image" src="http://localhost/ChatGruppo/img/pianto.png" id="pianto" class="tasto-emoji"><input type="image" src="http://localhost/ChatGruppo/img/nausea.png" id="nausea" class="tasto-emoji"><input type="image" src="http://localhost/ChatGruppo/img/pensieroso.png" id="pensieroso" class="tasto-emoji"><input type="image" src="http://localhost/ChatGruppo/img/paura.png" id="paura" class="tasto-emoji">
	</div>
</body>
</html>