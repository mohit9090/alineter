 /* Scroll Reveal */
function scrollReveal() {
  $(function(){
    window.sr = ScrollReveal();
    sr.reveal(".reveal__from-left",{
      origin:"left",
      distance:"200px",
      duration:900,
      delay:400,
      mobile:false,
      easing:'ease',
      afterReveal: function(el) {
        ScrollReveal().clean(el);
      }
    });
    sr.reveal(".reveal__from-right",{
      origin:"right",
      distance:"200px",
      duration:900,
      delay:400,
      mobile:false,
      easing:'ease',
      afterReveal: function(el) {
        ScrollReveal().clean(el);
      }
    });
    sr.reveal(".reveal__from-top",{
      origin:"top",
      distance:"200px",
      duration:900,
      delay:400,
      mobile:false,
      easing:'ease',
      afterReveal: function(el) {
        ScrollReveal().clean(el);
      }
    });
    sr.reveal(".reveal__from-bottom",{
      origin:"bottom",
      distance:"200px",
      duration:900,
      delay:400,
      mobile:false,
      easing:'ease',
      afterReveal: function(el) {
        ScrollReveal().clean(el);
      }
    });
    sr.reveal(".reveal__scale-up",{
      scale:0,
      duration:700,
      delay:200,
      easing:'ease',
      afterReveal: function(el) {
        ScrollReveal().clean(el);
      }
    });
    sr.reveal(".reveal__scale-down",{
      scale:1.4,
      duration:900,
      delay:400,
      mobile:false,
      easing:'ease',
      afterReveal: function(el) {
        ScrollReveal().clean(el);
      }
    });
    sr.reveal(".reveal__opacity",{
      opacity:0,
      duration:1600,
      delay:200,
      easing:'ease',
      afterReveal: function(el) {
        ScrollReveal().clean(el);
      }
    });

  });
}