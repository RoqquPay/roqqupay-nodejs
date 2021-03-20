const accountService = require('../../services/account/account');
class account{
    constructor(secretKey) {
        this.secretKey = secretKey;
    }

    //get account detail
    async getAccountDetail(){
        const accountServiceClass = new accountService(this.secretKey);
        return await accountServiceClass.getAccountDetail();
    }

    //verify bvn
    async bvnVerify(bvn){
        const accountServiceClass = new accountService(this.secretKey);
        return await accountServiceClass.verifyBvn(bvn);
    }

    //resolve bank account detail
    async accountResolve(account_number, bank){
        const accountServiceClass = new accountService(this.secretKey);
        return await accountServiceClass.bankAccountResolve(account_number, bank);
    }

    //get list of banks
    async getBanks(){
        const accountServiceClass = new accountService(this.secretKey);
        return await  accountServiceClass.getBanks();
    }
}
module.exports = account;