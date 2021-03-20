const  pricesService = require('../../services/prices/prices');
class Prices{

    //get price
    async getPrices(){
        return await pricesService.getPrices();
    }

    //get price
    async getPrice(token){
        return await pricesService.getPrice(token);
    }

    //get price history
    async getPriceHistory(token){
        return await pricesService.getPriceHistory(token);
    }

}
module.exports = new Prices();
