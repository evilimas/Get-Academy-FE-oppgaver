// controller
function doClick() {
    points += pointsPerClick;
    smileyIndex = 1 - smileyIndex;
    
    updateView();
}

function buyUpgrade() {
    if (points < 10) return;
    points -= 10;
    pointsPerClick++;
    
    updateView()
}

function appendDiv(text, element){
    element.textContent = text
    app.appendChild(element)
}