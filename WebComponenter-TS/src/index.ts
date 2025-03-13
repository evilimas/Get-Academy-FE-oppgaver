import Timer from './components/Timer.ts';
import startCountdown from './startCountdown.ts';

window.customElements.define('timer-element', Timer);

// const changeColorTo = (color) => {
//   document.querySelectorAll('hello-world').forEach((helloWorld) => {
//     helloWorld.color = color;
//   });
// };

// document.querySelector('button').addEventListener('click', () => {
//   startCountdown(this.countdown);
// });
