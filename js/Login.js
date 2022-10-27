var btnAbrirPopup = document.getElementById('btn-abrir-popup'),
	overlay = document.getElementById('overlay'),
	popup = document.getElementById('popup'),
	btnCerrarPopup = document.getElementById('btn-cerrar-popup');

btnAbrirPopup.addEventListener('click', function(){
	overlay.classList.add('active');
	popup.classList.add('active');
});

btnCerrarPopup.addEventListener('click', function(e){
	e.preventDefault();
	overlay.classList.remove('active');
	popup.classList.remove('active');
});

var eye = document.getElementById('Eye');
var input = document.getElementById('Input');
eye.addEventListener("click", function(){
    if(input.type == "password"){
        input.type == "text";
        eye.style.opacity=0.8;
    }else{
        input.type = "password";
        eye.style.opacity = 0.2;
    }
})
