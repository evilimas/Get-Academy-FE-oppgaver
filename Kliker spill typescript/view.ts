import model from "./model..ts";
import { doClick, buyUpgrade } from "./controller.ts";

function updateView() : void {
    var smiley = model.smileyIndex == 0 ? '😀' : '😁';
    document.querySelector<HTMLDivElement>('#app')!.innerHTML = /*HTML*/ `
    <div id="image">${smiley}</div>
    <div id="pointsInfo">${model.points}</div>
    <button>Kjøp oppgradering (10 poeng)</button>
    `;
    
    let smileyDiv = document.querySelector<HTMLDivElement>('#image')
    smileyDiv!.addEventListener('click', doClick)
    const btn = document.querySelector<HTMLButtonElement>('button')
    btn!.addEventListener('click', buyUpgrade)
}

export default updateView