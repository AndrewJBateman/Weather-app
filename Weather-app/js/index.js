$(document).ready(function(){
  
  $.getJSON("https://ipapi.co/json/", function(data){
    
    $("#ipAddress").append(data.ip);
    $("#latitude").append(data.latitude);
    $("#longitude").append(data.longitude);
   
  /*Get API weather data using the latitude and longitude above*/
  $.getJSON("https://fcc-weather-api.glitch.me/api/current?lat=" + data.latitude + "&lon=" + data.longitude, function(weatherData) {
    $.each(weatherData, function(key, value) {});
    /*Data for weather display*/
    $('#city').append(weatherData.name);
    $('#country').append(weatherData.sys.country);
    $('#weatherMain').append(weatherData.weather[0].main);    
    $('#temperatureC').append(weatherData.main.temp);
    
    var icon = weatherData.weather[0].icon; 
    $("img").attr({src: icon});//end of attr function
        
      /*Data for detail display*/
    $('#description').append(weatherData.weather[0].description);
    $("#windSpeed").append(weatherData.wind.speed + "km/h");
    $("#pressure").append(weatherData.main.pressure + "º");
    $("#humidity").append(weatherData.main.humidity + "%");
      
  });//end of IP function
  });//end of weather function

}); //end of document ready function