const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {

    hasFlippedCard = true;
    firstCard = this;

    return;
  }


  secondCard = this;

  checkForMatch();
  console.log(firstCard, secondCard);
}

function checkForMatch() {
  let isMatch = firstCard.dataset.distro === secondCard.dataset.distro;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  resetBoard();
}

function unflipCards() {
  lockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    resetBoard();
  }, 1000);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];

}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));

function showmenu(shown, hidden) {
  document.getElementById(shown).style.display='block';
  document.getElementById(hidden).style.display='none';
  return false;
}

function showgame(shown, hidden) {
  document.getElementById(shown).style.display='flex';
  document.getElementById(hidden).style.display='none';
  return false;
}

document.getElementById("about").addEventListener("click", function(){
  alert("DistroCards v.1.4.0\nCopyleft 2019 Mercode - GPLv3\nMade with love by Yutyo");
});

document.getElementById("quit-game").addEventListener("click", function(){
      window.close();
  });
