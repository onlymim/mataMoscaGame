var altura = 0
var largura = 0
var vidas = '1'
var tempo = 15;
var tempoMosca = 2000;
var nivel = window.location.search;


function ajustaTamanhoPalcoJogo(){
	altura = window.innerHeight;
	largura = window.innerWidth;

}


 ajustaTamanhoPalcoJogo()


 var cronometro = setInterval(function(){
 	tempo -=1;
 	if (tempo < 0) {
    clearInterval(cronometro);
    clearInterval(criaMosca);
    window.location.href = 'vitoria.html'
 	}else{
  
  document.getElementById('cronometro').innerHTML = tempo;
    }
  
},1000)

 nivel = nivel.replace('?', '');
alert(nivel)

if(nivel === 'facil' ){
	tempoMosca = 2000;
}else if(nivel === 'medio'){
	tempoMosca = 1000;
}else if (nivel === 'dificil') {
	tempoMosca = 750;
}

  function criaMoscaAleatória(){
    if (document.getElementById('mosca')){
    	document.getElementById('mosca').remove();
    if(vidas > 3){

    	window.location.href= 'fimDeJogo.html';

    }else{

    	document.getElementById('v'+ vidas).src = 'imagens/coracao_vazio.png';
    	vidas++
         }
    }

	var posiçãoX = Math.floor(Math.random() *largura) - 90;
	var posiçãoY = Math.floor(Math.random() *altura) - 90;
    
    if(posiçãoX < 0){
    	posiçãoX = 0; 
    }else if(posiçãoY < 0){
    	posiçãoY = 0;
    }
	var mosca = document.createElement('img');
	mosca.src= 'imagens/mosca.png';
    mosca.className= tamanhoAleatorio() +' '+ ladoAleatorio();
    mosca.style.top = posiçãoY + 'px';
    mosca.style.left = posiçãoX + 'px';
    mosca.style.position ='absolute';
    mosca.id = 'mosca'
	document.body.appendChild(mosca);
	mosca.onclick = function(){
		this.remove();
	}

}
 
function tamanhoAleatorio(){
	var classe = Math.floor(Math.random() * 3)

	switch(classe){
	case 0: 
		return 'mosca'

	case 1:
	    return'mosca1'

	case 2: 
	    return'mosca2'  	

	}
}

function ladoAleatorio(){
	var classe = Math.floor(Math.random() * 2)

	switch(classe){
	case 0: 
		return 'ladoA'

	case 1:
	    return 'ladoB'

	 	}	
}


