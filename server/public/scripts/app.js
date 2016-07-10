$(document).ready(function(){

var owl = $('.owl-carousel');
owl.owlCarousel({
      items : 3
  });
  $(".play").click(function(){
    console.log("play button works");
    owl.trigger('owl.play',1000);
  })
  $(".stop").click(function(){
    owl.trigger('owl.stop');
  })
});
