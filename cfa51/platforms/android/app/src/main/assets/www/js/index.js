$(document).ready(function(){
	 var logged = localStorage.getItem('logged');
	 if(logged){
		 document.location.href ="home.html";
	 }else{
		 document.location.href ="login.html";
	 } 
});