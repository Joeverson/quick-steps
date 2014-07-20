<html>
<head>
	<title></title>
	<!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
	<link rel="stylesheet" href="css/style.css">
	<!-- Optional theme -->
	<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap-theme.min.css">

	<!-- Latest compiled and minified JavaScript -->
	<script src="http://akde.xp3.biz/js/jQuery.js"></script>
	<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
	<script type="text/javascript">
		function aparecer(){

			$('.progress').css({display:'block'});
			setInterval(function(){
				$('.progress-bar').css({width:170});			
				setTimeout(function(){ $('.progress-bar').css({backgroundColor:'green'}).removeClass('active'); }, 5000);
				// $('.progress').css({display:'none'});
			},100);

			
		}
	</script>
</head>
<body>
	<section class='col-md-9' id='tela-principal'>
		<img src="img/dado.png" width='400'><p>Quick Steps</p>
	</section>
	<section class='col-md-3' id='menu'>
		<div class='col-md-12 menu-opcao clicar' onclick='aparecer();'>
			File
			<div class="progress">
			  <div class="progress-bar progress-bar-danger progress-bar-striped active" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style="width: 1%;">
			    <span class="sr-only">80% Complete (danger)</span>
			  </div>
			</div>
		</div>
		<div class='col-md-12 menu-opcao clicar'>Task</div>
		<div class='col-md-12 menu-opcao clicar'>Setup</div>
	</section>
</body>
</html>