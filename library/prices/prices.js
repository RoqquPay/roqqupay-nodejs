const  pricesService = require('../../services/prices/prices');
class Prices{
    async getPrices(){
        const prices = await pricesService.getPrices();
        return prices;
    }

    async getPrice(token){
        const price = await pricesService.getPrice(token);
        return price;
    }

    async getPriceHistory(token){
        const priceHistory = await pricesService.getPriceHistory(token);
        return priceHistory;
    }



}
module.exports = new Prices();
