// for adding player list 
function addPlayerAtList(playerText){
    const playerList = document.getElementById('player-list');
    if(playerList.childElementCount <5)
    {
    const playerLi = document.createElement('li');
    const playerHeading = document.getElementById(playerText).innerText;
    playerLi.innerText = playerHeading ;
    playerList.appendChild(playerLi);
    }
    else{
       alert("You Have Already Selected Five Players");
    }   
}

// for button disable 

function buttonDisabled(buttonId){
    document.getElementById(buttonId).disabled = true ;
    document.getElementById(buttonId).style.backgroundColor = "gray" ;
    
}

// for get input value 
function getInputFiledValue(fieldId){
    const inputValueString = document.getElementById(fieldId).value ;
    const inputValueNumber = parseInt(inputValueString);
    return inputValueNumber ;
}

// for set input value as a text 
function setText(textId, fieldValue){
    const textPrice = document.getElementById(textId);
    textPrice.innerText= fieldValue ;
}

