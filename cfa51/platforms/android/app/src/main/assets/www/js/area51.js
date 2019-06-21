// Wait for device API libraries to load
var doubleBackToExitPressedOnce = false;
var logged = false;
var currentDate = null;
var testoprova ='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dictum tristique posuere. Morbi ut diam ante. Aliquam vel aliquam dui. Suspendisse potenti. Vestibulum dictum urna a felis aliquet, faucibus feugiat urna lacinia. Sed convallis neque et risus congue, id interdum metus feugiat. Aliquam lacus ex, dapibus quis sollicitudin a, euismod vel erat. Donec quis lorem dolor. Donec tincidunt nibh tempus porta placerat. Maecenas auctor, augue quis varius suscipit, nulla ante ullamcorper magna, et interdum purus felis nec dui. Proin scelerisque ex vel nunc tincidunt ultrices. Mauris lacus enim, egestas eu malesuada ut, sagittis eget mi. Duis turpis turpis, venenatis vel suscipit ut, lobortis vitae metus. Mauris bibendum fermentum mauris, ac molestie eros. Etiam augue velit, feugiat vel magna ut, hendrerit sodales tellus.';
function showLoading(){
	$('#spinner').load('loader.html');
	$('#spinner').show();
	$('button.navbar-toggler').attr('disabled','disabled').button('refresh');
	$('.container').hide();
	$('body').addClass('overlay');
}
function hideLoading(){
	
	$('#spinner').hide();
	$('button.navbar-toggler').removeAttr('disabled');
	$('.container').show();
	$('body').removeClass('overlay');
}
function onLoad() {
    document.addEventListener("deviceready", onDeviceReady, false);
}

//device APIs are available
//
function onDeviceReady() {
	screen.orientation.lock('portrait');
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


function initialFrame(){
	showLoading();
	$('.data_wod').html(currentDate);
	  setTimeout(function(){
		  hideLoading();
			$($('#titoloNavbar').html('WOD'));
			$('div.container_wod').addClass('page_content_active');
		  }, 2000);
}

function routing(val){
	var page = val[0].id;
	 closeDrawer();
	 showLoading();
	 $('.data_wod').html(currentDate);
	 setTimeout(function(){
		hideLoading();
		$('.page_content').removeClass('page_content_active');
		$('div.container_'+page).addClass('page_content_active');
		var titlePage = page.toUpperCase();
		 $($('#titoloNavbar').html(titlePage));
		 switch (page) {
		case 'wod':
			
			break;
		case 'prenotazioni':
			
			break;
		case 'news':
			verificaNews();
			break;
		case 'estetica':
			
			break;
		case 'contatti':
			
			break;
		case 'impostazioni':
			
			break;

		default:
			break;
		}
		 
		 
		 
		 
		 
//			 creaCards('TITOLO',testoprova,page);
	}, 1500);
	
	
}




function closeDrawer(){
	$('.bmd-layout-container').removeClass('bmd-drawer-in');
	$('.bmd-layout-backdrop').removeClass('in');
}

$(document).ready(function(){
	 $('body').bootstrapMaterialDesign();
	 getToday();
	 if($('#home_page').length > 0){
		 initialFrame();
	 }
	
});



function getToday(){
	var fullDate = new Date()
	var twoDigitMonth = ((fullDate.getMonth().length+1) === 1)? (fullDate.getMonth()+1) :(fullDate.getMonth()+1);
  currentDate = fullDate.getDate() + "/" + twoDigitMonth + "/" + fullDate.getFullYear();
}

$(document).on('click','.nav-link-wod-score',function(){
	$('.nav-link-wod-score').removeClass('active');
	$('.card-body-wod-score').removeClass('active');
	 
	$(this).addClass('active');
	var href = $(this).attr('href');
	$(href).addClass('active');
});


$(document).on('click','.list-group-item',function(){
	$('.list-group-item').removeClass('active');
	$(this).addClass('active');
	routing($(this));
});


$(document).on('click','.optionTheme',function(){
	$('.optionTheme').removeClass('radio_check');
	$(this).addClass('radio_check');
});

$(document).on('click','#scoreButton',function(event){
	event.preventDefault();
});



//crea card
function creaCards(title,body,context){
	var card =  "<div class='container_'"+context+"><div class='card'>"+
	 " <img src='images/splashscreen/alien51.png' class='card-img-top' alt='Info'>"+
	  "<div class='card-body'>"+
	    "<h5 class='card-title'>"+title+"</h5>"+
	    "<p class='card-text'>"+body+"</p>"+
	    "<button id='test' type='submit' class='btn btn-primary btn-raised buttonApp'>APRI</button>"+
	 "</div>"+
	 "</div>"+
	"</div>"
	$('.container_'+context).append(card).fadeIn().delay(1000);
	
}


$(document).on('click','.booking',function(){
//	alert('s');
});





