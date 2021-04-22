const axios = require('axios');
const baseUrl = 'https://api.roqqu.com/prod/v1';
class account {
    constructor(secretKey) {
        this.secretKey = secretKey;
    }

    //get account detail
    async getAccountDetail(){
        try{
            const account = await axios.post(`${baseUrl}/user/info`, {},{headers: {'Authorization' : `Bearer ${this.secretKey}`} });
            return account.data;
        }catch(error){
            console.error(error.response.data);
            return error.response.data;
        }
    }

    //verify bvn
    async verifyBvn(bvn)
    {
        try{
            const bvnVerify = await axios.post(`${baseUrl}/user/bvn-verify`, {bvn},{headers: {'Authorization' : `Bearer ${this.secretKey}`} });
            return bvnVerify.data;
        }catch(error){
            console.error(error.response.data);
            return error.response.data;
        }
    }

    //resolve bank account detail
    async bankAccountResolve(account_number, bank){
        try{
            const accountResolve = await axios.post(`${baseUrl}/user/account-resolve`, {account_number, bank},{headers: {'Authorization' : `Bearer ${this.secretKey}`} });
            return accountResolve.data;
        }catch(error){
            console.error(error.response.data);
            return error.response.data;
        }
    }

    //get provider data bundles
    async getBanks(){
        try {
            const banks = await axios.get(baseUrl+'/banks');
            return banks.data;
        } catch (error) {
            console.error(error.response.data);
            return error.response.data;
        }
    }

    //get account transactions
    async getTransactions(){
        try{
            const transactions = await axios.post(`${baseUrl}/user/transactions`, {},{headers: {'Authorization' : `Bearer ${this.secretKey}`} });
            return transactions.data;
        }catch(error){
            console.error(error.response.data);
            return error.response.data;
        }
    }

    //verify bvn
    async verifyNin(nin)
    {
        try{
            const ninVerify = await axios.post(`${baseUrl}/user/nin-verify`, {nin},{headers: {'Authorization' : `Bearer ${this.secretKey}`} });
            return ninVerify.data;
        }catch(error){
            console.error(error.response.data);
            return error.response.data;
        }
    }
}
module.exports = account;