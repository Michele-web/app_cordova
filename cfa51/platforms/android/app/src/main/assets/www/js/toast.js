function toast(message) {
    var $toast = $('<div class="ui-loader ui-overlay-shadow ui-body-e ui-corner-all"><h3>' + message + '</h3></div>');

    $toast.css({
        display: 'block', 
        background: '#000',
        opacity: 0.80, 
        position: 'fixed',
        'font-size': '13px',
        padding: '7px',
        'text-align': 'center',
        width: '270px',
        color:'#fff',
        'border-radius':'15px',
        left: ($(window).width() - 284) / 2,
        top: $(window).height() / 2 - 20
       
    });

    var removeToast = function(){
        $(this).remove();
    };

    $toast.click(removeToast);

    $toast.appendTo($.mobile.pageContainer).delay(2000);
    $toast.fadeOut(400, removeToast);
}