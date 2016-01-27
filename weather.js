$(function() {
  var handleWeatherResponse = function(data) {
    console.log(data);

    // Put your code here to change the "markup" variable.
    // Don't change any other code in this file. You will be sad.

    var markup = "<h1>Today's Weather </h1>" +
    "<ul> <li> Temparature: " + data.currently.apparentTemperature + " degrees </li>" +
    "<li> Chance of rain: " + data.currently.precipProbability + "% </li>" +
    "<li> Humidity: " + data.currently.humidity + "% </li> </ul>" +

    "<h2> 3-day forecast </h2>" +
    "<ul> <li> Tomorrow: " + data.daily.data[0].apparentTemperatureMin + " degrees min. to " + data.daily.data[0].apparentTemperatureMax + " degrees max </li>" +
    "<li> Next day: " + data.daily.data[1].apparentTemperatureMin + " degrees min. to " + data.daily.data[1].apparentTemperatureMax + " degrees max </li>" +
    "<li> Day after next: " + data.daily.data[2].apparentTemperatureMin + " degrees min. to " + data.daily.data[2].apparentTemperatureMax + " degrees max </li> </ul>"
      ;

    // End of your code

    $('.weather-report').html(markup);
  }
  $('a.get-the-weather').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'https://api.forecast.io/forecast/6dbe98374cc5b8f9ea63d5ec73de9c04/42.056459,-87.675267?callback=?',
      dataType: 'jsonp',
      contentType: "application/json",
      success: handleWeatherResponse
    });
  });
});
