var defaut = document.getElementById('barre');
var autre = document.getElementById('croix');
	

function switchDisplay(){
	defaut.style.display = (defaut.style.display == 'none' ? '' : 'none');
	autre.style.display = (autre.style.display == 'none' ? '' : 'none');
}
