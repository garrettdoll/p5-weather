








// Docs at http://simpleweatherjs.com
$(document).ready(function() {



  $.simpleWeather({
    location: 'Spokane, WA',
    woeid: '',
    unit: 'f',



    //If can get the weather
    success: function(weather) {

      html = '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
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





// store names of CSS classes in an array
var bgPat = ['bg0', 'bg1', 'bg2', 'bg3', 'bg4'];

// random number function
var getRand = function(limit) {
  
  //var limit = 3;
  var numRand = Math.floor(Math.random()*limit);
  console.log(numRand);
  return numRand;

};

var bgRand = getRand(5);

// on page reload a number between 0-to-2
// concatenate 'bg' plus number between 0-to-2

$('body').addClass(bgPat[bgRand]);



