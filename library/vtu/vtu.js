const vtuService = require('../../services/vtu/vtu');
class Vtu{
    constructor(secretKey) {
        this.vtuService = new vtuService(secretKey)
    }
    async rechargeAirtime(phone_number, amount){
        return await this.vtuService.rechargeAirtime(phone_number, amount);
    }

    //get data buncles
    async getDataBundes(provider){
      return await this.vtuService.getDataBundes(provider);
    }

    //subscribe data
    async dataSubscription(provider, variation_code, phone_number){
        return this.vtuService.dataSubscription(provider, variation_code, phone_number);
    }

    //get cable buncles
    async getCableBundes(provider){
        return await this.vtuService.getCableBundles(provider);
    }

    //verify meter number
    async verifyMeterNumber(provider, meter_type, meter_number){
        return await this.vtuService.verifyMeterNumber(provider, meter_type, meter_number);
    }

    //recharge electricty meter
    async electricityMeterRecharge(provider, meter_type, meter_number, amount, phone_number){
        return await this.vtuService.electricityMeterRecharge(provider, meter_type, meter_number, amount, phone_number)
    }
}
module.exports = Vtu;