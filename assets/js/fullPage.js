
$(window).on('load', function() {
  $('.slide-img').addClass('scaleImg');
 
});

$(function() {
  $('#fullPage').fullpage();

});
var g_interval;
new fullpage('#fullPage', {
  afterLoad: function (origin, destination, direction) {
    clearInterval(g_interval);
    
    // 1000 milliseconds lapse
    const lapse = 4000;
    const shouldAutoPlay = destination.item.hasAttribute('data-auto');

    const hasSlides = destination.item.querySelectorAll('.fp-slides').length;
    
    if(shouldAutoPlay && hasSlides){
      g_interval = setInterval(function () {
        fullpage_api.moveSlideRight();
      }, lapse);
    }
  },
  menu: '#pageNav',
  scrollBar: false,
  scrollingSpeed: 750,
  loopTop: true,
  loopBottom: true,
  keyboardScrolling: false,
  continuousHorizontal: true,
  scrollHorizontally: true
});