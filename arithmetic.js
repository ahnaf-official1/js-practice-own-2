/*
chair required wood = 3cft/chair
bed required wood = 50cft/chair
table required wood = 10cft/chair
1cft price = 2000 TK
*/

function woodCalculator(chairQuantity, bedQuantity, tableQuantity){
    const perChairWood = 3;
    const perBedWood = 50;
    const perTableWood = 10;
    // Calculations
    const chairWoodQuantity = chairQuantity * perChairWood;
    const bedWoodQuantity = bedQuantity * perBedWood;
    const tableWoodQuantity = tableQuantity * perTableWood;
    
    // total
    const totalWood = chairWoodQuantity + bedWoodQuantity + tableWoodQuantity;
    console.log('Total amount of wood =', totalWood, 'cft')
    const priceOfOneCftWood = 2000;
    const totalPrice = totalWood * priceOfOneCftWood;
    return totalPrice;
}

const totalWoodResult = woodCalculator(10, 5, 4);
console.log(totalWoodResult);