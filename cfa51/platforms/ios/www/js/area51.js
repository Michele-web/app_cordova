// Wait for device API libraries to load
//
var doubleBackToExitPressedOnce = false;
function onLoad() {
    document.addEventListener("deviceready", onDeviceReady, false);
}

//device APIs are available
//
function onDeviceReady() {
    document.addEventListener("pause", onPause, false);
    document.addEventListener("resume", onResume, false);
    document.addEventListener("menubutton", onMenuKeyDown, false);
    document.addEventListener('backbutton',onBackPress, false);
    
}

function onPause() {
    // Handle the pause event
}

function onResume() {
    // Handle the resume event
}

function onMenuKeyDown() {
    // Handle the menubutton event
}
function onBackPress() {
	  if (cordova.platformId !== 'windows') {
		   if(doubleBackToExitPressedOnce){
			   cordova.plugins.exit();
	  }
	  doubleBackToExitPressedOnce = true;
	  	toast("Clicca ancora INDIETRO per uscire");
		  setTimeout(function(){
			 doubleBackToExitPressedOnce = false; 
		  }, 2000);
     }

}

function mostraToast(messaggio){
	$.snackbar({content: messaggio});
}

$(document).ready(function(){
	 $('body').bootstrapMaterialDesign();
    
});


$(document).on('click','#submitButton',function(){
            if($('#username').val().length > 0 && $('#password').val().length > 0){
//             logica login
                localStorage.setItem('logged',true);
            } else {
            	mostraToast('Inserire Username e Password');
            }          
});

$(document).on('click','#recuperaButton',function(){
    if($('#username').val().length > 0){
//     logica per il recupero
//        localStorage.setItem('logged',true);
    } else {
    	mostraToast('Inserire Username/Email');
    }          
});



