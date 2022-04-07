'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btns = document.querySelectorAll('.show-modal');
const close = document.querySelector('.close-modal');

const closemodal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

close.addEventListener('click', closemodal);
overlay.addEventListener('click', closemodal);

document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) closemodal();
});
