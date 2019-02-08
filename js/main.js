$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$(document).ready(function () {
  var topoffset = 50;
            $(window).scroll(function () {
                
                //Method 1: Using addClass and removeClass
                if ($(document).scrollTop() > 100) {
                    $('.navbar-light').addClass('navbar-shrink');
                    $('.navbar-light').removeClass('navbar-fade');
                } else {
                    $('.navbar-light').removeClass('navbar-shrink');
                    $('.navbar-light').addClass('navbar-fade');
                }

            });


 $(window).scroll(function() {
        $('#wrapper').each(function() {
            if ($(this).offset().top < $(window).scrollTop()) {
                var difference = $(window).scrollTop() - $(this).offset().top;
                var half = (difference / 2) + 'px';
                $(this).find('img').css('top', half);     
            }   else {
                $(this).find('img').css('top', '0');
            }
        });
    });



$(window).scroll(function() {
          // checks if window is scrolled more than 500px, adds/removes solid class
          if($(this).scrollTop() > 100) { 
              $('.navbar').addClass('solid');
          } else {
              $('.navbar').removeClass('solid');
          }
        });




      anime.timeline({loop: true})
  .add({
    targets: '.ml5 .line',
    opacity: [0.5,1],
    scaleX: [0, 1],
    easing: "easeInOutExpo",
    duration: 1000
  }).add({
    targets: '.ml5 .line',
    duration: 1000,
    easing: "easeOutExpo",
    translateY: function(e, i, l) {
      var offset = -0.625 + 0.625*2*i;
      return offset + "em";
    }
  }).add({
    targets: '.ml5 .ampersand',
    opacity: [0,1],
    scaleY: [0.5, 1],
    easing: "easeOutExpo",
    duration: 1200,
    offset: '-=600'
  }).add({
    targets: '.ml5 .letters-left',
    opacity: [0,1],
    translateX: ["0.5em", 0],
    easing: "easeOutExpo",
    duration: 1500,
    offset: '-=300'
  }).add({
    targets: '.ml5 .letters-right',
    opacity: [0,1],
    translateX: ["-0.5em", 0],
    easing: "easeOutExpo",
    duration: 1500,
    offset: '-=600'
  }).add({
    targets: '.ml5',
    opacity: 0,
    duration: 4000,
    easing: "easeOutExpo",
    delay: 12000
  });


$('.ml11 .letters').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

anime.timeline({loop: true})
  .add({
    targets: '.ml11 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 2000
  })
  .add({
    targets: '.ml11 .line',
    translateX: [0,$(".ml11 .letters").width()],
    easing: "easeOutExpo",
    duration: 2000,
    delay: 100
  }).add({
    targets: '.ml11 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 2000,
    offset: '-=775',
    delay: function(el, i) {
      return 34 * (i+1)
    }
  }).add({
    targets: '.ml11',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 4000
  });


setTimeout(function(){
        $('body').addClass('loaded');
        $('h1').css('color','#222222');
    }, 400);

                  $('.navbar a').click(function() {
                if (location.pathname.replace(/^\//,'') ===
                  this.pathname.replace(/^\//,'') &&
                  location.hostname === this.hostname) {
                  var target = $(this.hash);
                  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                  if (target.length) {
                    $('html,body').animate({
                      scrollTop: target.offset().top-topoffset+2
                    }, 500);
                    return false;
                  } //target.length
                } //click function
              }); //smooth scrolling

              $('body').scrollspy({
                target: '.navbar',
                offset: topoffset
              });


            



         });