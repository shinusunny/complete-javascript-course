'use strict';

const barcode = {
  types: {
    8: 'GTIN-8',
    12: 'GTIN-12',
    13: 'GTIN-13',
    14: 'GTIN-14',
    17: 'GSIN',
    18: 'SSSC',
  },
  validate(ean) {
    let valid = true;
    if (isNaN(ean) || !barcode.types[ean.length + 1]) {
      const errMsg = Object.entries(barcode.types)
        .map((k, _) => `${`${k[0] - 1}`.padStart(2, ' ')} (${k[1]})`)
        .join('\n');
      alert(`Entered length: ${ean.length}\nValid lengths:\n${errMsg}`);
      valid = false;
    }
    return valid;
  },
  checkDigit(ean) {
    const digits = [...ean].reverse();
    const { even, odd } = digits.reduce(
      (sum, cur, i) => {
        sum[i % 2 == 0 ? 'even' : 'odd'] += +cur;
        return sum;
      },
      { even: 0, odd: 0 }
    );
    return (10 - ((odd + even * 3) % 10)) % 10;
  },
};

const cdInp = document.querySelector('#cd-inp');
const cdBtn = document.querySelector('#cd-btn');
const cdRes = document.querySelector('#cd-res');

cdBtn.addEventListener('click', function (e) {
  e.preventDefault();
  cdRes.textContent = '';
  const ean = cdInp.value;
  if (barcode.validate(ean))
    cdRes.textContent = `${barcode.checkDigit(ean)} (${
      barcode.types[ean.length + 1]
    })`;
});
