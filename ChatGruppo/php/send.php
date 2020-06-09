<?php
	//stabilisce la connessione al database
	$conn = mysqli_connect('localhost', 'root', '');
	mysqli_select_db($conn,'chat_di_gruppo');
	if (!($conn)) {	//controlla che la connessione sia avvenuta e stampa un messaggio di errore in caso di connessione non riuscitas
		die("Errore di connessione con il DB ". mysqli_connect_error());
	}

	$mittenteMessaggio = $_POST["mittente"];
	$testoMessaggio = $_POST["testo"];

	$sql = 'INSERT INTO `messaggi`(`mittente`, `testo`) VALUES ("'.$mittenteMessaggio.'","'.$testoMessaggio.'");';
	$result = mysqli_query($conn, $sql);

	mysqli_close($conn);
?>