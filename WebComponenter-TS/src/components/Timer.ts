import startCountdown from '../startCountdown';

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
        startCountdown(parseInt(this.countdown), countDiv)
      );
      div.appendChild(p);
      div.appendChild(countDiv);
      div.appendChild(btn);

      this.appendChild(div);
    });
  }
}
