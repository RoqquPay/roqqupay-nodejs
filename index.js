const prices = require('./library/prices/prices');
const wallets = require('./library/wallet/wallet');
const vtu = require('./library/vtu/vtu');
const account = require('./library/account/account');
class Roqqupay{
    constructor(secretKey) {
        this.prices = prices;
        this.wallet = new wallets(secretKey);
        this.vtu = new vtu(secretKey);
        this.account = new account(secretKey);
    }
}
module.exports = Roqqupay;