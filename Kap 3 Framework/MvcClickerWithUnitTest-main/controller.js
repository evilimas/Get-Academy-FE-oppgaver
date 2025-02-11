// controller
function doClick() {
    points += pointsPerClick;
    smileyIndex = 1 - smileyIndex;
    app.replaceChildren()
    updateView();
}

function buyUpgrade() {
    if (points < 10) return;
    points -= 10;
    pointsPerClick++;
    app.replaceChildren()
    updateView()
}

function appendDiv(text, element){
    element.textContent = text
    app.appendChild(element)
}