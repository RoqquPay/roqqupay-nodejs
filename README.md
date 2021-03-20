# roqqupay-nodejs
A library for integrating roqqupay apis using nodejs

#installation
You can install the package via npm :
```bash
npm install roqqupay-nodejs
```

#Usage

```javascript
   //Get all token prices
   const RoqquPay = require('roqqupay-nodejs');
   (async function(){
   const RoqquPayClass = new RoqquPay();
   const priceInfo = await RoqquPayClass.prices.getPrices();
   console.log(priceInfo);
 })();
```

```javascript
   //Get a specific token price
   const RoqquPay = require('roqqupay-nodejs');
   (async function(){
       const RoqquPayClass = new RoqquPay();
       //This is the token symbol of the token you intend to retrieve data for
       const token = 'btc';
       const priceInfo = await RoqquPayClass.prices.getPrice(token);
       console.log(priceInfo);
 })();
```

```javascript
   //Get price history
   const RoqquPay = require('roqqupay-nodejs');
  (async function(){
       const RoqquPayClass = new RoqquPay();
       //This is the token symbol of the token you intend to retrieve data for
      const token = 'btc';
       const priceHistory = await RoqquPayClass.prices.getPriceHistory(token);
       console.log(priceHistory);
 })();
```

```javascript
   //Get wallet data
   const RoqquPay = require('roqqupay-nodejs');
  (async function(){
       const RoqquPayClass = new RoqquPay();
       //this is the token for the wallet address you want to retrieve data for
        const token = 'btc';
       //this is the wallet address you want to retrieved data for
       const walletAddress = 'wallet address'
      const addressData = await RoqquPayClass.wallet.getWalletData(token, walletAddress);
      console.log(addressData);
 })();
```

```javascript
   //Generate wallet address
   const RoqquPay = require('roqqupay-nodejs');
  (async function(){
       //your roqqu secret key
       const secretKey = 'Bearer RQ-SEC-XXXXXXXXX';
       const RoqquPayClass = new RoqquPay(secretKey);
      //this is the token for the wallet address you want to generate
       const token = 'btc';
       const addressData = await RoqquPayClass.wallet.generateWalletAddress(token);
       console.log(addressData);
 })();
```

```javascript
   //Get wallet addresses
   const RoqquPay = require('roqqupay-nodejs');
  (async function(){
       //your roqqu secret key
       const secretKey = 'Bearer RQ-SEC-XXXXXXXXX';
       const RoqquPayClass = new RoqquPay(secretKey);
      //this is the token for the wallet address you want to generate
       const token = 'btc';
       const walletAddresses = await RoqquPayClass.wallet.getWalletAddresses(token);
       console.log(walletAddresses);
 })();
```

```javascript
   //Get wallet addresses
   const RoqquPay = require('roqqupay-nodejs');
  (async function(){
       //your roqqu secret key
       const secretKey = 'Bearer RQ-SEC-XXXXXXXXX';
       const RoqquPayClass = new RoqquPay(secretKey);
      //this is the token for the wallet address you want to generate
       const token = 'btc';
       const walletAddresses = await RoqquPayClass.wallet.getWalletAddresses(token);
       console.log(walletAddresses);
 })();
```

```javascript
   //delete wallet addresses
   const RoqquPay = require('roqqupay-nodejs');
  (async function(){
       //your roqqu secret key
       const secretKey = 'Bearer RQ-SEC-XXXXXXXXX';
       const RoqquPayClass = new RoqquPay(secretKey);
      //this is the token for the wallet address you want to generate
       const token = 'btc';
       const walletAddress = 'wallet address you want to delete'
       const deleteWalletAddress = await RoqquPayClass.wallet.deleteWalletAddress(token, walletAddress);
       console.log(deleteWalletAddress);
 })();
```

```javascript
   //get data bundles
   const RoqquPay = require('roqqupay-nodejs');
  (async function(){
       const RoqquPayClass = new RoqquPay();
       const provider = 'mtn';
       const dataBundles = await RoqquPayClass.vtu.getDataBundes(provider);
       console.log(dataBundles);
 })();
```

```javascript
   //recharge airtime
   const RoqquPay = require('roqqupay-nodejs');
  (async function(){
      //your roqqu secret key
      const secretKey = 'Bearer RQ-SEC-XXXXXXXXX';
      const RoqquPayClass = new RoqquPay(secretKey);
      const phoneNumber = 'phone number you want to recharge';
      const amount = 'amount you want to recharge'
      const rechargeAirtime = await RoqquPayClass.vtu.rechargeAirtime(phoneNumber, amount);
      console.log(rechargeAirtime);
 })();
```

```javascript
   //get data bundles
   const RoqquPay = require('roqqupay-nodejs');
  (async function(){
       const RoqquPayClass = new RoqquPay();
       const provider = 'mtn';
       const dataBundles = await RoqquPayClass.vtu.getDataBundes(provider);
       console.log(dataBundles);
 })();
```

```javascript
   //get cable bundles
   const RoqquPay = require('roqqupay-nodejs');
  (async function(){
      //your roqqu secret key
       const secretKey = 'Bearer RQ-SEC-XXXXXXXXX';
       const RoqquPayClass = new RoqquPay(secretKey);
       //This is the provider of the cable, dstv, gotv and startimes currently enabled
       const provider = 'dstv';
       const cableBundles = await RoqquPayClass.vtu.getCableBundes(operator);
       console.log(cableBundles);
 })();
```

```javascript
   //get account detail
   const RoqquPay = require('roqqupay-nodejs');
  (async function(){
      //your roqqu secret key
       const secretKey = 'Bearer RQ-SEC-XXXXXXXXX';
       const RoqquPayClass = new RoqquPay(secretKey);
       const getAccountData = await RoqquPayClass.account.getAccountDetail();
       console.log(getAccountData);
 })();
```

```javascript
   //verify bvn
   const RoqquPay = require('roqqupay-nodejs');
  (async function(){
      //your roqqu secret key
       const secretKey = 'Bearer RQ-SEC-XXXXXXXXX';
       const RoqquPayClass = new RoqquPay(secretKey);
       const bvn = 'bvn digits';
       const verifyBvn = await RoqquPayClass.account.bvnVerify(bvn);
       console.log(verifyBvn);
 })();
```

```javascript
   //get banks
   const RoqquPay = require('roqqupay-nodejs');
  (async function(){
      //your roqqu secret key
       const secretKey = 'Bearer RQ-SEC-XXXXXXXXX';
       const RoqquPayClass = new RoqquPay(secretKey);
       const banks = await RoqquPayClass.account.getBanks();
       console.log(banks);
 })();
```

```javascript
   //verify account detail
   const RoqquPay = require('roqqupay-nodejs');
  (async function(){
      //your roqqu secret key
       const secretKey = 'Bearer RQ-SEC-XXXXXXXXX';
       const RoqquPayClass = new RoqquPay(secretKey);
       const accountNumber = 'bank account number';
       const bankName = 'This is the name of the bank gotten from the bank list api';
       const resolveAccount = await RoqquPayClass.account.accountResolve(accountNumber, bankName);
       console.log(resolveAccount);
 })();
```