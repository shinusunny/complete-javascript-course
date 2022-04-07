'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 24;
*/
let number = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = number;
let score = 20;
let highscore = Number(document.querySelector('.highscore').textContent);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number!';
  } else if (guess === number) {
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) highscore = score;
    document.querySelector('.highscore').textContent = highscore;
    document.querySelector('.number').textContent = '?';
  } else if (guess !== number) {
    document.querySelector('.message').textContent =
      guess > number ? '📈 Too high!' : '📉 Too low!';
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.guess').value = '';
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = number;
  score = 20;
});
