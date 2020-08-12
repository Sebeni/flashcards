let cardButtons = document.getElementsByClassName("card-button");
let cardAnswers = document.getElementsByClassName("card-answer");
let modelNode = document.getElementsByClassName("card")[0];
let show = "Show";
let hide = "Hide";

addButtonListeners();

function addButtonListeners(){
    for(let i = 0; i < cardButtons.length; i++) {
        let currentButton = cardButtons[i];
        currentButton.addEventListener("click", (event)=>{
            let relatedCardAnswer = cardAnswers[i];
            toggleCard(currentButton, relatedCardAnswer);
        });
    }
}

function toggleCard(currentButton, relatedCardAnswer){
    if (currentButton.innerHTML == hide) {
        relatedCardAnswer.style.opacity = "0";
        relatedCardAnswer.classList.add("unselectable");
        currentButton.innerHTML = show;
    } else {
        relatedCardAnswer.style.opacity = "1";
        relatedCardAnswer.classList.remove("unselectable");
        currentButton.innerHTML = hide;
    }
}

document.getElementById("card-form").addEventListener("submit", (event)=> {
    event.preventDefault();
    let engInput = document.getElementById("eng").value;
    let espInput = document.getElementById("esp").value;
    let picInput = document.getElementById("pic").value;
    
    let clone = modelNode.cloneNode(true);
    
    clone.getElementsByClassName("card-title")[0].innerHTML = engInput;
    
    let answer = clone.getElementsByClassName("card-answer")[0];
    answer.innerHTML = espInput;

    if(picInput.length > 0) {
        clone.getElementsByTagName("img")[0].setAttribute("src", picInput);
    }

    clone.getElementsByClassName("card-button")[0].addEventListener("click", (event)=> {
        toggleCard(event.target, answer);
    })

    document.getElementsByClassName("container")[0].insertBefore(clone, document.getElementById("form-container"));
    
})



