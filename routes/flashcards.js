var express = require('express');
var router = express.Router();
var flashcards = [];

flashcards.push({
  name: 'The Big Short',
  front: 'Four denizens in the world of high-finance predict the credit and housing bubble collapse of the mid-2000s, and decide to take on the big banks for their greed and lack of foresight.',
  back: 'Biography, Drama',
  picture: null
});

flashcards.push({
  name: 'The Revenant',
  front: 'A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.',
  back: 'Adventure, Drama, Thriller',
  picture: null
});

router.get('/', function(req, res) {
  res.render('flashcards/index', {
    title: 'My Flashcards',
    flashcards: flashcards
  });
});

module.exports = router;
