/*
desenvolvido por: joeverson santos

*/

$(function(){ // jquery onload

// ----------- submit of form
	

	$('input').keydown(function(){
		var key = event.keyCode;
		if(key == 13){
			if($('input').val() != ''){
				// console.log($('form').seralize());
				$('form').submit();
			}
		}
	})

	$('.menu-opcao').click(function a(e){ //abrindo espaço para opcoes 
		$('#'+this.id+' p').css({marginTop:'-40px', fontSize: '30px', webkitTransition:'all 0.3s ease-out'});
	});



});

// ------------- funções diversas

function aparecer(){
	$('.progress').css({display:'block'});

	setInterval(function(){
		$('.progress-bar').css({width:170});			
		setTimeout(function(){ $('.progress-bar').css({backgroundColor:'green'}).removeClass('active'); }, 5000);
		// $('.progress').css({display:'none'});
	},100);

	
}