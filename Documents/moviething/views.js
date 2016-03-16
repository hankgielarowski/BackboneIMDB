var CreateMovieView=Backbone.View.extend({
  el: '.createNewMovie',
  template: _.template(templates.addMovie),
  events: {
    'click .submit': 'addMovie'
  },
  addMovie: function (event) {
    event.preventDefault();
    this.model.set({
      title: this.$el.find('input[name="title"]').val(),
      desc: this.$el.find('textarea[name="desc"]').val(),
      director: this.$el.find('input[name="director"]').val(),
      movieImg: this.$el.find('input[name="movieImg"]').val(),
    });
    this.$el.find('input').val('');
    this.$el.find('textarea').val('');
    this.collection.add(this.model);
    console.log(this.collection.length);
    this.model = new MovieModel({});
  },
  initialize: function () {
    if(!this.model) {
      this.model = new MovieModel({});
    }
    this.render();
  },
  render: function () {
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    return this;
  }
});

var MovieView = Backbone.View.extend({
  tagName: 'article',
  template: _.template(templates.movie),
  events: {
  'click .delete': 'deleteMovie',
  'click .showEdit': 'toggleEdit',
  'click .editMovie': 'editMovie'
},
editMovie: function(event) {
  event.preventDefault();

  this.model.set({
    title: this.$el.find('.editTitle').val(),
    director: this.$el.find('.editDirector').val(),
    movieImg: this.$el.find('.editMovieImg').val(),
    desc: this.$el.find('.editDesc').val()
  });
},

toggleEdit: function() {
  this.$el.find('.editSection').toggleClass('editSection');
},
deleteMovie: function(){
  this.model.destroy();
},

  initialize: function(){
    this.listenTo(this.model, 'change', this.render);
  },
  render: function(){
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    return this;
  }
});
var CollectionView = Backbone.View.extend({
  el: '.container',
  initialize: function(){
    this.addAll();
    this.listenTo(this.collection, 'update', this.addAll);
  },
  addOne: function (el) {
    var modelView = new MovieView({model: el});
    this.$el.append(modelView.render().el);
  },
  addAll: function () {
    $('.container').html('');
    _.each(this.collection.models, this.addOne, this);
  }
});
