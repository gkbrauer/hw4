//////////////////////////////////////////
//----------- INDICATES CODE SECTION HEADER
//NOTES       INDICATES NOTES FROM GRETA


//-----------------------------Updates the page with Paris, then Current Weather----------------------
let updateWidget = function(data) {
      console.log("Got weather data: ", data)
          //can declare a let for WeatherIcon (see next line) or can just drop what weatherIcon is equal to in the url builder below
          //let weatherIcon = data.weather[0]
      let iconPath = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png"
         console.log("The Icon URL is: ", iconPath)
         console.log("name:", data.name)
      $("img").attr("src", iconPath)
      $(".card-text").html("It's " + data.main.temp + " degrees outside!!!")
      $(".card-title").html(data.name)
         }
  // }
  // HINT:
  // Weather icons are provided for you. Sample URL: http://openweathermap.org/img/w/01d.png
  // The very last part ('01d.png') should be obtained from the weather information.

//NOTES  let link = jQuery("#get_forecast")
//NOTES link.on("click", updateWidget);

//----------------------------Hardcoded Paris Weather-----------------------------------
let getWeather = function(data) {
  window.weatherInfo = data
  let latitude = '48.8566';
  let longitude = '2.3522';
     console.log("lat is:", latitude)
     console.log("long is:", longitude)
  let apiKey = 'c14935fef180c506eb93f85384f23879'; // REPLACE THIS VALUE with your own key.
  let weatherServiceURL = 'https://api.openweathermap.org/data/2.5/weather?'
  weatherServiceURL += 'lat=' + latitude
  weatherServiceURL += '&lon=' + longitude
  weatherServiceURL +='&appid=' + apiKey + '&units=imperial'

  fetch(weatherServiceURL).then(convertToJSON).then(updateWidget).catch(displayError);
}
//---------------------On Click Event for Paris Weather ------------------------
//NOTES calls click event and getWeather function
let Parislink = jQuery("#get_forecast")
Parislink.on("click", getWeather);
//NOTES alternative to the above is to just include the let statement in the 2nd line
//NOTES jQuery("#get_forecast").on("click", getWeather)

//-----------------------Current Weather--------------------------------------
let getCurrentWeather = function(data) {
  let latitude = data.coords.latitude.toFixed(4);
  let longitude = data.coords.longitude.toFixed(4);
    console.log("name:", data.name)
    console.log("lat is:", latitude)
    console.log("long is:", longitude)
    console.log("location is: ", data.name)
  let apiKey = 'c14935fef180c506eb93f85384f23879'; // REPLACE THIS VALUE with your own key.
  let weatherServiceURL = 'https://api.openweathermap.org/data/2.5/weather?'
  weatherServiceURL += 'lat=' + latitude
  weatherServiceURL += '&lon=' + longitude
  weatherServiceURL +='&appid=' + apiKey + '&units=imperial'

  fetch(weatherServiceURL).then(convertToJSON).then(updateWidget).catch(displayError);
}

//------------------Current Location info pull from webpage ------------------
//NOTES gets current location based on class example, calls getCurrentWeather function
let handlePosition = function(event) {
console.log ("begin...")
event.preventDefault();
navigator.geolocation.getCurrentPosition(getCurrentWeather)
console.log ("end...")
}

//-------------------------On Click Event ------------------------
//NOTES calls current location click event, calls handlePostion function
let link = jQuery("#get_forecast")
link.on("click", handlePosition);
//NOTES alternative to the above is to include the let declaration in the 2nd line
//NOTES jQuery("#get_forecast").on("click", getWeather)


//ESPN//



////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANY CODE BEYOND THIS POINT
////////////////////////////////////////////////////////////

let convertToJSON = function(rawData) { return rawData.json(); }
let displayError = function(error) { console.debug(error); }
