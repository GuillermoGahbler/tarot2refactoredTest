//This creates the deck with a random value between 1-78 assigne to it
//Animates the deck with its offset
let cardArray = Array.from({ length: 78 }, (x, i) => i);

//On Load of the body element this function starts
//creates 78 new div elements and set a marginRight of -107px
//This creates the effect of cards sliding over

    function deployCardsOnLoad(){
        $("#cards").html('');
        for(var i = 1; i <= cardArray.length; i++) {
            $('#cards').prepend('<div class="card" value="' + cardArray[i] + '"></div>');
        }
        $("#cards .card").delay(1000).animate({marginRight:"-107px"},2000,"swing");
        return false;
    };
    
//This function creates an Array that is 78 units long
//The array containes the numbers 1-78 in a radomly generated order
//The values in the array are used to provide a value to the divs produced in the above function

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

cardArray = shuffle(cardArray);













