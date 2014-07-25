<?php
	class BD{

		public function inserir($table){
			
			if($table == 'login'){

				return "INSERT INTO login (user, pass) VALUES (:user, :pass)";

			}else if($table == 'cadastro'){

				return "false";

			}
			
		}

		public function buscar($table){
			
			if($table == 'login'){
				return "SELECT * FROM login WHERE user = :user and pass = :pass";
			}else if($table == 'cadastro'){
				return "false";
			}
			
		}
	}


?>