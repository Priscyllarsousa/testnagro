
function concat(){

	var text = document.getElementById("textArea").innerHTML;
	
	var newText = document.getElementById("concatText").value;
	
	var comentarios = document.getElementsByClassName("comentario-usuario");
		
	if(text != ""){
		text += " ";
	}
	
	newText = "<div class='comentario-usuario' >	<p>"+newText+"</p>	</div>";
	
	if(comentarios.length == 0){
		text = newText;
	}else{
		text += newText;
	}
	
	document.getElementById("textArea").innerHTML = text;
	
	document.getElementById("concatText").value = "";

	document.getElementById("concatText").focus();
}

window.onload = function(){
	
	var dayName = new Array ("domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado");
	var monName = new Array ("janeiro", "fevereiro", "março", "abril", "maio", "junho", "agosto", "outubro", "novembro", "dezembro");
	var now = new Date();
	
	var rodape = document.getElementsByTagName("footer")[0];
	
	rodape.innerHTML = "<div>Hoje é " + dayName[now.getDay() ] + ", " + now.getDate () + " de " + monName [now.getMonth() ]   +  " de "  +     now.getFullYear () + ".</div>";
	
}
