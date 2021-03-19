const prices = require('./library/prices/prices');
const wallets = require('./library/wallet/wallet');
class Roqqupay{
    constructor(secretKey) {
        this.prices = prices;
        this.wallet = new wallets(secretKey);
    }
}
module.exports = Roqqupay;