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
      afterReveal: function(el) {
        ScrollReveal().clean(el);
      }
    });
    sr.reveal(".reveal__scale-up",{
      scale:0,
      duration:900,
      delay:400,
      afterReveal: function(el) {
        ScrollReveal().clean(el);
      }
    });
    sr.reveal(".reveal__scale-down",{
      scale:1.4,
      duration:900,
      delay:400,
      mobile:false,
      afterReveal: function(el) {
        ScrollReveal().clean(el);
      }
    });
    sr.reveal(".reveal__opacity",{
      opacity:0,
      duration:1500,
      delay:400,
      afterReveal: function(el) {
        ScrollReveal().clean(el);
      }
    });

  });
}