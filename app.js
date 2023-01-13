const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * 1.2;
    return valueInDollar;
}
const sum = (a,b) => {
    return a + b
} 
console.log(sum(7,3))
module.export = { sum, fromEuroToDollar };