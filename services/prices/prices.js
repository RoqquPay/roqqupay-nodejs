const axios = require('axios');
const baseUrl = 'https://api.roqqu.com/prod/v1';
class Prices{
    //function to get all the token prices
    async getPrices(){
        try {
            const prices = await axios.get(baseUrl+'/prices');
            return prices.data;
        } catch (error) {
            console.error(error.response.data);
            const errorResponse = error.response.data;
            return errorResponse;
        }
    }

    //function to get specific token price
    async getPrice(token){
        try {
            const price = await axios.get(`${baseUrl}/price`, {params: {symbol: token}});
            return price.data;
        } catch (error) {
            console.error(error.response.data);
             return error.response.data;

        }
    }

    //function to get specific token price history
    async getPriceHistory(token){
        try {
            const price = await axios.get(`${baseUrl}/history`, {params: {symbol: token}});
            return price.data;
        } catch (error) {
            console.error(error.response.data);
            return error.response.data;

        }
    }
}
module.exports = new Prices();