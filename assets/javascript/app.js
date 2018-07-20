// API KEY: WYj2KIdnQo3Dny9VKDPYkfaMqgeVt45Q

var movies = ["Predator", "Die Hard", "The Terminator", "Terminator 2: Judgement Day", "Lethal Weapon", "John Wick", "First Blood", "Point Break", "Commando", "The Fifth Element", "Dirty Harry", "Hot Fuzz", "The Matrix"];

/*
render buttons from the array 
    for (var i=0; i<movies.length; i++) {
        ~ create a button that gets its name of the current index
    }

render additional buttons on click
    $("#---").on("click", function(){

     })

fills div with gifs from API on click
*/

function firstButtons() {

    $("#buttons").empty();

    for (var i = 0; i < movies.length; i++) {
        var a = $("<button>");
        a.addClass("gif-button");
        a.addClass("btn btn-outline-danger btn-sm")
        a.attr("data-name", movies[i]);
        a.text(movies[i]);
        $("#buttons").append(a);
    }

}

firstButtons();

$("#submit-name").on("click", function(){
    

})