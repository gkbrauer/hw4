//****************************************
// NYT Most Popular
//****************************************

// var url = "https://api.nytimes.com/svc/mostpopular/v2/mostshared//.json";
// url += '?' + $.param({
//   'api-key': "344cfddf5721456dbeed11026b8340b7"
// });
// $.ajax({
//   url: url,
//   method: 'GET',
// }).done(function(result) {
//   console.log(result);
// }).fail(function(err) {
//   throw err;
// });

  $(function() {
    let apiKey = "344cfddf5721456dbeed11026b8340b7"; // don't steal it please
    let url = "https://api.nytimes.com/svc/mostpopular/v2/mostshared//.json?api-key=" + apiKey;
    $.get(url, function(data) {
      console.log(data); // have a look at what "data" is in the browser console
      $(".row").empty();
      for (let i=0; i<data.results.length; i++) {
        let movie = data.results[i];
        let html = '<div class="col-4">';
        html = html + '<div class="card">';
        html = html + '<img class="card-img-top" src="' + movie.multimedia.src + '">';
        html = html + '<div class="card-body">';
        html = html + '<h4 class="card-title">' + movie.display_title + '</h4>';
        html = html + '<p class="card-text">' + movie.summary_short + '</p>';
        html = html + '</div></div></div>';
        $(".row").append(html);
      }
      $(".row").fadeIn(2000);
    });
  });




////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANY CODE BEYOND THIS POINT
////////////////////////////////////////////////////////////

let convertToJSON = function(rawData) { return rawData.json(); }
let displayError = function(error) { console.debug(error); }
