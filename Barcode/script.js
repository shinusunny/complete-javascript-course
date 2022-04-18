'use strict';

const barcode = {
  checkDigit(ean) {
    const digits = [...ean].reverse();
    let even = 0;
    let odd = 0;
    for (let i = 0; i < digits.length; i++) {
      if (i % 2 == 0) even += Number(digits[i]);
      else odd += Number(digits[i]);
    }
    const cd = (odd + even * 3) % 10;
    return (10 - cd) % 10;
  },
};

const cdInp = document.querySelector('#cd-inp');
const cdBtn = document.querySelector('#cd-btn');
const cdRes = document.querySelector('#cd-res');

cdBtn.addEventListener('click', function () {
  const ean = cdInp.value;
  if (isNaN(ean) || ean.length < 1 || ean.length > 17) {
    alert('Enter a number of 7, 11, 12, 13, 16 or 17 digits');
  }
  cdRes.textContent = barcode.checkDigit(ean);
});
