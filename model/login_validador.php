<?php
	include_once '../controller/conn/conn.php';
	include '../controller/sql_acess.php';

	session_start();

	$user = $_GET['user'];
	$pass = $_GET['pass'];

	$cript = md5($pass.'passwordSecret');

	$sql = new BD;

	$prep = $conn->prepare($sql->buscar('login'));
	$prep->execute(array(':user' => $user, ':pass' => $pass));
	$linha = false;
	do{
		// echo $linha['user'];
		if($linha){ 
			$_SESSION['login'] = true;
			$_SESSION['cor'] = 'green';
		}
		else{ 
			$_SESSION['login'] = false;
			$_SESSION['cor'] = 'red';
		}

	}while ($linha = $prep->fetch(PDO::FETCH_ASSOC));
	

	header('location: ../index.php');


?>