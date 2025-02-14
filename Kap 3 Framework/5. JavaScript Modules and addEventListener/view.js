import model from "./model.js";
import { doClick, buyUpgrade } from "./controller.js";

function updateView() {
    var smiley = model.smileyIndex == 0 ? '😀' : '😁';
    document.getElementById('app').innerHTML = /*HTML*/ `
    <div id="image">${smiley}</div>
    <div id="pointsInfo">${model.points}</div>
    <button>Kjøp oppgradering (10 poeng)</button>
    `;
    
    let smileyDiv = document.querySelector('#image')
    smileyDiv.addEventListener('click', doClick)
    const btn = document.querySelector('button')
    btn.addEventListener('click', buyUpgrade)
}

export default updateView