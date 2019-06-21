var DEFAULT_VALUE="1";
var DARK = "0";

$(document).ready(function(){
	 var valueTheme = localStorage.getItem('theme');
	 if(valueTheme != undefined && valueTheme!= null){
		 setTheme(valueTheme);
		 setCheckTheme(valueTheme);
	 }else{
		 setTheme(DEFAULT_VALUE);
		 setCheckTheme(DEFAULT_VALUE);
	 }
});



//cambio tema 
$(document).on('click','#changeTheme',function(){
	var valueTheme = $('.radio_check').val();
	localStorage.setItem('theme',valueTheme);
	setTheme(valueTheme);
});



function setTheme(valueTheme){
	if(valueTheme==DARK){
		darkTheme();
	}else{
		lightTheme();
	}
}

function setCheckTheme(valueTheme){
	var check =  $('input[type=radio].optionTheme').filter(function(){ return this.value==valueTheme}); 
	if(check[0]!= undefined){
		$(check[0]).addClass('radio_check');
		 check[0].checked = true;
	}

}

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

