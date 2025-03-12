let countdownInterval: string;

function startCountdown(seconds: number) {
  clearInterval(countdownInterval);
  const countdownElement = document.querySelector('.countdown');
  let timeLeft = seconds;

  function updateDisplay() {
    const minutes = String(Math.floor(timeLeft / 60)).padStart(2, '0');
    const seconds = String(timeLeft % 60).padStart(2, '0');
    countdownElement!.textContent = `00:${minutes}:${seconds}`;
  }

  updateDisplay();

  countdownInterval = setInterval(() => {
    timeLeft--;
    updateDisplay();

    if (timeLeft <= 0) {
      clearInterval(countdownInterval);
      countdownElement!.textContent = 'Tid er ute!';
    }
  }, 1000);
}

const DEFAULT_COUNTDOWN = '10';

export default class Timer extends HTMLElement {
  get countdown() {
    return this.getAttribute('countdown') || DEFAULT_COUNTDOWN;
  }

  set countdown(value) {
    this.setAttribute('countdown', value);
  }

  connectedCallback() {
    window.requestAnimationFrame(() => {
      const div = document.createElement('div');
      div.classList.add('countdown-container');
      const p = document.createElement('p');
      p.textContent = 'Nedtelling til hendelse:';
      const countDiv = document.createElement('div');
      countDiv.classList.add('countdown');
      countDiv.textContent = '00:00:00';
      const btn = document.createElement('button');
      btn.textContent = `Start ${this.countdown} sek`;
      btn.addEventListener('click', () =>
        startCountdown(parseInt(this.countdown))
      );
      div.appendChild(p);
      div.appendChild(countDiv);
      div.appendChild(btn);

      this.appendChild(div);
    });
  }
}
