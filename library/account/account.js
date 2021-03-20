const accountService = require('../../services/account/account');
class Account{
    constructor(secretKey) {
        this.accountService = new accountService(secretKey);
    }

    //get account detail
    async getAccountDetail(){
        return await this.accountService.getAccountDetail();
    }

    //verify bvn
    async bvnVerify(bvn){
        return await this.accountService.verifyBvn(bvn);
    }

    //resolve bank account detail
    async accountResolve(account_number, bank){
        return await this.accountService.bankAccountResolve(account_number, bank);
    }

    //get list of banks
    async getBanks(){
        return await this.accountService.getBanks();
    }
}
module.exports = Account;