// Budgets for per Player cost calculate 

document.getElementById('calculate-btn').addEventListener('click',function(){
    const perPlayerCost = getInputFiledValue('perplayer-field');
    const playerCount= document.getElementById('player-list').childElementCount ;
    const playerExpense = perPlayerCost * playerCount ;
   
    setText('listed-player-cost', playerExpense);
   
   })

   