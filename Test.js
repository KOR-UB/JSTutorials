window.onload(function () {
  setInterval(() => {
    const date = new Date();
    const H = date.getHours();
    const M = date.getMinutes();
    const S = date.getSeconds();
    const h1 = document.querySelector('h1');
    const timeJoin = [`${H >= 10 ? H : `0${H}`}`, `${M >= 10 ? M : `0${M}`}`, `${S >= 10 ? S : `0${S}`}`].join(':');
    h1.textContent = timeJoin;
  }, 1000);
  const Counter = (function () {
    let num = 0;
    const counterp = document.querySelector('p');
    const increaseBtn = document.querySelector('.increase');
    const decreaseBtn = document.querySelector('.decrease');
    return {
      increaseBtn,
      decreaseBtn,
      increase() {
        counterp.textContent = ++num;
      },
      decrease() {
        counterp.textContent = --num;
      }
    };
  }());
  Counter.increaseBtn.addEventListener('click', Counter.increase);
  Counter.decreaseBtn.addEventListener('click', Counter.decrease);
}());
