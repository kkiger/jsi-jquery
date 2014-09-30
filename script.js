// define article, header, paragraph
// something that listens for when the click happens
// something that will change article/header/paragraph
// something that resets?

var newArticle = $('<article>');
var header = $('<h1>').text('My Second Blog Post');
var paragraph = $('<p>')
  .text('This is a blog post about really awesome stuff I\'ve done in ' +
    'JavaScript.');


// don't do (bad innerHTML stuff): $( "<p id='test'>My <em>new</em> text</p>" )
// do it this way: $( "<img />" ) or $( "<img>" ), $( "<a></a>" ) or $( "<a>" )
