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


function logout(){
	localStorage.removeItem('logged');
	localStorage.removeItem('username');
	document.location.href ="login.html";
}