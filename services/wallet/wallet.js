const axios = require('axios');
const baseUrl = 'https://api.roqqu.com/prod/v1';

class Wallets{
    constructor(secretKey) {
        this.secretKey = secretKey;
    }
    //function to get wallet data
    async getWalletData(token, address){
        try {
            const walletData = await axios.get(`${baseUrl}/blockchain/address`, {params: {symbol: token, addr: address}});
            return walletData.data;
        } catch (error) {
            console.error(error.response.data);
            return error.response.data;
        }
    }

    //function to generate wallet address
    async generateWalletAddress(token){
     try{
       const generateWalletAddress = await axios.post(`${baseUrl}/user/generate-wallet`, {token: token},{headers: {'Authorization' : `Bearer ${this.secretKey}`} });
       return generateWalletAddress.data;
     }catch(error){
         console.error(error.response.data);
         return error.response.data;
     }

    }

    //function to get wallet addresses
    async getWalletAddresses(token){
        try{
            const walletAddresses = await axios.post(`${baseUrl}/user/wallets`, {token: token},{headers: {'Authorization' : `Bearer ${this.secretKey}`} });
            return walletAddresses.data;
        }catch(error){
            console.error(error.response.data);
            return error.response.data;
        }
    }

    //function to delete wallet address
    async deleteWalletAddress(token, address){
        try{
            const deleteWalletAddress = await axios.post(`${baseUrl}/user/delete-wallet`, {token: token, address: address},{headers: {'Authorization' : `Bearer ${this.secretKey}`} });
            return deleteWalletAddress.data;
        }catch(error){
            console.error(error.response.data);
            return error.response.data;
        }
    }

    //function to send token
    async sendToken(token, amount, wallet, memo = null, tag = null){
        const payLoad = {token, amount, wallet};
        if(memo){
            payLoad.memo = memo;
        }
        if(tag){
            payLoad.tag = tag;
        }
        try{
            const sendToken = await axios.post(`${baseUrl}/user/send-${token}`, payLoad,{headers: {'Authorization' : `Bearer ${this.secretKey}`} });
            return sendToken.data;
        }catch(error){
            console.error(error.response.data);
            return error.response.data;
        }
    }
}
module.exports = Wallets;