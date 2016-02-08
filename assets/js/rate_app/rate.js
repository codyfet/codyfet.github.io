var rateApp = rateApp || {}

var appModel = new rateApp.AppModel(multi);

var mainView = new rateApp.MainView({
    model: appModel,
    el: $('.main')
});
mainView.render();

var Router = Backbone.Router.extend({
    routes: {
        "": "openMain",
        "books": "openBooks",
        "films": "openFilms",
        "games": "openGames",
        "dailyfilms": "openDailyFilms",
        "wishlist": "openWishlist"
            // "edit/:index": "editToDo",
            // "delete/:index": "delteToDo"
    },
    'openMain': function() {
        $('.main').html('');
        mainView.render();
    },

    'openFilms': function() {
        $('.main').html('');

        var mainSection = new rateApp.FilmsView({
            model: mainView.model,
            el: $('.main')
        });
        mainSection.render();
    },

    'openBooks': function() {
        $('.main').html('');

        var mainSection = new rateApp.BooksView({
            model: mainView.model,
            el: $('.main')
        });
        mainSection.render();
    },

    'openGames': function() {
        $('.main').html('');

        var mainSection = new rateApp.GamesView({
            model: mainView.model,
            el: $('.main')
        });
        mainSection.render();
    },

    'openDailyFilms': function() {
        $('.main').html('');

        var mainSection = new rateApp.DailyFilmsView({
            model: mainView.model,
            el: $('.main')
        });
        mainSection.render();
    },

    'openWishlist': function() {
        $('.main').html('');

        var mainSection = new rateApp.WishlistView({
            model: mainView.model,
            el: $('.main')
        });
        mainSection.render();
    }

});

var router = new Router();

Backbone.history.start();

function typicalViewDressing() {

    $('.years').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    $(".image_gallery").show();
    $(".main_link").show();
    $("#social").hide();

    $(".lefter").click(function() {
        $('.slick-prev').click();
    })
    $(".righter").click(function() {
        $('.slick-next').click();
    });

    $("#social").removeClass("main_social");
    $("#f").removeClass("main_footer");

}
// omdb
function getMovieInfo(IMDBid) {

    var localStorageFilm = localStorage.getItem(IMDBid);
    console.log("localStorageFilm");
    console.log(localStorageFilm);

    if(localStorageFilm == undefined){

        var urlString = "http://www.omdbapi.com/?i=" + IMDBid + "&plot=short&r=json";
        var result = "";
        return $.ajax({
            url: urlString,
            success: function(data) {
                // console.log("success");
                // console.log(data);
                result = data;
                localStorage.setItem(IMDBid, JSON.stringify(result));
                return result;
            },
            error: function() {
                // console.log("error");
                // console.log(data);
            }
        });

    }
    else {
        result = JSON.parse(localStorageFilm);
        //localStorage.removeItem(IMDBid);
        return result;
    }
}

// tmdb
function getMovieInfoTmdb(IMDBid) {

    // var localStorageFilm = localStorage.getItem(IMDBid);
    // console.log("localStorageFilm");
    // console.log(localStorageFilm);

    //if(localStorageFilm == undefined){

        // TMDB API_KEY
        var API_KEY = "37662c76ffc19e5cd1b95f37d77155fc";

        var urlString = "https://api.themoviedb.org/3/find/" + IMDBid + "?external_source=imdb_id&api_key=" + API_KEY;
        var result = "";
        return $.ajax({
            url: urlString,
            success: function(data) {
                console.log("success");
                console.log(data);
                result = data.movie_results[0];
                //localStorage.setItem(IMDBid, JSON.stringify(result));
                return result;
            },
            error: function() {
                // console.log("error");
                // console.log(data);
            }
        });

    //}
    // else {
    //     result = JSON.parse(localStorageFilm);
    //     //localStorage.removeItem(IMDBid);
    //     return result;
    // }
}

//tmdb
function getRequestTokenTmdb(){
    // TMDB API_KEY
    var API_KEY = "37662c76ffc19e5cd1b95f37d77155fc";

    var urlString = "https://api.themoviedb.org/3/authentication/token/new?api_key=" + API_KEY;
    var request_token = "";
    return $.ajax({
        url: urlString,
        success: function(data) {
            // console.log("success token request");
            // console.log(data);
            // request_token = data.request_token;
            // return request_token;
        },
        error: function() {
            // console.log("error");
            // console.log(data);
        }
    });
}

//tmdb
function askPermissionTmdb(request_token){

    // TMDB API_KEY
    var API_KEY = "37662c76ffc19e5cd1b95f37d77155fc";

    var urlString = "https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=" + API_KEY + "&request_token=" + request_token + "&username=codyfet&password=.gb.gb30"
    //var request_token = "";
    return $.ajax({
        url: urlString,
        success: function(data) {
            // console.log("success token request");
            // console.log(data);
            // request_token = data.request_token;
            // return request_token;
        },
        error: function() {
            // console.log("error");
            // console.log(data);
        }
    });
}

