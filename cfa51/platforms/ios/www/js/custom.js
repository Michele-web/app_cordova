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






// toolbar persistence
$(document).ready(function(){
//    $("[data-role='header'],[data-role='footer']").toolbar();
//    $("#panelMenu").panel();
    
    if(localStorage.getItem('href')!= null){
    	var href = localStorage.getItem('href');
    	$("#home").trigger( "click" );
//    	if(href == '#prenotazioni'){
//    		$("#prenota").trigger( "click" );
//    	}
    }
    
});

$(document).on('click','#home',function(){
	var ref = cordova.InAppBrowser.open('http://www.crossfitarea51.com/rome', '_blank', 'location=yes');
	ref.show();
	//window.open("tel:+393926039664", "_blank");
});

$(document).on('click','#prenota',function(){
	 $.mobile.loading( "show" );
		  setTimeout( function(){
			  var logged = localStorage.getItem("logged");
			  if(!logged){
				$('#login').show();  
			  }else{
				  $('#prenotati').show();  
			  }
			  $.mobile.loading( "hide" );  
		  }, 2500);
});


$(document).on('click','#submitButton',function(){
//	var activePage = $(':mobile-pagecontainer').pagecontainer('getActivePage');
            if($('#username').val().length > 0 && $('#password').val().length > 0){
             
//                userHandler.username = $('#email').val();
                localStorage.setItem('logged',true);
//                $('#login').hide();
//                $('#prenotati').show();  
             
                // Send data to server through the Ajax call
                // action is functionality we want to call and outputJSON is our data
//                $.ajax({url: 'auth.php',
//                    data: {action : 'authorization', formData : $('#check-user').serialize()},
//                    type: 'post',                  
//                    async: 'true',
//                    dataType: 'json',
//                    beforeSend: function() {
//                        // This callback function will trigger before data is sent
//                        $.mobile.loading('show'); // This will show Ajax spinner
//                    },
//                    complete: function() {
//                        // This callback function will trigger on data sent/received complete   
//                        $.mobile.loading('hide'); // This will hide Ajax spinner
//                    },
//                    success: function (result) {
//                        // Check if authorization process was successful
//                        if(result.status == 'success') {
//                            userHandler.status = result.status;
//                            $.mobile.changePage("#second");                        
//                        } else {
//                            alert('Logon unsuccessful!');
//                        }
//                    },
//                    error: function (request,error) {
//                        // This callback function will trigger on unsuccessful action               
//                        alert('Network error has occurred please try again!');
//                    }
//                });                  
            } else {
//            	toast("Compilare i campi richiesti");
            	var notification = document.querySelector('.mdl-js-snackbar');
            	var data = {
            	  message: 'Inserire Username e Password',
            	  timeout: 10000
            	};
            	notification.MaterialSnackbar.showSnackbar(data);
            }          
            return false; // cancel original event to prevent form submitting
});


function checkSelected(value){
	unselectListView();
	if($(value).children('span').hasClass('no_select')){
		$(value).children('span').addClass('clicked').addClass('select_listview');
		localStorage.setItem('href',$(value).attr('href'));
	}
}


function goHome(){
	unselectListView();
	 window.location.href ="index.html";
}
function unselectListView(){
	$('a span').removeClass('clicked').removeClass('select_listview');
}


//$(document).on('swipeleft swiperight',function(event){
//	
//	
//	
//    if ( $( ".ui-page-active" ).jqmData( "panel" ) !== "open" ) {
//            if ( event.type === "swipeleft" ) {
//                $( "#panelMenu" ).panel( "close" );
//
//            } else if ( event.type === "swiperight" ) {
//                $( "#panelMenu" ).panel( "open" );
//				
//            }
//        }
//    
//});


