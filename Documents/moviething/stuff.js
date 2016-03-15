$('.button').on('click', function (event) {
  event.preventDefault();
  var newMovie = {

    image:$('input[name="image"]').val();
    title:$('input[name="name"]').val();
    director:$('input[name="director"]').val();
    descrition:$('input[name="desc"]').val();
    }
}

var myMovie = new MovieModel(newMovie);
movieCollection.add(myMovie);
page.addAll();

});
