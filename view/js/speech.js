$(function(){
    //actions.exit_site();
	// console.log(actions.close_speech.isArray);
	$key = true;
	var s = new webkitSpeechRecognition();
	s.lang = 'pt-br';
	s.interimResults = true;
	s.continuous = true;
	
	$('#logo, .login img').click(function(){
		if($key){
			actions.startSpeech.take(s);
			$key = false;
			// console.log($key);
		}else{
			actions.close_speech.take(s);
			$key = true;
			// console.log($key);
		}

		s.onresult = function(e){
			// console.log(e.results);
			var acao = e.results[e.resultIndex][0].transcript.trim();
			// console.log('fora do if - '+acao);


			if(e.results[e.resultIndex].isFinal){ // resultado final devolvido por callback

				//** condicionais para determinar quais ações seram tomadas apartir dos termos obtidos
                $('.speechActive').css({display:'block'}).html(acao+" <span class='glyphicon glyphicon-comment'></span>");
				
				if(new RegExp(actions.close_speech.term).test(acao)){
					actions.close_speech.take(s); // - finalizar o speech
				}else if(new RegExp(actions.file.term).test(acao)){
					
				}else if(new RegExp(actions.login.user.term).test(acao)){ //para fazer login no sistema por voz
					$nome = acao.split(' ');
					$nomeAp = '';
					
					if($nome[1] == actions.login.go.term){ // para logar (enviar formulario)

						$('form').submit();

					}else if($nome[1] == actions.login.cls.term){

						$('input').val('');
						
					}else{
						for(var i = 1; $nome.length>i; i++){
							$nomeAp += $nome[i];
						}

						$('.user-login').val($nomeAp);
					}
					
					
				}else if(new RegExp(actions.menu.close.term).test(acao)){ // esconder o menu de opções
                    actions.menu.close.take();
                }else if(new RegExp(actions.menu.show.term).test(acao)){ // esconder o menu de opções
                    actions.menu.show.take();
                }
	
			}
			
			
		}
		s.onerror = function(e){ $('.speechActive').html('Error na ' + e.error+" <span class='glyphicon glyphicon-comment'></span>"); stopS(s);} // apresentação do error encontrado
	});

});

