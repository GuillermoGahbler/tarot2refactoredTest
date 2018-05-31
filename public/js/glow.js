//this adds the class 'glow' to the card that is picked, moving it up slightly and making it glow
//Adds card data to array that will be
//calls the functions that would proceed after the end of each step

$(document).ready(function(){
    $('div#cards').on("click", ".card", function(){
        if(allCardData.length < 10 && this.id !== 'glow') {
        var status = $(this).attr('value');
        $(this).attr('id', 'glow');
        console.log(status);
        allCardData.push(status);
        allCardsPicked();
        getValue();
        }
    });
});

//Function that happens once all 10 cards are picked by the user
//fades out selected cards and renders the spread

function allCardsPicked() {
    if(allCardData.length === 10) {
        localStorage.clear();
        localStorage.setItem("array", JSON.stringify(allCardData));
        $( "#cards" ).fadeOut( 1600, function(){
            window.location="/spread";
        } );
    };
};



var allCardData = [];

//function that grabs the value associated with a cards and moves it to the allCardData array when clicked

function getValue(){
    let cardValue = $(this).attr('value');
    if (this.class === 'glow') {
        alert("You picked this already.  Please select another card.");
        return;
    }
    else {
        cardValue = parseInt(cardValue) + 1;
        console.log(cardValue);
        console.log(allCardData);
        
    }

}