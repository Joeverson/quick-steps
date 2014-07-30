<?php include 'header.php';?>
    <?php include 'notification.php'?>
	<section class='col-md-9' id='tela-principal'>
		<img src="img/gifdado.gif" id='logoHear'>
		<span><img src="img/dado.png" id='logo'><p>Quick Steps</p></span>

		<?php
			if(@!$_SESSION['login']) include 'login/login.php';
		?>
	</section>
	<section class='col-md-3' id='menu'>
		<?php include 'sidebar.php';?>
	</section>
</body>
</html>