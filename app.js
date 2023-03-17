const gamecards = document.querySelectorAll(".game-card");
const gameboard = document.querySelector(".gameboard");

// you want to show the back of the card
// scan the gameboard to see which other card is shown.
//if none keep the card shown.
//if one is shown check if the src of the back image is the same.
// if it is keep both cards open and add a class match.
// //for every 2 matches, give a point.

gameboard.addEventListener("click", (event) => {
  const cardElement = event.target.closest(".game-card");
  if (cardElement) {
    const cardResult = cardElement.querySelector(".back");
    cardResult.classList.add("selected");
    cardResult.classList.remove("back");
  }

  checkMatch();
});

function checkMatch() {
  const selectedCards = document.querySelectorAll(".selected");

  if (selectedCards.length == 2) {
    if (
      selectedCards[0].getAttribute("src") ==
      selectedCards[1].getAttribute("src")
    ) {
      selectedCards.forEach((card) => {
        card.classList.add("matched");
        card.classList.remove("selected");
      });
    } else {
      selectedCards.forEach((card) => {
        card.classList.remove("selected");

        setTimeout(() => {
          card.classList.add("back");
        }, 1000);
      });
    }
  }
}
