$(function(){
	console.log(actions.close_speech.isArray);
	$key = true;
	var s = new webkitSpeechRecognition();
	s.lang = 'pt-br';
	s.interimResults = true;
	s.continuous = true;
	
	$('#logo').click(function(){
		if($key){
			startS(s);
			$key = false;
			// console.log($key);
		}else{
			stopS(s);
			$key = true;
			// console.log($key);
		}

		s.onresult = function(e){
			// console.log(e.results);
			var acao = e.results[e.resultIndex][0].transcript;
			// console.log('fora do if - '+acao);


			if(e.results[e.resultIndex].isFinal){ // resultado final devolvido por callback

				//** quebrar o resultado num array para busca de termos.

				var terms = acao.split(' ');

				//** condicionais para determinar quais ações seram tomadas apartir dos termos obtidos
				console.log(terms);
				terms.forEach(function(words){
					if(words == actions.close_speech){
						stopS(s); // - finalizar o speech
					}else if(words == actions.file.upload){
						
					}else if(words == 'sair'){
						document.location.href = 'http://google.com';
					}
				});
			}
			
			
		}
		s.onerror = function(e){ console.log('error in -' + e.error); stopS(s);} // apresentação do error encontrado
	});

});

function stopS(s){
	s.stop();
	s.onend = function(){ $('#logoHear').css({display:'none'}); }
}

function startS(s){
	s.start();
	s.onstart = function(){ $('#logoHear').css({display:'block'}); }
}
