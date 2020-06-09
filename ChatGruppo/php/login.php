<?php
	//stabilisce la connessione al database
	$conn = mysqli_connect('localhost', 'root', '');
	mysqli_select_db($conn,'chatlocale');
	if (!($conn)) {	//controlla che la connessione sia avvenuta e stampa un messaggio di errore in caso di connessione non riuscitas
		die("Errore di connessione con il DB ". mysqli_connect_error());
	}

	if (isset($_POST["username"]) && isset($_POST["password"])) {
		$sql = "SELECT * FROM utenti WHERE username = '". $_POST["username"] ."' AND password = '". $_POST["password"] ."';";
		$result = mysqli_query($conn, $sql);
		if (mysqli_num_rows($result) == 1) {
			session_start();
			$_SESSION["username"] = $_POST["username"];
			echo 'verificato';
		}
		else echo 'non_verificato';
	}
?>