//Same as script in marsTestData.html.
//File communicates with members.html!!!

$(document).ready(() => {
  //NASA API key:
  // var APIKey = "HWIQtryDmQ136bRdLzdriQL1mIeaKvEuJfckD6Sb";
  var queryURL = "https://api.nasa.gov/insight_weather/?api_key=HWIQtryDmQ136bRdLzdriQL1mIeaKvEuJfckD6Sb&feedtype=json&ver=1.0+";

  // Here we run our AJAX call to the OpenWeatherMap API
  $.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function (response) {

      // console.log(queryURL);
      // console.log(response);
      // console.log(response.sol_keys.length);
      
      for (var i = 0; i < response.sol_keys.length; i++) {
        var solNum = response.sol_keys[i];
        var solObject = response[solNum];
        // console.log(solObject);

        $(".city").html("<h1>" + " Mars Day: " + response.sol_keys[i] + "</h1>");
        console.log("Mars Day Number: ", response.sol_keys[i]);

        // $(".city").html("<h1>" + " Mars Day: " + solObject[i] + "</h1>");
        // console.log("Mars Day Number: ", solObject[i]);

        //Will work with response[548] but not with [i] or any of the above variables
        $(".wind").text("Date and Time: " + response[548].First_UTC);
        console.log("Date, Time: ", response[548].First_UTC);

      }
      //will only show correct current day with [0] in sol_keys
      // $(".city").html("<h1>" + " Mars Day: " + response.sol_keys[i] + "</h1>");
      // console.log("Mars Day Number: ", response.sol_keys[i]);

      // //will only show correct data with response[548] or current Mars day number
      // $(".wind").text("Date and Time: " + response[548].First_UTC);
      // console.log("Date, Time: ", response[548].First_UTC);

      // $(".humidity").text("High Temperature: " + response[548].AT.mn);
      // console.log("Av Temp: ", response[548].AT.mn);

      // $(".humidity").text("Average Temperature: " + response[548].AT.av);
      // console.log("Av Temp: ", response[548].AT.av);
    });

      // Log the data in the console as well
      // console.log("Wind Speed: " + response.wind.speed);
      // console.log("Humidity: " + response.main.humidity);
      // console.log("Temperature (F): " + tempF);
    // );
});
