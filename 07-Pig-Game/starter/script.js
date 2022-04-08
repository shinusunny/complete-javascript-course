'use strict';

const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const dice = document.querySelector('.dice');
const curr0 = document.getElementById('current--0');
const curr1 = document.getElementById('current--1');
const play0 = document.querySelector('.player--0');
const play1 = document.querySelector('.player--1');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

score0.textContent = 0;
score1.textContent = 0;
dice.classList.add('hidden');

const scores = [0, 0];
let currScore, activePlayer, playing;

const init = function () {
  playing = true;
  currScore = 0;
  scores[0] = 0;
  scores[1] = 0;
  activePlayer = 0;
  play0.classList.add('player--active');
  play1.classList.remove('player--active');
  play0.classList.remove('player--winner');
  play1.classList.remove('player--winner');
  dice.classList.add('hidden');
  document.getElementById('score--0').textContent = 0;
  document.getElementById('score--1').textContent = 0;
};

init();

const switchPlayer = function () {
  document.getElementsByClassName('current-score')[
    activePlayer
  ].textContent = 0;
  activePlayer = activePlayer == 0 ? 1 : 0;
  currScore = 0;
  play0.classList.toggle('player--active');
  play1.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  if (playing) {
    let rdm = Math.trunc(Math.random() * 6) + 1;
    dice.src = `dice-${rdm}.png`;
    dice.classList.remove('hidden');
    console.log(activePlayer);

    if (rdm !== 1) {
      currScore += rdm;
      document.getElementsByClassName('current-score')[
        activePlayer
      ].textContent = currScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 20) {
      playing = false;
      dice.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    }
    switchPlayer();
  }
});

btnNew.addEventListener('click', init);
