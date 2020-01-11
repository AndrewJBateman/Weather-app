 /*Obtain IP address from API*/ 
$.getJSON("https://api.ipify.org?format=jsonp&callback=?", function(json) {
  $("#ipAddress").append(json.ip);
});

$.getJSON("https://ipapi.co/json/", function(data){
    $.each(data, function(key, value) {});
    lat = data.latitude;
    lon = data.longitude;

    $("#latitude").append(lat);
    $("#longitude").append(lon);
   
  /*Get API weather data using the latitude and longitude above*/
  $.getJSON("https://fcc-weather-api.glitch.me/api/current?lat=" + data.latitude + "&lon=" + data.longitude, function(weatherData) {
    $.each(weatherData, function(key, value) {});
    
    /*Data for weather display*/
    $('#city').append(weatherData.name);
    $('#country').append(weatherData.sys.country);
    $('#weatherMain').append(weatherData.weather[0].main);
    
    /*function to show an image corresponding to the weather*/
    var icon = weatherData.weather[0].icon; 
    $("img").attr({src: icon});//end of attr function
    
    /*Temperaure calculations to round JSON data and convert to Farenheit*/
    var tempC = Math.round(weatherData.main.temp*10)/10;
    var tempF = Math.round(tempC*9/5 + 32);
    
    /*data for detail display*/
    $('#description').append(weatherData.weather[0].description);
    $("#windSpeed").append(weatherData.wind.speed + " km/h");
    $("#pressure").append(weatherData.main.pressure + " hPa");
    $("#humidity").append(weatherData.main.humidity + " %");
    
    $("#temperatureC").html(tempC + " °C");
    var tempSwap = false;
    $("#convert").click(function(){
      if (tempSwap===false){
        $("#temperatureC").html(tempF + " °F");
        tempSwap=true;
      } 
      else {
        $("#temperatureC").html(tempC + " °C");
        tempSwap=false;
      }
    })/*end of convert function*/
    
    /*change background image according to temperature*/
    if(tempC <= 14) 
      $('body').css('background-image', 'url(http://news.images.itv.com/image/file/557015/stream_img.jpg)');

    else if(tempC > 14 && tempC <= 20) 
      $('body').css('background-image', 'url(https://images.unsplash.com/photo-1457461027293-311fd5a4a6d6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=44bde7759d80902f2be36bebbc5f693d&dpr=1&auto=format&fit=crop&w=376&h=251&q=60&cs=tinysrgb)')
    else if(tempC > 20 && tempC <= 25) 
      $('body').css('background-image', 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl20Dd6w0E1YsLiJURWGMb9alVCS7uU6BR0oTSLWSKZTHHkEj_)')
    
    else if(tempC > 25 && tempC <= 34) 
      $('body').css('background-image', 'url(https://i.pinimg.com/736x/3d/b9/c3/3db9c3c0b24412f7262580d14619bfce--phlebotomy-certification-bad-habits.jpg)')
    
    else if(tempC > 34) 
      $('body').css('background-image', 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzGG2Na4_QVqLLenQBjwXIhZkIPgLw7HDrBMzqKdsKw5JzSV2A7g)')
              
  }); //end of weather function
 });//end of document ready function