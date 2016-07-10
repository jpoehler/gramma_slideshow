var transitionTime = 5000;

var timer;
var grammaData = [];
var globalIndex = 0;
var elementArray = [];

$(document).ready(function () {
  init();
  enable();
});

function init(){
  $.ajax({
    type: 'GET',
    url: '/data',
    success: function(data){
      grammaData = data.gramma;
      createIndexNodes(grammaData);
      updateDom();
      updateHighlight();
    }
  });
}

//Button event listeners
function enable(){
$('.buttons').on('click', '.prev', prevButton);
$('.buttons').on('click', '.next', nextButton);
timer = setInterval(interval, transitionTime);
}

function disable(){
  $('.buttons').on('click', '.prev', prevButton);
  $('.buttons').on('click', '.next', nextButton);
  clearInterval(timer);
}

function interval(){
  nextButton();
}

//This brings up the previous person in peopleData
function prevButton(){
  console.log('This button works');
  globalIndex--;
  if(globalIndex < 0){
  globalIndex = grammaData.length - 1;
}

  updateDom();
  updateHighlight();
}

//This brings up the next person in peopleData
  function nextButton(){
    console.log('Next button working');
    globalIndex++;
    if(globalIndex >= grammaData.length - 1){
    globalIndex= grammaData.length + 1;
  }

    updateDom();
    updateHighlight();
  }

//This pushes data to the DOM
  function updateDom(){
      for (var i = 0; i < grammaData.length; i++){
        $('.gramma').empty();

        var data = grammaData[globalIndex];

        $('.gramma').append("<div></div>");
        var $el = $('.gramma').children().last();
        $el.append(data.image);
        $el.append(data.title);
  }
}

//This pulls up indicator buttons
  function createIndexNodes(array){
        for(var i = 0; i < array.length; i++){
          $('.carousel-indicators').append('<div class="index-point"></div>');
          var $el = $('.carousel-indicators').children().last();
          $el.data('index', i);
          elementArray.push($el);
        }
      }

      function updateHighlight(){
        for(var i = 0; i < elementArray.length; i++){
          var $el = elementArray[i];
          if(i == globalIndex){
            $el.addClass("index-hightlight");
          } else {
            $el.removeClass("index-hightlight");
          }
        }
      }
