<?php
	//stabilisce la connessione al database
	$conn = mysqli_connect('localhost', 'root', '');
	mysqli_select_db($conn,'chatlocale');
	if (!($conn)) {	//controlla che la connessione sia avvenuta e stampa un messaggio di errore in caso di connessione non riuscitas
		die("Errore di connessione con il DB ". mysqli_connect_error());
	}

	//select dei messaggi
	$sql = "SELECT * FROM (SELECT * FROM messaggi ORDER BY id DESC LIMIT 25) sub ORDER BY id ASC;";
	$result = mysqli_query($conn, $sql);
	$string = "[";
	while ($row = mysqli_fetch_array($result)) {
		$string = $string . '{"id": "'. $row["id"] .'", "mittente": "' . $row["mittente"] .'", "testo": "' . $row["testo"] .'"},';
	}
	mysqli_close($conn);
	//dato che il ciclo restituisce una stringa con una virgola alla fine, viene rimossa perché non deve essere presente nel JSON
	$string = rtrim($string, ",");
	//la parentesi quadra chiude il JSON
	$string = $string . ']';
	//viene stampato sulla pagina il JSON completo che sarà utilizzato dalle pagine che effettuano richieste a questa pagina php
	echo $string;
?>