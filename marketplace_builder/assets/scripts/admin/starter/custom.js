$(document).foundation();

// Toggle Left Menu
var $wrap = $('.off-canvas-wrapper');
$('[toggle-menu-width]').click(function(e) {
    e.preventDefault();
    $wrap.toggleClass('menu-shrink').toggleClass('menu-expand');
    var menuIsClosed = $wrap.hasClass('menu-shrink');
    if (menuIsClosed) {
        Cookies.set('menu-closed', 'true');
    } else {
        Cookies.set('menu-closed', 'false');
    }
    $('.list-group').foundation('hideAll');
});

// When accordion expanded always expand menu
$('.list-group').on('down.zf.accordionMenu', function(){
    $wrap.removeClass('menu-shrink').addClass('menu-expand');
});

// Update menu open/close button on menu toggle
$('.off-canvas-left').on('opened.zf.offCanvas', function(){
    $('.left-menu-toggle').html('<i class="fas fa-angle-double-left"></i> Close');
    $wrap.removeClass('menu-shrink').addClass('menu-expand');
}).on('closed.zf.offCanvas', function(){
    $('.left-menu-toggle').html('<i class="fas fa-angle-double-right"></i> Menu');
});

// If menu was closed previously, close automatically
if ((Cookies.get("menu-closed") == 'true')) $('.menu-control-close button').click();    