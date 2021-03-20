const axios = require('axios');
const baseUrl = 'https://api.roqqu.com/prod/v1';
class vtu{
  constructor(secretKey) {
      this.secretKey = secretKey;
  }
    //function tp recharge airtime
    async rechargeAirtime(phone_number, amount){
        try{
            const rechargeAirtime = await axios.post(`${baseUrl}/user/recharge-airtime`, {phone_number, amount},{headers: {'Authorization' : `Bearer ${this.secretKey}`} });
            return rechargeAirtime.data;
        }catch(error){
            console.error(error.response.data);
            return error.response.data;
        }
    }

    //get provider data bundles
    async getDataBundes(provider){
        try {
            const bundles = await axios.get(`${baseUrl}/data/subscriptions`, {params: {provider}});
            return bundles.data;
        } catch (error) {
            console.error(error.response.data);
            return error.response.data;
        }
    }

    //subscribe data
    async dataSubscription(provider, variation_code, phone_number){
        try{
            const subscribeData = await axios.post(`${baseUrl}/user/pay-data`, {provider, variation_code, phone_number},{headers: {'Authorization' : `Bearer ${this.secretKey}`} });
            return subscribeData.data;
        }catch(error){
            console.error(error.response.data);
            return error.response.data;
        }
    }

    //get cable bundles
    async getCableBundles(provider){
        try {
            const bundles = await axios.get(`${baseUrl}/cable/subscriptions`, {params: {provider}});
            return bundles.data;
        } catch (error) {
            console.error(error.response.data);
            return error.response.data;
        }
    }

    //verify meter number
    async verifyMeterNumber(provider, meter_type, meter_number){
        try {
            const verifyMeter = await axios.get(`${baseUrl}/verify-meter`, {params: {provider, meter_type, meter_number}});
            return verifyMeter.data;
        } catch (error) {
            console.error(error.response.data);
            return error.response.data;
        }
    }

    //recharge electricity meter
    async electricityMeterRecharge(provider, meter_type, meter_number, amount, phone_number){
        try{
            const payElectric = await axios.post(`${baseUrl}/user/pay-electric`, {provider, meter_type, meter_number, amount, phone_number},{headers: {'Authorization' : `Bearer ${this.secretKey}`} });
            return payElectric.data;
        }catch(error){
            console.error(error.response.data);
            return error.response.data;
        }
    }

}
module.exports = vtu;