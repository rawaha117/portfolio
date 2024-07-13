var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 100;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };








// ------------------------gsap------------------------------
gsap.to("nav",{
   position:"fixed",
   top:"2px",
   backgroundColor:"#000",
    scrollTrigger:{
        trigger:"nav",
        scroller:"body",
     
        start:"top -10%",
        end:"top -11%",
    scrub:1,
    }
})

gsap.to("#services h1",{
  transform:"none",
    overflow:"hidden",
     scrollTrigger:{
         trigger:"#navbar h1",
         scroller:"body",
    
         start:"top -105%",
         end:"top -90%",
     scrub:1,
     }
 })

 gsap.to("#services .service-container",{
opacity:1,
delay:1,
     scrollTrigger:{
         trigger:"#navbar h1",
         scroller:"body",

         start:"top -120%",
        end:"top -95%",
     scrub:1,
     }
 })
//   -----------------------end of gsap-----------------------