$(window).bind('scroll', function() {
     if ($(window).scrollTop() > 200) {
         $('#scroll-down').hide();
     }
     else {
         $('#scroll-down').show();
     }
});
