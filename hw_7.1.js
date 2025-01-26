const services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",
    
    sum: function() {
        let totalSum = 0;

        for (let key in services) {
            if (typeof services[key] !== 'function'){
                totalSum += parseFloat(services[key]);
            }
        }
        return totalSum;
    },
    min: function() {
        let minPrice = null;
        for (let key in services) {
            if (typeof services[key] !== 'function'){
                if (parseFloat(services[key]) < minPrice || minPrice === null ){
                minPrice = parseFloat(services[key]);
                }
            }
        }
        return minPrice;
    },
    max: function() {
        let maxPrice = null;
        for (let key in services) {
            if (typeof services[key] !== 'function'){
                if (parseFloat(services[key]) > maxPrice  || maxPrice === null){
                maxPrice = parseFloat(services[key]);
                }
            }
        }
        return maxPrice;
    }
};

console.log(services.sum());
console.log(services.min());
console.log(services.max());