var position = [
    {
        "id": 1,
        "name": "The Present",
        "meaning": "Your current state of mind and being regarding the situation."
    },
    {
        "id": 2,
        "name": "The Challenge",
        "meaning": "An immediate challenge that, if resolved, would make the situation easier."
    },
    {
        "id": 3,
        "name": "The Past",
        "meaning": "Events that have led up to the present situation."
    },
    {
        "id": 4,
        "name": "The Future",
        "meaning": "Next step on the journey. What is likely to occur in the near future."
    },
    {
        "id": 5,
        "name": "Above",
        "meaning": "The goal that you must work toward as you attempt to resolve the situation."
    },
    {
        "id": 6,
        "name": "Below",
        "meaning": "Underlying feelings and trends associated with the situation."
    },
    {
        "id": 7,
        "name": "Advice",
        "meaning": "Recommendation for how you should approach and address the current situation."
    },
    {
        "id": 8,
        "name": "External influences",
        "meaning": "Forces outside your control that will affect the outcome."
    },
    {
        "id": 9,
        "name": "Hopes and fears",
        "meaning": "Secret desire, personal demon, or something you suspect is true."
    },
    {
        "id": 10,
        "name": "Outcome",
        "meaning": "What you should expect in the end if you continue down your current course of action. This can change, but only if you make the necessary adjustments."
    }
];

$(document).ready(function () {
    var fullArray;
    var toggle = 0;
    const newUser = $("#id01")
    newUser.hide()

    $("#signup").on("click", (event) => {
        newUser.show();
    })

    var localArr = JSON.parse(localStorage.getItem("array"));
    var array = localArr.map(Number);

    getData();

    function getData() {
        $.ajax("api/cards?ids=" + JSON.stringify(array).replace(/[\[\]]/g,''))
        .done(function(data) {
            console.log(data);
            for (i=0; i < array.length; i++) {
                $("#b" + (i+1)).css("background-image", "url(../images/" + data[i].image + ")");
        }
        fullArray = data;
    });
    };

    $(".spread").flip({
      trigger: "manual"
    });
    
    $(".spread").click(function () {
      $(this).flip(true);
  });
  
  $(document).on('click', '.spread', function () {
  
  
      if (this.id - 1 > toggle && toggle === 0) {
          console.log(this.id);
          return;
      }
      else if (this.id - 1 > toggle) {
          return;
      }
      else {
          let positionNumber = this.id - 1;
          let selectedCard = fullArray[positionNumber];
          function updateModal() {
              clearModal();
              if (fullArray[positionNumber].cardNumber === null) {
                  let combinedName = (fullArray[positionNumber].name);
                  $("#modalCardName").append(combinedName);
                  let specialMeaning = (fullArray[positionNumber].meaning);
                  $("#modalCardSpecialMeaning").html("<p><strong>Special Meaning:</strong> " + specialMeaning + "</p>");
              }
              else {
                  console.log("You should be popping up the modal");
                  let combinedName = (fullArray[positionNumber].cardNumber + " of " + fullArray[positionNumber].cardSuit);
                  let numberMeaning = (fullArray[positionNumber].number.meaning);
                  let suitMeaning = (fullArray[positionNumber].suit.meaning);
                  $("#modalCardName").append(combinedName);
                  $("#modalCardNumberMeaning").html("<p><strong>Primary Meaning:</strong>   " + fullArray[positionNumber].cardNumber + " - " + numberMeaning + "</p>");
                  $("#modalCardSuitMeaning").html("<p><strong>Suit Meaning:</strong>   " + fullArray[positionNumber].cardSuit + " - " + suitMeaning + "</p>");
              }
              let cardImg = ("../images/" + (fullArray[positionNumber].image));
              let element = $("<img>");
              $(element).attr('src', cardImg);
              // let cardImgElement
            //   let position = (fullArray[positionNumber].position);
              let cardType = (fullArray[positionNumber].cardType);
              let cardTypeMeaning = (fullArray[positionNumber].type.meaning);
              $("#modalCardImg").append(element);
              $("#modalCardType").html("<p><strong>Card Type:</strong>   " + cardType + "</p>");
              $("#modalCardTypeMeaning").html("<p><strong>Arcana Meaning:</strong>   " + cardTypeMeaning + "</p>");
              // $("#modalCardPosition").html("<p>Position: " + position + "</p>");
              //Position stuff
            let positionName = position[positionNumber].name;
            $("#positionName").append(positionName);
            let positionMeaning = position[positionNumber].meaning;
            $("#positionMeaning").append(positionMeaning);
            let meaning = (fullArray[positionNumber].meaning);
            $("#modalMeaning").append(meaning);
  
              function openModal() {
                  $("#totalModal").css('display', 'block');
              }
              openModal()
          }
          updateModal();
          // console.log(selectedCard);
          toggle++;
      }
  
  
  });
  
  // Get the modal
  var modal = document.getElementsByClassName("spreadModal");
  
  
  var span = document.getElementById("spreadClose");
  
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
      $("#totalModal").css('display', 'none');
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
      if (event.target == modal) {
          $("#totalModal").css('display', 'none');
      }
  }
  
  function clearModal() {
    $("#modalCardTypeMeaning").empty();
    $("#positionName").empty();
    $("#positionMeaning").empty();
      $("#modalCardName").empty();
      $("#modalCardImg").empty();
      $("#modalCardType").empty();
      $("#modalCardTypeMeaning").empty();
      $("#modalCardSpecialMeaning").empty();
      $("#modalCardNumberMeaning").empty();
      $("#modalCardSuitMeaning").empty();
      $("#modalCardPosition").empty();
  }

});