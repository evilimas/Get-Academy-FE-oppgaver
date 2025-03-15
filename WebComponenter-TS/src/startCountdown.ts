let countdownInterval: string;

export default function startCountdown(seconds: number, countDiv: HTMLElement) {
  const countdownElement = document.querySelector('.countdown');

  //   const countdownElement = document.querySelectorAll('.countdown');

  let timeLeft = seconds;

  function updateDisplay() {
    const minutes = String(Math.floor(timeLeft / 60)).padStart(2, '0');
    const seconds = String(timeLeft % 60).padStart(2, '0');
    countDiv.textContent = `00:${minutes}:${seconds}`;

    // for (let element of countdownElement) {
    //   if (element === element) {
    //     element!.textContent = `00:${minutes}:${seconds}`;
    //   }
    // }
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
