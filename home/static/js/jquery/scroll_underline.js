// $(document).scroll(function() {
//     var cutoff = $(window).scrollTop();
//     var cutoffRange = cutoff + 200;
//
//     // Find current section and highlight nav menu
//     var curSec = $.find('.about');
//     alert(curSec)
//     var curID = $(curSec).attr('id');
//     var curNav = $.find('a[name='+curID+']');
//     $(curNav).addClass('active');
//
//     $('.section').each(function(){
//         if ($(this).offset().top > cutoff && $(this).offset().top < cutoffRange) {
//             $('.section').removeClass('current')
//             $(this).addClass('current');
//             return false; // stops the iteration after the first one on screen
//         }
//     });
// });