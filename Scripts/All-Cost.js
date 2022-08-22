// all cost calculate 

document.getElementById('total-calculate-btn').addEventListener('click',function(){
    const mangerCost = getInputFiledValue('manager-field');
    const coachCost = getInputFiledValue('coach-field');
    const fivePlayerCostString = document.getElementById('listed-player-cost').innerText;
    const fivePlayerCostNumber = parseInt(fivePlayerCostString);
    const totalCosting = mangerCost + coachCost + fivePlayerCostNumber ;
    
    setText('total-cost',totalCosting);
    
});