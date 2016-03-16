var templates = {};
templates.movie = [

//   "<img src ='<%= movieImg %>'>",
//   "<h1><%= title %></h1>",
//   "<h4><%= director %></h4>",
//   "<p><%= desc %></p>",
//   "<button class='delete'>delete</button>"
//
// ].join('');
"<img style='' src='<%= movieImg %>'>",
   "<h1><%= title %></h1>",
   "<h4><%= director %></h4>",
   "<p><%= desc %></p>",
   "<button class='btn-btn-danger delete'>delete</button>",
   "<button class='btn btn-warning showEdit'>Edit</button>",
   "<div class='editSection'>",
     '<div class="form-group">',
   "<input class='form-control editTitle' type='text' value='<%= title %>'>",
   "</div>",
   '<div class="form-group">',
   "<input class='form-control editDirector' type='text' value='<%= director %>'>",
   "</div>",
     '<div class="form-group">',
   "<input class='form-control editMovieImg' type='text' value='<%= movieImg %>'>",
   "</div>",
     '<div class="form-group">',
   "<input class='form-control editDesc' type='text' value='<%= desc %>'>",
   "</div>",
   "<button class='editMovie'>Edit Movie</button>",
   "</div>"

 ].join('');


   templates.addMovie = [
     '<form class="">',
     '<input type="text" name="image" value="" placeholder="Image">',
     '<input type="text" name="title" value="" placeholder="Title">',
     '<input type="text" name="director" value="" placeholder="Director">',
     '<input type="text" name="desc" value="" placeholder="Description">',
     "<button class='submit'>Submit</button>",
     '</form>'
   ].join('');






 //   '<form class="addMovie">',
 //     '<div class="form-group">',
 //       '<label for="title">Title</label>',
 //     '<input class="form-control" type="text" name="title" placeholder="title" value="">',
 //   '</div>',
 //     '<div class="form-group">',
 //       '<label for="director">Director</label>',
 //     '<input class="form-control" type="text" name="director" placeholder="director" value="">',
 //   '</div>',
 //   '<div class="form-group">',
 //     '<label for="movieImg">Movie Cover</label>',
 //     '<input class="form-control" type="text" name="movieImg" placeholder="Movie Image URL" value="">',
 //   '</div>',
 //   '<div class="form-group">',
 // '<label for="desc">Description</label>',
 //     '<textarea class="form-control" name="desc" rows="8" cols="40" placeholder="Description"></textarea>',
 //   '</div>',
 //     '<button class="btn btn-success" type="submit" name="Submit">Add Book</button>',
 //   '</form>'
 // ].join('');
