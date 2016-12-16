var API_KEY = "5cb925b0a3d7c96f4857f4b56313171e";
var latitude = 0;
var longitude = 0;
var currentTempInF = 0;
var currentTempInC = 0;

$(document).ready(function(){

  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(success);
  }else{
    $('#currentLocation').html('Geolocation Not Permitted');
  }

  function success(position){
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

    updateCurrentPosition(latitude, longitude);

  }

  $(function(){
    $('#changeTempUnit').click(function(){
      $(this).text(function(i, text){
        if(text == "Celsius"){
          $('#currentTemp').html(currentTempInF);
        }else{
          $('#currentTemp').html(currentTempInC);
        }
        return text === "Celsius" ? "Fahrenheit" : "Celsius";
      })
    });
  })

});

function updateCurrentPosition(latitude, longitude){
  $.getJSON('http://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&units=imperial&APPID=' + API_KEY, function(weatherData){
    var currentLocation = weatherData.name;
    var currentWeather = weatherData.weather[0].main;
    currentTempInF = weatherData.main.temp + 'F';
    var celsius  = (weatherData.main.temp - 32) / 1.8;
    currentTempInC = celsius.toFixed(2) + 'C';
    var currentHumidity = weatherData.main.humidity + '%';
    var iconCode = weatherData.weather[0].icon;
    var currentIconExtension = iconCode + '.png';

    //update html
    $('#currentLocation').html(currentLocation);
    $('#currentWeather').html(currentWeather);
    $('#currentTemp').html(currentTempInF);
    $('#currentHumidity').html(currentHumidity);

    //update icon and background
    updateBackground(iconCode);
    updateIcon(currentIconExtension);
  });

}

function updateIcon(currentIconExtension){
  $('#weatherIcon').prepend('<img src="http://openweathermap.org/img/w/' + currentIconExtension + '" />');
}

//changes the background image depending on weather condition and time of day
function updateBackground(iconCode){
  switch(iconCode){
    //clear sky day
    case '01d':
      $('body').css('background-image', 'url(https://static.pexels.com/photos/109121/pexels-photo-109121.jpeg)');
      break;
    //clear sky night
    case '01n':
      $('body').css('background-image', 'url(https://static.pexels.com/photos/32237/pexels-photo.jpg)');
      break;
    //few clouds day
    case '02d':
      $('body').css('background-image', 'url(https://static.pexels.com/photos/53594/blue-clouds-day-fluffy-53594.jpeg)');
      break;
    //few clouds night
    case '02n':
      $('body').css('background-image', 'url(https://static.pexels.com/photos/239107/pexels-photo-239107.jpeg)');
      break;
    //scattered clouds day
    case '03d':
      $('body').css('background-image', 'url(https://static.pexels.com/photos/1780/landscape-nature-clouds-cloudy.jpg)');
      break;
    //scattered clouds night
    case '03n':
      $('body').css('background-image', 'url(https://static.pexels.com/photos/30376/pexels-photo-30376.jpg)');
      break;
    //broken clouds day
    case '04d':
      $('body').css('background-image', 'url(https://static.pexels.com/photos/246328/pexels-photo-246328.jpeg)');
      break;
    //broken clouds night
    case '04n':
      $('body').css('background-image', 'url(https://static.pexels.com/photos/155534/pexels-photo-155534.jpeg)');
      break;
    //shower rain day
    case '09d':
      $('body').css('background-image', 'url(https://static.pexels.com/photos/251313/pexels-photo-251313.jpeg)');
      break;
    //shower rain night
    case '09n':
      $('body').css('background-image', 'url(https://static.pexels.com/photos/1020/lights-night-glass-rainy.jpg)');
      break;
    //rain day
    case '10d':
      $('body').css('background-image', 'url(https://static.pexels.com/photos/243971/pexels-photo-243971.jpeg)');
      break;
    //rain night
    case '10n':
      $('body').css('background-image', 'url(https://static.pexels.com/photos/119569/pexels-photo-119569.jpeg)');
      break;
    //thunderstorm day
    case '11d':
      $('body').css('background-image', 'url(https://static.pexels.com/photos/53459/lightning-storm-weather-sky-53459.jpeg)');
      break;
    //thunderstorm night
    case '11n':
      $('body').css('background-image', 'url(https://static.pexels.com/photos/53459/lightning-storm-weather-sky-53459.jpeg)');
      break;
    //snow day
    case '13d':
      $('body').css('background-image', 'url(https://static.pexels.com/photos/202105/pexels-photo-202105.jpeg)'); //correct image
      break;
    //snow night
    case '13n':
      $('body').css('background-image', 'url(https://static.pexels.com/photos/24639/pexels-photo-24639.jpg)');
      break;
    //mist day
    case '50d':
      $('body').css('background-image', 'url(https://static.pexels.com/photos/167699/pexels-photo-167699.jpeg)'); //correct image
      break;
    //mist night
      $('body').css('background-image', 'url(https://static.pexels.com/photos/169758/pexels-photo-169758.jpeg)');
      break;
    //default
    default:
      $('body').css('background-image', 'url(https://static.pexels.com/photos/202105/pexels-photo-202105.jpeg)');
  }
}
