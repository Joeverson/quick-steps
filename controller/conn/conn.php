<?php
	try{
		$conn = new PDO("mysql:host=localhost; dbname=qs","root","");
	}catch(PDOException $error){
		echo $error->getMessage().' - '.$error->getCode();
	}
?>