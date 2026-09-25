import './style.css';

document.querySelector('#app').innerHTML = `
  <h1>カウンター</h1>
  <p id="count">0</p>

  <button id="plus">＋</button>
  <button id="minus">−</button>
  <button id="reset">リセット</button>
`;

const countEl = document.querySelector('#count');
const plusBtn = document.querySelector('#plus');
const minusBtn = document.querySelector('#minus');
const resetBtn = document.querySelector('#reset');

let count = 0;

// ＋ボタン：count を +1
plusBtn.addEventListener('click', () => {
  count += 1;
  countEl.textContent = count;
});

// −ボタン：count を -1
minusBtn.addEventListener('click', () => {
  count -= 1;
  countEl.textContent = count;
});

// リセットボタン：count を 0 に戻す
resetBtn.addEventListener('click', () => {
  count = 0;
  countEl.textContent = count;
});