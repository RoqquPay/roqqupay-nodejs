const vtuService = require('../../services/vtu/vtu');
class vtu{
    constructor(secretKey) {
        this.secretKey = secretKey;
    }
    async rechargeAirtime(phone_number, amount){
        const vtuServiceClass = new vtuService(this.secretKey);
        return await vtuServiceClass.rechargeAirtime(phone_number, amount);
    }

    //get data buncles
    async getDataBundes(provider){
     const vtuServiceClass = new vtuService();
      return await vtuServiceClass.getDataBundes(provider);
    }

    //subscribe data
    async dataSubscription(provider, variation_code, phone_number){
        const vtuServiceClass = new vtuService(this.secretKey);
        return vtuServiceClass.dataSubscription(provider, variation_code, phone_number);
    }

    //get cable buncles
    async getCableBundes(provider){
        const vtuServiceClass = new vtuService();
        return await vtuServiceClass.getCableBundles(provider);
    }

    //verify meter number
    async verifyMeterNumber(provider, meter_type, meter_number){
        const vtuServiceClass = new vtuService();
        return await vtuServiceClass.verifyMeterNumber(provider, meter_type, meter_number);
    }

    //recharge electricty meter
    async electricityMeterRecharge(provider, meter_type, meter_number, amount, phone_number){
        const vtuServiceClass = new vtuService(this.secretKey);
        return await vtuServiceClass.electricityMeterRecharge(provider, meter_type, meter_number, amount, phone_number)
    }
}
module.exports = vtu;