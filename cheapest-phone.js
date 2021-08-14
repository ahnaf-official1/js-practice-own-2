const laptops = [
    {name: 'HP', price: 50000, processor:'Core i7', storage : '512gb SSD'},
    {name: 'Lenovo', price: 30000, processor:'Core i7', storage : '512gb SSD'},
    {name: 'Asus', price: 35000, processor:'Core i7', storage : '512gb SSD'},
    {name: 'Apple', price: 150000, processor:'Core i7', storage : '512gb SSD'},
    {name: 'Samsung', price: 60000, processor:'Core i7', storage : '512gb SSD'}
];

let costliest = laptops[0];
for(const choice of laptops){
    if (choice.price > costliest.price){
        costliest = choice; 
    }
}
console.log(costliest);