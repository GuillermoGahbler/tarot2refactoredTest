var toggle = 0;

// function createModal()

//This is will be where you check to ensure that your logic will work.

$(document).on('click', '.spread', function () {


    if (this.id -1 > toggle && toggle === 0) {
        console.log(this.id);
        // alert("You are below Toggle id, and Toggle !== 0.");
        return;
    }
    else if (this.id -1 > toggle) {
        // alert("You are above the Toggle id.");
        return;
    }
    else {
        // alert("Code should function as expected.")
        // console.log(this.id);
        // This is where you'll call the modal funciton to build.  Remember to toggle++ at the end.
        let positionNumber = this.id;
        let selectedCard = allCards[positionNumber];
        function updateModal() {
            clearModal();
            if (allCards[positionNumber].cardNumber === null) {
                let combinedName = (allCards[positionNumber].name);
                $("#modalCardName").append(combinedName);
            }
            else {
                console.log("You should be popping up the modal");
                let combinedName = (allCards[positionNumber].cardNumber + " of " + allCards[positionNumber].cardSuit);
                let numberMeaning = (allCards[positionNumber].number.meaning);
                let suitMeaning = (allCards[positionNumber].suit.meaning);
                $("#modalCardName").append(combinedName);
                $("#modalCardNumberMeaning").html("<p>Number " + allCards[positionNumber.cardNumber + "Meaning: " + numberMeaning + "</p>"]);
                $("#modalCardSuitMeaning").html("<p>Number " + allCards[positionNumber.cardSuit + "Meaning: " + suitMeaning + "</p>"]);
            }
            let cardImg = ("../images" + (allCards[positionNumber].img));
            let position = (allCards[positionNumber].position);
            let cardType = (allCards[positionNumber].cardType);
            let cardTypeMeaning = (allCards[positionNumber].type.meaning);
            $("#modalCardImg.img").attr('src', cardImg);
            $("#modalCardType").html("<p>Card Type: " + cardType + "</p>");
            $("#modalCardTypeMeaning").html("<p>Type Meaning: " + cardTypeMeaning + "</p>");
            $("#modalCardPosition").html("<p>Position: " + position + "</p>");


            //--------------
            // Additional items go here to display the modal.  It's working!
            //-------------------
            function openModal() {
                modal.style.display = "block";
            }
            openModal()
        }
        updateModal();
        // console.log("This is the position: " + JSON.stringify(selectedCard));
        console.log(selectedCard);
        toggle++;
    }


});

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
// var spread = document.getElementsByClassName("spread");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
// spread.onclick = function () {
//     modal.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function clearModal() {
    $("#modalCardName").empty();
    $("#modalCardImg.img").empty();
    $("#modalCardType").empty();
    $("#modalCardTypeMeaning").empty();
    $("#modalCardNumberMeaning").empty();
    $("#modalCardSuitMeaning").empty();
    $("#modalCardPosition").empty();
}