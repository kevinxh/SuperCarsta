var tpj=jQuery;
tpj.noConflict();

tpj(document).ready(function() {

  var apiRevoSlider = tpj('.tp-banner').show().revolution(
  {
    sliderType:"standard",
    jsFileLocation:"include/rs-plugin/js/",
    sliderLayout:"fullscreen",
    dottedOverlay:"none",
    delay:9000,
    responsiveLevels:[1200,992,768,480,320],
    startwidth:1140,
    startheight:600,
    hideThumbs:200,

    thumbWidth:100,
    thumbHeight:50,
    thumbAmount:3,

    navigation: {
      keyboardNavigation:"off",
      keyboard_direction: "horizontal",
      mouseScrollNavigation:"off",
      onHoverStop:"off",
      touch:{
        touchenabled:"on",
        swipe_threshold: 75,
        swipe_min_touches: 1,
        swipe_direction: "horizontal",
        drag_block_vertical: false
      },
      arrows: {
                        style: "hermes",
                        enable: true,
                        hide_onmobile: false,
                        hide_onleave: false,
                        tmp: '<div class="tp-arr-allwrapper">	<div class="tp-arr-imgholder"></div>	<div class="tp-arr-titleholder">{{title}}</div>	</div>',
                        left: {
                            h_align: "left",
                            v_align: "center",
                            h_offset: 10,
                            v_offset: 0
                        },
                        right: {
                            h_align: "right",
                            v_align: "center",
                            h_offset: 10,
                            v_offset: 0
                        }
                    }
    },

    touchenabled:"on",
    onHoverStop:"on",

    swipe_velocity: 0.7,
    swipe_min_touches: 1,
    swipe_max_touches: 1,
    drag_block_vertical: false,


    parallax:"mouse",
    parallaxBgFreeze:"on",
    parallaxLevels:[8,7,6,5,4,3,2,1],
    parallaxDisableOnMobile:"on",

    keyboardNavigation:"on",

    shadow:0,
    fullWidth:"off",
    fullScreen:"on",

    spinner:"spinner0",

    stopLoop:"off",
    stopAfterLoops:-1,
    stopAtSlide:-1,

    shuffle:"off",


    forceFullWidth:"off",
    fullScreenAlignForce:"off",
    minFullScreenHeight:"400",

    hideThumbsOnMobile:"off",
    hideNavDelayOnMobile:1500,
    hideBulletsOnMobile:"off",
    hideArrowsOnMobile:"off",
    hideThumbsUnderResolution:0,

    hideSliderAtLimit:0,
    hideCaptionAtLimit:0,
    hideAllCaptionAtLilmit:0,
    startWithSlide:0,
    fullScreenOffset:"0px"
  });

  apiRevoSlider.bind("revolution.slide.onchange",function (e,data) {
    if( $(window).width() > 992 ) {
      if( $('#slider ul > li').eq(data.slideIndex-1).hasClass('dark') ){
        $('#header.transparent-header:not(.sticky-header,.semi-transparent)').addClass('dark');
        $('#header.transparent-header.sticky-header,#header.transparent-header.semi-transparent.sticky-header').removeClass('dark');
        $('#header-wrap').removeClass('not-dark');
      } else {
        if( $('body').hasClass('dark') ) {
          $('#header.transparent-header:not(.semi-transparent)').removeClass('dark');
          $('#header.transparent-header:not(.sticky-header,.semi-transparent)').find('#header-wrap').addClass('not-dark');
        } else {
          $('#header.transparent-header:not(.semi-transparent)').removeClass('dark');
          $('#header-wrap').removeClass('not-dark');
        }
      }
      SEMICOLON.header.logo();
    }
  });

}); //ready
