let deck;

$(async function () {
  let response = await axios.get(
    "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
  );
  deck = response.data.deck_id;
});

//1
async function getCard(deck) {
  let response = await axios.get(
    `https://deckofcardsapi.com/api/deck/${deck}/draw/?count=1`
  );
  console.log(response.data.cards[0].value);
  console.log(response.data.cards[0].suit);
}

//2
async function getTwoCards(deck) {
  let res1 = await axios.get(
    `https://deckofcardsapi.com/api/deck/${deck}/draw/?count=1`
  );
  let res2 = await axios.get(
    `https://deckofcardsapi.com/api/deck/${deck}/draw/?count=1`
  );

  console.log(res1.data.cards[0].value);
  console.log(res1.data.cards[0].suit);
  console.log(res2.data.cards[0].value);
  console.log(res2.data.cards[0].suit);
}

//3
const $cardBtn = $("#get_card");
const $cardPile = $("#card_pile");

async function drawCard() {
  let card = await axios.get(
    `https://deckofcardsapi.com/api/deck/${deck}/draw/?count=1`
  );
  console.log(card.data.remaining);
  $cardPile.append(`<div class='card'>
                          <div>${card.data.cards[0].value}</div>
                          <div>${card.data.cards[0].suit}</div>
                      </div>`);
}

$cardBtn.on("click", drawCard);
