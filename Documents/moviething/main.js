var templates = {};
templates.movie = [
  "<article data-id='<%= movies.id %>'>",
  "<img src ='<%= movies.movieImg %>'>",
  "<h1><%= movies.title %></h1>",
  "<h4><%= movies.director %></h4>",
  "<p><%= movies.desc %></p>",
  "<button class='delete'>delete</button>",
  "</article>"
].join('');



$(document).ready(function () {

page.init();

});

var movieCollection = new movieCollection(movies);

var page = {

  init:function () {
    page.addAll();
    page.initEvents();
  },

movieTmpl: _.template(templates.movie),
initEvents: function() {
  $('.container').on('click', '.delete', function(evt) {
    evt.preventDefault();
    var movieId = $(this).closest('article').data('id');
    movieCollection.remove(movieId);
    page.addAll();
  });
  $('.container').on('click','img', page.logSelectedModel);
},
logSelectedModel: function(evt) {
  evt.preventDefault();
  var movieId = $(this).closest('article').data('id');
  movieCollection.get(movieId).set({title: 'you got served'});
},
addMovie: function (el) {
  el.attributes.id = el.cid;
  var markup = page.movieTmpl({movies: el.toJSON()});
  $('.container').append(markup);
},
addAll: function () {
  $('.container').html('');
  _.each(movieCollection.models, page.addMovie);
  }
}
$('.button').on('click', function (event) {
  event.preventDefault();
  var newMovie = {

    image:$('input[name="image"]').val(),
    title:$('input[name="name"]').val(),
    director:$('input[name="director"]').val(),
    desc:$('input[name="desc"]').val(),
    }


var myMovie = new MovieModel(newMovie);
movieCollection.add(myMovie);
page.addAll();
})
