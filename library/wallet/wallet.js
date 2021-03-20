const walletService = require('../../services/wallet/wallet');
class Wallet{
    constructor(secretKey) {
        this.walletService = new walletService(secretKey);
    }
    //service to get wallet data
    async getWalletData(token, address){
        return await this.walletService.getWalletData(token, address);
    }

    //generate wallet address
    async generateWalletAddress(token) {
        return await this.walletService.generateWalletAddress(token);
    }

    //get wallet addresses
    async getWalletAddresses(token){
        return await this.walletService.getWalletAddresses(token);
    }

    //delete wallet address
    async deleteWalletAddress(token, address){
        return await this.walletService.deleteWalletAddress(token, address);
    }

    //function to send token
    async sendToken(token, amount, wallet, memo = null, tag = null){
        return await this.walletService.sendToken(token, amount, wallet, memo, tag);
    }

}
module.exports = Wallet;