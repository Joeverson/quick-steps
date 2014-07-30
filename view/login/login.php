
<section class='tela-preta col-md-12' style="background-color:<?php echo $_SESSION['cor']; ?>"></section>
<div class="login  col-md-4">
	<img src="img/dado.png" width='100'>
	<p>Autentication!</p>
	<form method='get' action='../model/login_validador.php'>
		<input type='text' class='form-control user-login' name='user' placeholder='User'>
		<input type='password' class='form-control pass-login' name='pass' placeholder='Pass'>
		<p>Press enter for GO!!</p>
	</form> 
</div>