//tmdb
function getSessionId(request_token){

    // TMDB API_KEY
    var API_KEY = "37662c76ffc19e5cd1b95f37d77155fc";

    var urlString = "https://api.themoviedb.org/3/authentication/session/new?api_key=" + API_KEY + "&request_token=" + request_token;
    var session_id = "";
    return $.ajax({
        url: urlString,
        success: function(data) {
            // console.log("success session request");
            // console.log(data);
            // request_token = data.request_token;
            // return request_token;
        },
        error: function() {
            // console.log("error");
            // console.log(data);
        }
    });

}

function createListTmdb(session_id){

    // TMDB API_KEY
    var API_KEY = "37662c76ffc19e5cd1b95f37d77155fc";

    var urlString = "https://api.themoviedb.org/3/list?api_key=" + API_KEY + "&session_id=" + session_id;
    var session_id = "";
    return $.ajax({
        url: urlString,
        type: "POST",
        dataType: "json",
        contentType: "application/json",
        data: "{'name':'MyFilms','description':'Best films for all years'}",
        success: function(data) {
            console.log("success create list");
            console.log(data);
            // request_token = data.request_token;
            // return request_token;
        },
        error: function() {
            // console.log("error");
            // console.log(data);
        }
    });

}

function getInfoAboutListTmdb(list_id){

    // TMDB API_KEY
    var API_KEY = "37662c76ffc19e5cd1b95f37d77155fc";

    var urlString = "http://api.themoviedb.org/3/list/" + list_id + "?api_key=" + API_KEY;

    return $.ajax({
        url: urlString,
        success: function(data) {
            console.log("success get list request");
            console.log(data);
            // request_token = data.request_token;
            // return request_token;
        },
        error: function() {
            // console.log("error");
            // console.log(data);
        }
    });

}

function addMovieToList(list_id, session_id, tmdbId){

    // TMDB API_KEY
    var API_KEY = "37662c76ffc19e5cd1b95f37d77155fc";
    //5697c23f7536a13bcc00004e

    var urlString = "http://api.themoviedb.org/3/list/" + list_id + "/add_item?api_key=" + API_KEY + "&session_id=" + session_id;
    var session_id = "";
    return $.ajax({
        url: urlString,
        type: "POST",
        dataType: "json",
        contentType: "application/json",
        data: "{'media_id':'" + tmdbId + "'}",
        success: function(data) {
            console.log("success add mobie to list");
            console.log(data);
        },
        error: function() {
            // console.log("error");
            // console.log(data);
        }
    });

}

function removieMovieFromList(list_id, session_id, tmdbId){

    // TMDB API_KEY
    var API_KEY = "37662c76ffc19e5cd1b95f37d77155fc";

    var urlString = "http://api.themoviedb.org/3/list/" + list_id + "/remove_item?api_key=" + API_KEY + "&session_id=" + session_id;
    return $.ajax({
        url: urlString,
        type: "POST",
        dataType: "json",
        contentType: "application/json",
        data: "{'media_id':'" + tmdbId + "'}",
        success: function(data) {
            console.log("success remove film from list");
            console.log(data);
        },
        error: function() {
            // console.log("error");
            // console.log(data);
        }
    });

}

function findMovieByImdbId(imdbId){

    // TMDB API_KEY
    var API_KEY = "37662c76ffc19e5cd1b95f37d77155fc";

    var urlString = "https://api.themoviedb.org/3/find/" + imdbId + "?external_source=imdb_id&api_key=" + API_KEY;
    //var session_id = "";
    return $.ajax({
        url: urlString,
        success: function(data) {
            console.log("success find movie ");
            console.log(imdbId);
            console.log(data);
            if(data.movie_results.length!=0){
                console.log(data.movie_results[0].title);
                console.log(data.movie_results[0].id);
            }

            // request_token = data.request_token;
            // return request_token;
        },
        error: function() {
            // console.log("error");
            // console.log(data);
        }
    });

}

function getGameInfo(gameId) {

    var result = "";

    var localStorageGame = localStorage.getItem(gameId);
    console.log("localStorageGame");
    console.log(localStorageGame);

    if(localStorageGame == undefined){

        var api_key = "7e50e7a3d98c9a9e449fada9dc8b5da92e67d9d4";
        var urlString = "http://www.giantbomb.com/api/game/" + gameId + "/?api_key=" + api_key + "&format=jsonp&field_list=id,name,image";
        return $.ajax({
            url: urlString,
            type: "GET",
            dataType: "jsonp",
            crossDomain: true,
            jsonp: "json_callback",
            success: function(data) {
                console.log("success game data");
                console.log(data);
                localStorage.setItem(gameId, JSON.stringify(data.results));
                result = data;
                return result;
            },
            error: function() {
                // console.log("error");
                // console.log(data);
            }
        });

    }
    else {
        result = JSON.parse(localStorageGame);
        localStorage.removeItem(gameId);
        return result;
    }

}