let cardButtons = document.getElementsByClassName("card-button");
let cardAnswers = document.getElementsByClassName("card-answer");
let show = "Show";
let hide = "Hide";


function addButtonListeners(){
    for(let i = 0; i < cardButtons.length; i++) {
        let currentButton = cardButtons[i];
        currentButton.addEventListener("click", (event)=>{
            let relatedCardAnswer = cardAnswers[i];
            if (currentButton.innerHTML == hide) {
                relatedCardAnswer.style.opacity = "0";
                relatedCardAnswer.classList.add("unselectable");
                currentButton.innerHTML = show;
            } else {
                relatedCardAnswer.style.opacity = "1";
                relatedCardAnswer.classList.remove("unselectable");
                currentButton.innerHTML = hide;
            }
        });
    }
}

addButtonListeners();

