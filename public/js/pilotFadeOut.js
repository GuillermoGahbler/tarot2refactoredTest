//Fades out the initial homepage and initiates the drop of the tarot card deck

$( "#catagorySubmit" ).click(function() {
  $( "#pilotFadeOut" ).fadeOut( "slow", function dropDeck(){
    for (i = 0; i < 78; i++) {
        var $element = $('<div class="cheese" id="fallingCard' + [i] + '">');
        $element.css({
          zIndex: i,
          top: -109 - (i * 50) + 'px'
        })
        $('.stackedDeck').prepend($element)
        $element.animate({
          top: +367 - (i * .5) + 'px',
        }, 1500, 'linear')
      };
      $( "#shuffleMe" ).fadeIn( "slow" );
});
});


