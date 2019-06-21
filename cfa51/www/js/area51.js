// Wait for device API libraries to load
//
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

function logout(){
	localStorage.removeItem('logged');
	localStorage.removeItem('username');
	document.location.href ="login.html";
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

function changeFrame(val){
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
//			 creaCards('TITOLO',testoprova,page);
	}, 1500);
	
	
}
function closeDrawer(){
	$('.bmd-layout-container').removeClass('bmd-drawer-in');
	$('.bmd-layout-backdrop').removeClass('in');
}

$(document).ready(function(){
	 $('body').bootstrapMaterialDesign();
	
	 var valueTheme = localStorage.getItem('theme');
	 if(valueTheme != undefined && valueTheme!= null){
		 setTheme(valueTheme);
		 setCheckTheme(valueTheme);
	 }else{
		 setTheme('1');
		 setCheckTheme("1");
	 }
	 getToday();
	 if($('#home_page').length > 0){
		 initialFrame();
	 }
	
});

function setCheckTheme(valueTheme){
	var check =  $('input[type=radio].optionTheme').filter(function(){ return this.value==valueTheme}); 
	$(check[0]).addClass('radio_check');
	 check[0].checked = true;
}

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
	changeFrame($(this));
});

$(document).on('click','#salva_credenziali',function(){
	
	var checked = $(this).attr('checked');
	if(checked == undefined){
		$(this).attr("checked", "checked");
		$(this).val('on');
	}else{
		$(this).removeAttr("checked");
		$(this).val('off');
	}
});

$(document).on('click','#submitButton',function(){
	
            if($('#username').val().length > 0 && $('#password').val().length > 0){
//             logica login
            	var checked = $('#salva_credenziali').val();
            	if(checked == 'on'){
            		localStorage.setItem('logged',true);
                    localStorage.setItem('username',$('#username').val());
            	}
            	 document.location.href ="home.html";
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

$(document).on('click','#logout',function(){
	logout();
});

$(document).on('click','.optionTheme',function(){
	$('.optionTheme').removeClass('radio_check');
	$(this).addClass('radio_check');
});

$(document).on('click','#scoreButton',function(event){
	event.preventDefault();
});


function darkTheme(){
	$('body').css({'background-color':'#000'});
	$('.bmd-layout-drawer').css({'background-color':'#000','color':'#fff'});
	$('hr.dividi').css({'border-top':'1px solid rgba(241, 241, 241, 0.99)'});
	$('label.bmd-label-floating').css({'color':'var(--colore_applicazione)'});
	$('.form-control, .custom-file-control, .is-focused .form-control, .is-focused .custom-file-control').css({'background-image':'linear-gradient(to top, var(--colore_applicazione) 2px, rgba(0, 150, 136, 0) 2px), linear-gradient(to top, var(--colore_applicazione) 1px, rgba(0, 0, 0, 0) 1px)'})
	$('.radio label, .is-focused .radio label, .radio-inline, .is-focused .radio-inline, .checkbox label, .is-focused .checkbox label, .checkbox-inline, .is-focused .checkbox-inline, .switch label, .is-focused .switch label').css({'color':'var(--colore_applicazione)'})
	$('.check').css({'border':'0.125rem solid var(--colore_applicazione)'});
	$('input[type=text]').css({'color':'#fff'});
	$('input[type=password]').css({'color':'#fff'});
	$('input[type=text].text_card').css({'color':'#000'});
	$('input[type=password]text_card').css({'color':'#000'});
	$('.bmd-layout-backdrop').css({'background-color':'rgba(251, 248, 248, 0.5)'});
}
function lightTheme(){
	$('body').css({'background-color':''});
	$('.bmd-layout-drawer').css({'background-color':'','color':''});
//	$('hr.dividi').css({'border-top':'1px solid rgba(241, 241, 241, 0.99)'});
	$('label.bmd-label-floating').css({'color':''});
	$('.form-control, .custom-file-control, .is-focused .form-control, .is-focused .custom-file-control').css({'background-image':'linear-gradient(to top, var(--colore_applicazione) 2px, rgba(0, 150, 136, 0) 2px), linear-gradient(to top, rgba(0, 0, 0, 0.26) 1px, rgba(0, 0, 0, 0) 1px)'})
	$('.radio label, .is-focused .radio label, .radio-inline, .is-focused .radio-inline, .checkbox label, .is-focused .checkbox label, .checkbox-inline, .is-focused .checkbox-inline, .switch label, .is-focused .switch label').css({'color':'rgba(0, 0, 0, 0.26)'})
	$('input[type=text]').css({'color':''});
	$('input[type=password]').css({'color':''});
	$('.bmd-layout-backdrop').css({'background-color':'rgba(0, 0, 0, 0.5)'});
}
function setTheme(valueTheme){
	if(valueTheme=='0'){
		darkTheme();
	}else{
		lightTheme();
	}
}
//cambio tema 
$(document).on('click','#changeTheme',function(){
	var valueTheme = $('.radio_check').val();
	localStorage.setItem('theme',valueTheme);
	setTheme(valueTheme);
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





