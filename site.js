//fade in the title on page load
$(document).ready(function(){
    $('.title-text').fadeTo(1000, 1);
});

//cache reference to window and animation items
var $animation_elements = $('.animation-element');
var $window = $(window);
var window_height = $window.height();

function check_if_in_view() {
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animation_elements, function() {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        //check to see if current element is within viewport
        if((element_bottom_position >= window_top_position + 150) &&
            (element_top_position <= window_bottom_position - 150)) {
                $element.addClass('in-view');
            } else {
                $element.removeClass('in-view');
            }
    });
}

//event handler to listen for scroll event
$window.on('scroll', check_if_in_view);
$window.trigger('scroll');

//pad title to the center of screen
var titles_height = $('.titles').height();
$('.titles').css('padding-top', ((window_height / 2) - titles_height) );

/*
//FizzBuzz Program (apparent interview question)
for(var i = 1; i <= 100; i++){
  if(i % 3 == 0 && i % 5 ==0){
    console.log('FizzBuzz');
  }else if(i % 3 == 0){
    console.log('Fizz');
  }else if(i % 5 == 0){
    console.log('Buzz');
  }else{
    console.log(i);
  }
}
//remove from final version of webpage/site
*/

/*
//Chessboard program (could be interview question)
//Doesn't work quite yet. Need to write out problem before
//just charging into it maybe.
var width = 8;
var height = width;
var array = [];

for(var i = 1; i < height; i++){
  for(var j = 1; j < width; j++){
    if(i % 2 == 0){
      if(j % 2 == 0){
        array.push(" ");
      }else{
        array.push("#");
      }
    }else{
      if(j % 2 == 0){
        array.push("#");
      }else{
        array.push(" ");
      }
    }
  }
  array.push("\n");
}

console.log(array.join(", ").replace(/,/g, ''));
*/

/*
//functions to print the 3 squares using calls to functions within functions
function square(x){
  return x * x;
}

function printSquares(x, y, z){
  console.log(square(x));
  console.log(square(y));
  console.log(square(z));
}

printSquares(3, 5, 9);
*/

/*
//testing object creation and abstraction
var wereSquirrel = {
  activities: ["work", "television", "college", "meals"],
  wolf: true
};

console.log(wereSquirrel.activities[0]);
*/
