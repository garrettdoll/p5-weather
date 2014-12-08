





// Docs at http://simpleweatherjs.com
$(document).ready(function() {







  $.simpleWeather({
    location: 'Spokane, WA',
    woeid: '',
    unit: 'f',



    //If can get the weather
    success: function(weather) {
      html = '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
      html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      html += '<li class="currently">'+weather.currently+'</li>';
      html += '<li>'+weather.wind.direction+' '+weather.wind.speed+' '+weather.units.speed+'</li></ul>';



        for(var i=0;i<weather.forecast.length;i++) {
        html += '<p>'+weather.forecast[i].day+': '+weather.forecast[i].high+'</p>';
      }

      //DISPLAY THE WEATHER
      $("#weather").html(html);


    },



    error: function(error) {


      $("#weather").html('<p>'+error+'</p>');


    }
  });
});







$('.ui.button').on('click', function() {
  
  var zip = $('input').val();








// Docs at http://simpleweatherjs.com
$(document).ready(function() {







  $.simpleWeather({
    location: zip,
    woeid: '',
    unit: 'f',



    //If can get the weather
    success: function(weather) {

      html = '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
      html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      html += '<li class="currently">'+weather.currently+'</li>';
      html += '<li>'+weather.wind.direction+' '+weather.wind.speed+' '+weather.units.speed+'</li></ul>';



        for(var i=0;i<weather.forecast.length;i++) {
        html += '<p>'+weather.forecast[i].day+': '+weather.forecast[i].high+'</p>';
      }

      //DISPLAY THE WEATHER
      $("#weather").html(html);


    },



    error: function(error) {


      $("#weather").html('<p>'+error+'</p>');


    }
  });
});

});




