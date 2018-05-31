// When the deck is clicked this function initiates the animations used to make it shuffle
// Then proceeds to fade out the cards and call the function to render the card selection html

$(document).ready(function(){
  $( "div.stackedDeck" ).on("click" , ".cheese", function() {
    console.log('deck is clickable');
    for(var i = 0; i < 78; i++) {
      $( "#fallingCard" + [i] *2 ).animate({
        right: 25 + "vw"
      }, 1000 );
      $( "#fallingCard" + [i] *2 ).animate({
        top: "-=" + i * 4 + "px"
      }, 1000 );
    }
    stepOne();
    thisIsStupid();
    console.log(cardShuffleArray);
    $("#shuffleContainer").delay(8400).fadeOut(1500, function(){
      window.location="/choices";
    });
  });
});

//A step in the animation
function stepOne() {
for(var i = 0; i < 78; i++) {
  $( "#fallingCard" + [(i *2) + 1]).animate({
    right: 65 + "vw"
  }, 1000 );
  $( "#fallingCard" + [i *2 + 1] ).animate({
    top: "-=" + i * 4 + "px"
  }, 1000 );
}
};

//function that allows a delay when the animation restacks the cards
function thisIsStupid() {
for( var b = 0; b < 78; b++) {
  do_something(b);
} 
}

//movement of the cards back being stacked in the center of the screen

function do_something(j) {
  setTimeout(function() {
    $("#fallingCard" + cardShuffleArray[j]).animate({
      top: +367 - (j * .5) + 'px',
      right: 44 + "vw",
      zIndex: j
    }, 150);
    $("#fallingCard0").animate({
      top: +367 - (j * .5) + 'px',
      right: 44 + "vw",
      zIndex: j
    }, 150)
  }, 100 *j);
  }




// function do_something(j) {
// setTimeout(function() {
//   $("#fallingCard" + cardShuffleArray[j]).animate({
//     top: +367 - (j * .5) + 'px',
//     right: 44 + "vw",
//     zIndex: j
//   }, 150);
// }, 100 *j);
// }

let cardShuffleArray = Array.from({ length: 79 }, (x, i) => i)
  .filter(x=> x !== 0);

// let cardShuffleArray = Array.from({ length: 78 }, (x, i) => i);

//function that creates a randomly organized number array for the shuffling animation

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
  }

  return array;
}

cardShuffleArray = shuffle(cardShuffleArray);