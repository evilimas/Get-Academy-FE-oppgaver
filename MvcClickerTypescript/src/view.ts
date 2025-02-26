import model from "./model.ts";
import { doClick, buyUpgrade } from "./controller.ts";

export default function updateView() : void {
    var smiley = model.smileyIndex == 0 ? '😀' : '😁';
    document.getElementById('app')!.innerHTML = `
        <div id="image">${smiley}</div>
        <div id="pointsInfo">${model.points}</div>
        <button ">Kjøp oppgradering (10 poeng)</button>
    `;
    document.querySelector<HTMLDivElement>("#image")!.addEventListener("click", doClick)
    document.querySelector<HTMLButtonElement>("button")?.addEventListener("click", buyUpgrade)
}