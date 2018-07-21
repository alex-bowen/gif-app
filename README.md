# Giphy-App: GIFSPLOSION!
This gif app was created by Alex Bowen. It uses the GIPHY API to generate gifs on-click.

### The user is presented with an empty div and some pre-existing buttons.
        var movies = ["Predator", "Die Hard", "The Terminator", "Terminator 2: Judgement Day", "John Wick", "Rambo", "Point Break",    "Commando", "The Fifth Element", "Dirty Harry", "The Matrix"];

        // places buttons in the #buttons div from the movies array
        function addButtons() {

            $("#buttons").empty();

            for (var i = 0; i < movies.length; i++) {
                var a = $("<button>");
                a.addClass("gif-button");
                a.addClass("btn btn-outline-danger btn-sm")
                a.attr("data-title", movies[i]);
                a.text(movies[i]);
                $("#buttons").append(a);
            }
        }

        addButtons();


### The user may add buttons to the page. 

          $("#submit-name").on("click", function () {
              event.preventDefault();

              userAddition = $("#movie-input").val().trim();
              movies.push(userAddition);
              addButtons();
          });
       
       
### When the user clicks on a button, a call is made to the GIPHY API. The gifs are then placed on the page.
          
          function renderGifs() {
              $("#gif-section").empty();
              console.log("CLICKED!");
              var movieToShow = $(this).attr("data-title");

              var APIkey = "WYj2KIdnQo3Dny9VKDPYkfaMqgeVt45Q";

              var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + movieToShow + "&api_key=" + APIkey + "&limit=5";

              $.ajax({
                  url: queryURL,
                  method: "GET"
              })
                  .then(function (response) {
                      console.log(queryURL);
                      console.log(response);

                      var results = response.data;

                      for (var i = 0; i < results.length; i++) {

                          if (results[i].rating !== "r") {
                              var gifDiv = $("<div>");
                              var actionGif = $("<img>");

                              var rating = results[i].rating;
                              var ratingP = $("<p>").text("Rating: " + rating);


                              actionGif.attr("src", results[i].images.fixed_height_still.url);
                              actionGif.attr("id", "click-gif");
                              actionGif.attr("data-still", results[i].images.fixed_height_still.url);
                              actionGif.attr("data-animate", results[i].images.fixed_height.url);
                              actionGif.attr("data-state", "still");

                              actionGif.addClass("gif-styling");
                              // actionGif.addClass("gif-button");


                              ratingP.addClass("rating-styling");

                              gifDiv.append(ratingP);
                              gifDiv.append(actionGif);

                              $("#gif-section").prepend(gifDiv);
                          }
                      }
                  });
          }
