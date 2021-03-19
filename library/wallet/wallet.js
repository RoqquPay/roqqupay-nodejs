const walletService = require('../../services/wallet/wallet');
class Wallet{
    constructor(secretKey) {
        this.secretKey = secretKey;
    }
    //service to get wallet data
    async getWalletData(token, address){
        const walletServiceClass = new walletService();
        return await walletServiceClass.getWalletData(token, address);
    }

    //generate wallet address
    async generateWalletAddress(token) {
        const walletServiceClass = new walletService(this.secretKey);
        return await walletServiceClass.generateWalletAddress(token);
    }

    //get wallet addresses
    async getWalletAddresses(token){
        const walletServiceClass = new walletService(this.secretKey);
        return await walletServiceClass.getWalletAddresses(token);
    }

    //delete wallet address
    async deleteWalletAddress(token, address){
        const walletServiceClass = new walletService(this.secretKey);
        return walletServiceClass.deleteWalletAddress(token, address);
    }

    //function to send token
    async sendToken(token, amount, wallet, memo = null, tag = null){
        const walletServiceClass = new walletService(this.secretKey);
        return walletServiceClass.sendToken(token, amount, wallet, memo, tag);
    }

}
module.exports = Wallet;