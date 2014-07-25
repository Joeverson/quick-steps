<?php include 'header.php';?>
	<section class='col-md-9' id='tela-principal'>
		<img src="img/gifdado.gif" width='400' id='logoHear'>
		<span><img src="img/dado.png" width='400' id='logo'><p>Quick Steps</p></span>

		<?php
			if(@!$_SESSION['login']) include 'view/login/login.php';
		?>
	</section>
	<section class='col-md-3' id='menu'>
		<?php include 'sidebar.php';?>
	</section>
</body>
</html>